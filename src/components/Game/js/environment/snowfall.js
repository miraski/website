const BaseUrl = '../../../../..'
import config from '../config/environment'
import physicsManager from '../managers/physics'

class Snowfall {
  /**
   * Load the obstacle instance
   * @param {object} scene
   */
  load(scene) {
    this._emitRate = 500
    this._scene = scene
    this.createMesh()
    this.createParticleSystem()
    this.position()
    this.rotation()
  }

  /**
   * Create the obstacle mesh
   */
  createMesh() {
    this._mesh = window.BABYLON.Mesh.CreateBox('foutain', 0.1, this._scene)
  }

  /**
   * Create the particle system
   */
  createParticleSystem() {
    this._particleSystem = new window.BABYLON.ParticleSystem(
      'particle',
      3500,
      this._scene,
    )
    this._particleSystem.particleTexture = new window.BABYLON.Texture(
      `${BaseUrl}/img/textures/driehoek.svg`,
      this._scene,
    )

    // add particle system onto the mesh
    this._particleSystem.emitter = this._mesh
    this._particleSystem.minEmitBox = new window.BABYLON.Vector3(-30, 0, 0)
    this._particleSystem.maxEmitBox = new window.BABYLON.Vector3(30, 0, 0)

    Object.assign(this._particleSystem, config.snow)

    // set emission rate
    this._particleSystem.emitRate = this._emitRate * physicsManager.speed

    // init particle system
    this._particleSystem.start()
  }

  /**
   * Set position of Mesh
   */
  position() {
    this._mesh.position.y = 20
    this._mesh.position.z = 15
  }

  /**
   * Set rotation of Mesh
   */
  rotation() {
    this._mesh.rotation.x = Math.PI / 3
    this._mesh.rotation.z = Math.PI
  }

  setUpdateSpeed(speed) {
    const updatedSpeed = config.snow.updateSpeed * speed
    if (this._particleSystem.updateSpeed !== updatedSpeed) {
      this._particleSystem.updateSpeed = updatedSpeed
    }
  }

  /**
   * Get the mesh Object
   * @returns {Object} Mesh
   */
  getMesh() {
    return this._mesh
  }
}

export default new Snowfall()
