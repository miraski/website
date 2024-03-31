import snowfall from './snowfall'
import config from '../config/environment'

export default {
  load(scene) {
    this._scene = scene
    this._drawSky()
    this._drawFog()
    this._drawSnow()
    this._setupLights()
  },

  /**
   * Create Sky
   */
  _drawSky() {
    const skyMaterial = new window.BABYLON.SkyMaterial(
      'skyMaterial',
      this._scene,
    )
    const skybox = window.BABYLON.Mesh.CreateBox('skyBox', 1000.0, this._scene)
    Object.assign(skyMaterial, config.sky)
    skybox.material = skyMaterial
    skybox.position.y = 500
  },

  /**
   * Create Fog
   */
  _drawFog() {
    Object.assign(this._scene, config.fog)
  },

  /**
   * Draw snow
   */
  _drawSnow() {
    snowfall.load(this._scene)
  },

  /**
   * Create Lights
   */
  _setupLights() {
    this._light = new window.BABYLON.HemisphericLight(
      '1',
      new window.BABYLON.Vector3(0, 400, 20),
      this._scene,
    )
    this._light.diffuse = new window.BABYLON.Color4(0.88, 0.94, 1, 0.5)
    this._light.specular = new window.BABYLON.Color3(0, 0, 0)
    this._light.intensity = 1
    this._pointLights = [
      new window.BABYLON.PointLight(
        '1',
        new window.BABYLON.Vector3(-40, 900, 10),
        this._scene,
      ),
      new window.BABYLON.PointLight(
        '1',
        new window.BABYLON.Vector3(40, 900, 10),
        this._scene,
      ),
    ]
    for (const light of this._pointLights) {
      light.intensity = 0.015
      light.diffuse = new window.BABYLON.Color3(1, 1, 1)
    }
  },
}
