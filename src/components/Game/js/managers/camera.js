import nodeRenderer from '../renderers/nodeRenderer'

/**
 * @singleton CameraManager
 */
class CameraManager {
  /**
   * @type {object|null}
   * @private
   */
  _camera = null

  /**
   * load manager
   * @param {Scene} scene
   */
  load(scene) {
    this._camera = new window.BABYLON.FreeCamera(
      'camera',
      new window.BABYLON.Vector3(0, 7, -20),
      scene,
    )
    scene.activeCamera = this._camera
    scene.activeCamera.rotation.x = Math.PI / 25
  }

  /**
   * update camera
   */
  update() {
    this._camera.position.x = 0.65 * nodeRenderer.getPlayer().position.x
  }
}

export default new CameraManager()
