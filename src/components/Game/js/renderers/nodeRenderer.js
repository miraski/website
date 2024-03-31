import PineTree from '../nodes/PineTree'
import JagerMeister from '../nodes/JagerMeister'
import Stone from '../nodes/Stone'
import Player from '../nodes/Player'
import meshHelper from '../helpers/meshHelper'
import nodeOptions from '../config/nodes'

/**
 * NodeRenderer
 * @singleton
 */
class NodeRenderer {
  /**
   * load
   * @param {object} scene
   * @param {object} models
   * @return {boolean}
   */
  load(scene, models) {
    this._createMeshes(scene, models)
    this._renderMeshes(scene, models)
    return true
  }

  /**
   * get moveable nodes
   * @return {array}
   */
  getMoveables() {
    return this._moveables
  }

  /**
   * get player node
   * @return {Player}
   */
  getPlayer() {
    return this._player
  }

  /**
   * create meshes
   * @param {object} scene
   * @param {object} stone
   * @param {object} pinetree
   * @param {object} jagermeister
   * @param {object} player
   * @private
   */
  _createMeshes(scene, { stone, pinetree, jagermeister, player }) {
    this._jagermeister = meshHelper.createMesh(
      scene,
      jagermeister,
      nodeOptions.jagermeister,
    )
    this._tree = meshHelper.createMesh(scene, pinetree, nodeOptions.tree)
    this._stone = meshHelper.createMesh(scene, stone, nodeOptions.stone)
    this._player = player
  }

  /**
   * render meshes
   * @param {object} scene
   * @private
   */
  _renderMeshes(scene) {
    this._player = new Player(this._player, scene)
    const position = new window.BABYLON.Vector3(-100, -100, -100)
    const tree = [...new Array(50).keys()].map(
      () => new PineTree(this._tree, position, scene),
    )
    const stone = [...new Array(50).keys()].map(
      () => new Stone(this._stone, position, scene),
    )
    const jagermeister = [...new Array(15).keys()].map(
      () => new JagerMeister(this._jagermeister, position, scene, scene._game),
    )
    this._moveables = [...tree, ...stone, ...jagermeister]
  }
}

export default new NodeRenderer()
