import helper from '../helpers/meshHelper'

/**
 * Base element all level elements extend
 */
class Node {
  /**
   * @type {boolean}
   * @private
   */
  _collider = false

  /**
   * @type {string|null}
   */
  type = null

  /**
   * @constructor
   * @param {Object} mesh
   * @param {Object} position
   * @param {Object} scene
   */
  constructor(mesh, position, scene) {
    this._scene = scene
    this._mesh = helper.cloneMesh(mesh, position)
    this._name = mesh.name
    this._position = position
  }

  /**
   * Reset position
   */
  resetPosition() {
    this._mesh.position = new window.BABYLON.Vector3(-100, -100, -100)
    if (this._collider) this._collider.position = this._mesh.position
  }

  /**
   * Dispose
   */
  dispose() {
    this._mesh.dispose()
    if (this._collider) this._collider.dispose()
  }

  /**
   * Get mesh
   * @return {Object}
   */
  getMesh() {
    return this._mesh
  }
}

export default Node
