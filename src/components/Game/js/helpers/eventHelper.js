/**
 * match a key code against a list of keys
 * @param {number} keyCode
 * @param {array} keys
 * @return {boolean}
 */
export const matchKeys = (keyCode, keys) => keys.find(code => code === keyCode);

export default { matchKeys }
