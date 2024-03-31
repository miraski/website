import config from '../config/modifiers';

/**
 * get modifier values
 * @param {object} modifiers
 * @return {object}
 */
const getModifierValues = modifiers => {
    return Object
        .entries(modifiers)
        .reduce((val, [modifier, value]) => {
            val[modifier] = config.options[modifier][value];
            return val;
        }, {});
};

/**
 * Modifiers Manager
 * @singleton
 */
class ModifiersManager {
    /**
     * @type {null|object}
     * @private
     */
    _modifiers = null;

    /**
     * load
     * @param {object} modifiers
     */
    load(modifiers) {
        this._modifiers = getModifierValues(modifiers);
    }

    /**
     * @getter
     * @return {null|Object}
     */
    get modifiers() {
        return this._modifiers;
    }
}

export default new ModifiersManager();
