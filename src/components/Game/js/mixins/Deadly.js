import nodeRenderer from '../renderers/nodeRenderer'
import stateManager from '../managers/state'

/**
 * Deadly
 */
const Deadly = {
  /**
   * Register an action for collision with player
   * so we can determine when the player is killed
   */
  registerActions() {
    const addTo = this._collider ? this._collider : this._mesh
    const player = nodeRenderer.getPlayer()._mesh
    const killAction = new window.BABYLON.SwitchBooleanAction(
      {
        trigger: window.BABYLON.ActionManager.OnIntersectionEnterTrigger,
        parameter: player,
      },
      stateManager,
      '_gameOver',
    )

    addTo.actionManager = new window.BABYLON.ActionManager(this._scene)
    addTo.actionManager.registerAction(killAction)
  },
}

export default Deadly
