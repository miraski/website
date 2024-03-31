import config from '../config/score'
import modifierManager from './modifiers'
import stateManager from './state'
import uiManager from './ui'

/**
 * score manager
 * @singleton
 */
class ScoreManager {
  /**
   * @type {object}
   * @private
   */
  _score = {}

  /**
   * reset
   */
  reset() {
    this._score = Object.entries(config).reduce((score, [key, value]) => {
      score[key] = { ...value }
      if (key === 'jagers') {
        score[key].multiplier = modifierManager.modifiers[key]
      }
      return score
    }, {})
  }

  /**
   * get total score
   * @return {number}
   */
  getTotal() {
    const total = Object.entries(this.score)
      .map(([_key, value]) => value.amount * value.multiplier)
      .reduce((total, score) => (total += score), 0)
    return Math.floor(total)
  }

  /**
   * update score
   * @param {string} type
   */
  updateScore(type) {
    if (stateManager.gameIsOver) return
    if (type === 'jagers') uiManager.jagerScore()

    this._score[type].amount++
  }

  /**
   * save score
   * @async
   * @param {string} action
   * @return {Promise}
   */
  save(action) {
    if (action) {
      return fetch(action, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: uiManager.getName(),
          score: this.getTotal(),
          scoreValues: this._score,
        }),
      })
    }
  }

  /**
   * @getter
   * @return {Object}
   */
  get score() {
    return this._score
  }
}

export default new ScoreManager()
