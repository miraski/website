import config from '../config/game'
import modifiersManager from '../managers/modifiers'
import stateManager from '../managers/state'
import soundManager from '../managers/sound'

const MOVE_LEFT = 'moveLeft'
const MOVE_RIGHT = 'moveRight'

/**
 * Player Node
 */
class Player {
  /**
   * @constructor
   * @param {Object} scene - The scene window.BABYLON.object
   * @param {Object} model - The player's 3D model
   */
  constructor(model, scene) {
    this._model = model
    this._scene = scene
    this._currentPosition = 0
    this._animations = []
    this.load()
  }

  /**
   * Load module
   */
  load() {
    this._createMesh()
    this._loadModel()
  }

  /**
   * Show intro animation
   */
  showIntroAnimation() {
    const keyframes = [
      { frame: 0, value: this._mesh.position.z },
      { frame: 60, value: -10 },
    ]
    const animation = new window.BABYLON.Animation(
      'Intro',
      'position.z',
      60,
      window.BABYLON.Animation.ANIMATIONTYPE_FLOAT,
      window.BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT,
    )
    animation.setKeys(keyframes)
    this._scene.beginDirectAnimation(this._mesh, [animation], 0, 60)
  }

  /**
   * Move player to the left
   */
  moveLeft() {
    const moveTo = this._getMoveTo(MOVE_LEFT)
    if (moveTo !== false && !stateManager.gameIsOver) {
      soundManager.playSound('moveLeft')
      this._moveToLane(moveTo)
    }
  }

  /**
   * Move player to the right
   */
  moveRight() {
    const moveTo = this._getMoveTo(MOVE_RIGHT)
    if (moveTo !== false && !stateManager.gameIsOver) {
      soundManager.playSound('moveRight')
      this._moveToLane(moveTo)
    }
  }

  /**
   * Reset player position
   */
  reset() {
    this._mesh.position.x = 0
    this._mesh.position.z = -25
    this._currentPosition = 0
  }

  /**
   * Get the player's Mesh
   * @returns {Object} Mesh
   */
  getMesh() {
    return this._mesh
  }

  /**
   * @getter
   * return {object}
   */
  get position() {
    return this._mesh.position
  }

  /**
   * Create the containing mesh for the player
   * this mesh will be hidden and is used for collision
   */
  _createMesh() {
    this._mesh = window.BABYLON.Mesh.CreateBox('player', 2, this._scene)
    this._mesh.scaling.y = 3
    this._mesh.scaling.x = 0.4
    this._mesh.scaling.z = 0.5
    this._mesh.position.y = 3
    this._mesh.visibility = 0
    this._mesh.bakeCurrentTransformIntoVertices()
    this._mesh.position.z = -25
  }

  /**
   * Load 3D Model
   */
  _loadModel() {
    this._model.forEach((mesh) => {
      mesh.parent = this._mesh
      mesh.rotation.y = Math.PI / 2
    })
    this._mesh.scaling = new window.BABYLON.Vector3(0.8, 0.8, 0.8)
  }

  /**
   * Move to lane
   * @param {number} position - the x position the player has to move to
   */
  _moveToLane(position) {
    const rotate = position > this._currentPosition ? 10 : -10
    // Save new position
    this._currentPosition = position

    this._stopAnimations()

    this._setMoveAnimations([
      {
        name: 'Move',
        value: 'position.x',
        keyframes: [
          { frame: 0, value: this._mesh.position.x },
          { frame: 20 * modifiersManager.modifiers.agility, value: position },
        ],
        duration: 20 * modifiersManager.modifiers.agility,
        blend: false,
      },
      {
        name: 'Turn',
        value: 'rotation.y',
        keyframes: [
          { frame: 0, value: 0 },
          { frame: 15, value: Math.PI / rotate },
          { frame: 30 * modifiersManager.modifiers.agility, value: 0 },
        ],
        duration: 30 * modifiersManager.modifiers.agility,
        blend: true,
      },
    ])
  }

  /**
   * Create move animations
   * @param {array} animations
   * @private
   */
  _setMoveAnimations(animations) {
    const easingFunction = new window.BABYLON.ExponentialEase()
    easingFunction.setEasingMode(
      window.BABYLON.EasingFunction.EASINGMODE_EASEINOUT,
    )
    animations.forEach((animation) => {
      const anim = new window.BABYLON.Animation(
        animation.name,
        animation.value,
        60,
        window.BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        window.BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT,
      )
      anim.setKeys(animation.keyframes)
      anim.enableBlending = animation.blend
      anim.blendingSpeed = 0.05
      anim.setEasingFunction(easingFunction)
      this._animations.push(
        this._scene.beginDirectAnimation(
          this._mesh,
          [anim],
          0,
          animation.duration,
        ),
      )
    })
  }

  /**
   * Stop all animations
   * @private
   */
  _stopAnimations() {
    this._animations.forEach((animation) => animation.stop())
    this._animations = []
  }

  /**
   * Get the next move position
   * @param {string} direction
   * @return {number|boolean}
   * @private
   */
  _getMoveTo(direction) {
    const position = Math.round(this._currentPosition)
    if (direction === MOVE_LEFT) {
      return position > config.lanes[0] ? position - config.moveLength : false
    } else if (direction === MOVE_RIGHT) {
      return position < config.lanes[config.lanes.length - 1]
        ? position + config.moveLength
        : false
    }
  }
}

export default Player
