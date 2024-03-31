import uiManager from './ui';
import stateManager from './state';
import modifierManager from './modifiers';
import soundManager from './sound';
import controls from './controls';
import config from '../config/physics';

/**
 * Physics Manager
 */
class PhysicsManager {
    /**
     * @type {number}
     * @private
     */
    _boostTime = config.boost;

    /**
     * @type {number}
     * @private
     */
    _speed = config.speed;

    /**
     * @type {number}
     * @private
     */
    _speedIncrement = config.speedIncrement;

    /**
     * load
     */
    load() {
        this._boostTime = modifierManager.modifiers.boost;
    }

    /**
     * update
     */
    update() {
        const canBoost = controls.boostIsActive && this._boostTime > 0;
        const canRecharge = this._boostTime < modifierManager.modifiers.boost;
        const nextTick = stateManager.clock % (60 * config.accelerationTime) === 0 && stateManager.clock !== 0;

        if (canBoost) {
            this._boost();
        } else if (canRecharge) {
            this._rechargeBoost();
        }

        if (nextTick) {
            this._incrementSpeed();
        }
    }

    /**
     * reset
     */
    reset() {
        this._boostTime = modifierManager.modifiers.boost;
        uiManager.setBoostValue(modifierManager.modifiers.boost);
    }

    /**
     * @return {Number}
     */
    get speed() {
        return this._speed + this._speedIncrement + this.boostSpeed;
    }

    /**
     * @return {Number}
     */
    get boostSpeed() {
        if (controls.boostIsActive) {
            return config.boostSpeed;
        } else {
            return 0;
        }
    }

    /**
     * @getter
     * @return {number}
     */
    get boostTime() {
        return this._boostTime;
    }

    /**
     * @setter
     * @param {number} time
     */
    set boostTime(time) {
        this._boostTime = time;
    }

    /**
     * Boost speed
     * @private
     */
    _boost() {
        this._boostTime--;
        uiManager.setBoostValue(Math.floor(this._mapBoostTime(this._boostTime)));
    }

    /**
     * Recharge boost
     * @private
     */
    _rechargeBoost() {
        this._boostTime += config.boostRestoreAmount;
        uiManager.setBoostValue(this._mapBoostTime(this._boostTime));
        if (controls.boostIsActive) {
            soundManager.stopBoostSound();
            controls.boostIsActive = false;
        }
    }

    /**
     * Increment speed value
     */
    _incrementSpeed() {
        if (Math.ceil(this.speed) <= config.maxSpeed && !controls.boostIsActive) {
            this._speedIncrement += config.acceleration;
        }
    }

    /**
     * Map boost time
     * @param {Number} boostTime
     * @return {Number}
     */
    _mapBoostTime(boostTime) {
        return boostTime / modifierManager.modifiers.boost * 100;
    }
}

export default new PhysicsManager();
