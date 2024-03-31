import modelConfig from './config/models'
import sceneConfig from './config/scene'
import gameConfig from './config/game'

import modelManager from './managers/model'
import environment from './environment'

import groundProcess from './processes/groundProcess'
import levelProcess from './processes/levelProcess'

import nodeRenderer from './renderers/nodeRenderer'

import uiManager from './managers/ui'
import soundManager from './managers/sound'
import modifierManager from './managers/modifiers'
import scoreManager from './managers/score'
import stateManager from './managers/state'
import controlsManager from './managers/controls'
import physicsManager from './managers/physics'
import cameraManager from './managers/camera'

/**
 * @module Nav
 */
class Game {
  /**
   * @constructor
   * @param {HTMLElement} element
   * @param {Object} options
   */
  constructor(element, options) {
    this._element = element
    this._canvas = this._element.querySelector('canvas')
    this._options = Object.assign({}, gameConfig.modifiers, options)
    this._startEngine()
    this._createScene()
    this._load()
  }

  /**
   * start the game
   */
  startGame() {
    if (!stateManager.gameIsOver && stateManager.playCount) return
    if (stateManager.playCount) this._reset()

    uiManager.onGameStart()
    nodeRenderer.getPlayer().showIntroAnimation()
    soundManager.stopBackgroundSound()
    soundManager.playSound('background')
    this._render()
  }

  /**
   * stop the game
   */
  stopGame() {
    this._engine.stopRenderLoop()
    stateManager.updatePlaycount()
    stateManager.gameIsOver = true
    soundManager.playSound('scream')
    if (stateManager.playCount) uiManager.onGameStop(scoreManager.getTotal())
  }

  /**
   * Start the game Engine
   */
  _startEngine() {
    this._engine = new window.window.BABYLON.Engine(this._canvas, true)
    this._engine.enableOfflineSupport = false
    this._engine.setHardwareScalingLevel(1)
  }

  /**
   * create the scene instance
   * @private
   */
  _createScene() {
    this._scene = new window.window.BABYLON.Scene(this._engine)
    Object.assign(this._scene, sceneConfig.options)
  }

  /**
   * Construct module
   */
  _load() {
    uiManager.load(this._element, this)
    modifierManager.load(this._options.modifiers)
    scoreManager.reset()
    controlsManager.load(this)

    modelManager.load(this._scene, modelConfig).then((models) => {
      nodeRenderer.load(this._scene, models)
      environment.load(this._scene)
      levelProcess.load()
      groundProcess.load(this._scene)
      soundManager.load(this._scene)
      physicsManager.load()
      cameraManager.load(this._scene)
      uiManager.hideMenu()

      groundProcess.render()
      this._setupBeforeRender()
    })
  }

  /**
   * setup before render loop
   * @private
   */
  _setupBeforeRender() {
    this._scene.render()
    this._scene.registerBeforeRender(() => {
      this._update()
    })
  }

  /**
   * reset
   * @private
   */
  _reset() {
    scoreManager.reset()
    levelProcess.reset()
    physicsManager.reset()
    stateManager.reset()
    nodeRenderer.getPlayer().reset()
    groundProcess.reset()
  }

  /**
   * Render the game
   */
  _render() {
    this._engine.runRenderLoop(() => {
      this._scene.render()
      scoreManager.updateScore('points')
      uiManager.displayScore(scoreManager.getTotal())
      stateManager.updateClock()
    })
  }

  /**
   * update
   * @private
   */
  _update() {
    groundProcess.update(physicsManager.speed)
    levelProcess.update(physicsManager.speed)
    physicsManager.update()

    if (stateManager.gameIsOver) {
      this.stopGame()
    } else {
      cameraManager.update()
    }
  }
}

// Exports
export default Game
