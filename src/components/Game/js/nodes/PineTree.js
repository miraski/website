import Node from './Node'
import Moveable from '../mixins/Moveable'
import Deadly from '../mixins/Deadly'

/**
 * Pine tree level element
 */
class PineTree extends Node {
  /**
   * @constructor
   * @param {Object} mesh
   * @param {Object} position
   * @param {Object} scene
   */
  constructor(mesh, position, scene) {
    super(mesh, position, scene)
    this.addCollider()
    this.registerActions()
    this.type = 'tree'
  }

  /**
   * Add collider mesh
   */
  addCollider() {
    this._collider = window.BABYLON.Mesh.CreateBox('collider', 2, this._scene)
    this._collider.position = this._position
    this._collider.scaling.y = 4
    this._collider.visibility = 0
  }

  /**
   * Scale the obstacle mesh
   */
  scale() {
    this._mesh.scaling.x = 1.1
    this._mesh.scaling.z = 1.1
    this._mesh.scaling.y = 5.5
  }
}

Object.assign(PineTree.prototype, Moveable, Deadly)

export default PineTree
