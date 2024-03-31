/**
 * Moveable
 */
const Moveable = {
    /**
     * @type {Number}
     * @private
     */
    _velocity: 1,
    _active: false,

    /**
     * Move
     * @param {Number} speed
     */
    move(speed) {
        this._mesh.position.z -= (speed * this._velocity);
        if (this._collider) this._collider.position.z = this._mesh.position.z;
    },

    /**
     * Set position
     * @param {Number} position
     */
    setPosition(position) {
        this._mesh.position = position;
        if (this._collider) this._collider.position = position;
    },

    /**
     * Should deactivate
     * @return {boolean}
     */
    shouldDeactivate() {
        return this._mesh.position.z < -18;
    },

    /**
     * activate
     */
    activate(position) {
        this._active = true;
        if (position) this.setPosition(position);
    },

    /**
     * deactivate
     */
    deactivate() {
        this._active = false;
    },

    /**
     * is active
     * @return {boolean}
     */
    isActive() {
        return this._active;
    }
};

export default Moveable;
