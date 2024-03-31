export default {
  /**
   * Create the containing mesh for the player
   * and bind the loaded model meshes to it
   * @param {Object} scene - scene instance
   * @param {Array} model - array of meshes
   * @param {Object} options - name, scale and size of the mesh
   * @returns {Object} mesh
   */
  createMesh(scene, model, options) {
    let mesh = window.BABYLON.Mesh.CreateBox(options.name, options.size, scene)
    mesh.visibility = 0
    mesh.position = new window.BABYLON.Vector3(0, -500, -500)
    model.forEach((subMesh) => (subMesh.parent = mesh))
    mesh.scaling = new window.BABYLON.Vector3(
      options.scale,
      options.scale,
      options.scale,
    )

    return mesh
  },
  /**
   * Clone a given mesh and set its position
   * @param {Object} mesh - mesh object to clone
   * @param {Vector3} position - position to move the clone to
   * @returns {Mesh} clone - cloned mesh
   */
  cloneMesh(mesh, position) {
    const clone = mesh.clone()
    clone.position = position
    return clone
  },
}
