import Node from './Node'
import Moveable from '../mixins/Moveable'
import nodeRenderer from '../renderers/nodeRenderer'
import soundManager from '../managers/sound'
import scoreManager from '../managers/score'
import physicsManager from '../managers/physics'

/**
 * Jager level element
 */
class JagerMeister extends Node {
  constructor(mesh, position, scene, game) {
    super(mesh, position, scene)
    this._position = position
    this._game = game
    this.collected = false
    this.load()
    this.type = 'jagermeister'
  }

  load() {
    this.setupAnimations()
    this.registerActions()
  }

  /**
   * Register an action for collision with player
   * so we can determine when the player is killed
   */
  registerActions() {
    const player = nodeRenderer.getPlayer()
    const collectAction = new window.BABYLON.ExecuteCodeAction(
      {
        trigger: window.BABYLON.ActionManager.OnIntersectionEnterTrigger,
        parameter: player._mesh,
      },
      () => this.beginCollectAnimation(),
    )

    this._mesh.actionManager = new window.BABYLON.ActionManager(this._scene)
    this._mesh.actionManager.registerAction(collectAction)
  }

  beginCollectAnimation() {
    if (this.collected) {
      return
    }
    this.collected = true
    scoreManager.updateScore('jagers')
    this.addToBoostMeter()
    let animation = new window.BABYLON.Animation(
      'position',
      'position.y',
      60,
      window.BABYLON.Animation.ANIMATIONTYPE_FLOAT,
      window.BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT,
    )
    const keys = []
    keys.push({ frame: 0, value: this._mesh.position.y })
    keys.push({ frame: 60, value: this._mesh.position.y + 40 })
    animation.setKeys(keys)
    soundManager.playSound('jager')
    this._scene.beginDirectAnimation(this._mesh, [animation], 0, 60, false, 1)
  }

  /**
   * Set up all animations
   */
  setupAnimations() {
    this.setupRotateAnimation()
  }

  /**
   * Setup rotating animation for the jager
   * to suggest it as collectable
   */
  setupRotateAnimation() {
    let animation = new window.BABYLON.Animation(
      'rotate',
      'rotation.y',
      60,
      window.BABYLON.Animation.ANIMATIONTYPE_FLOAT,
      window.BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE,
    )
    const keys = [
      {
        frame: 0,
        value: 0,
      },
      {
        frame: 100,
        value: Math.PI,
      },
    ]
    animation.setKeys(keys)
    this._mesh.animations.push(animation)
    this._scene.beginAnimation(this._mesh, 0, 100, true)
  }

  move(speed) {
    if (this.collected) {
      speed /= 4
    }
    this._mesh.position.z -= speed
  }

  resetPosition() {
    super.resetPosition()
    this.collected = false
  }

  addToBoostMeter() {
    if (physicsManager.boostTime < 100) {
      physicsManager.boostTime = physicsManager.boostTime + 10
    }
  }
}

Object.assign(JagerMeister.prototype, Moveable)

export default JagerMeister
