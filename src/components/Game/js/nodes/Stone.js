import Node from './Node';
import Moveable from '../mixins/Moveable';
import Deadly from '../mixins/Deadly';

/**
 * Stone level element
 */
class Stone extends Node {
    constructor(mesh, position, scene) {
        super(mesh, position, scene);
        this.registerActions();
        this.type = 'stone';
    }
}

Object.assign(Stone.prototype, Moveable, Deadly);

export default Stone;
