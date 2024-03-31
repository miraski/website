const BaseUrl = '../../../../..'

/**
 * store models
 * @param {object} models
 * @param {string} name
 * @param {array} loadedMeshes
 * @return {*}
 */
const storeModels = (models, { name, loadedMeshes }) => {
  models[name] = loadedMeshes
  return models
}

/**
 * Loader
 */
class ModelManager {
  /**
   * load
   * @param {Scene} scene
   * @param {array} models
   * @return {Promise<array>}
   */
  load(scene, models) {
    this._loader = new window.BABYLON.AssetsManager(scene)
    this._loader.useDefaultLoadingScreen = false
    this._addModels(models)
    return this._loadModels()
  }

  /**
   * load models
   * @param {array} models
   * @return {Promise<>}
   * @private
   */
  _loadModels() {
    return new Promise((resolve, reject) => {
      this._loader.onFinish = (loadedModels) => {
        const modelList = loadedModels.reduce(storeModels, {})
        setTimeout(() => resolve(modelList), 1000)
      }
      this._loader.onError = (error) => reject(error)
      this._loader.load()
    })
  }

  /**
   * add models to loader
   * @param {array} models
   * @private
   */
  _addModels(models) {
    models.forEach((model) => {
      this._loader.addMeshTask(
        model.name,
        '',
        `${BaseUrl}/img/models/${model.folder}/`,
        model.filename,
      )
    })
  }
}

export default new ModelManager()
