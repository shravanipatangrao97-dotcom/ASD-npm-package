/**
 * Capitalizes the first character of a string.
 *
 * @param {string} str - The input string.
 * @param {Object|boolean} [options={}] - Options object or boolean flag for lowerRest.
 * @param {boolean} [options.lowerRest=false] - Whether to lowercase the remainder of the string.
 * @returns {string} The capitalized string.
 */
function capitalize(str, options = {}) {
  if (typeof str !== 'string' || str.length === 0) return '';

  const lowerRest = typeof options === 'boolean' ? options : Boolean(options && options.lowerRest);
  const first = str.charAt(0).toUpperCase();
  const rest = lowerRest ? str.slice(1).toLowerCase() : str.slice(1);

  return first + rest;
}

module.exports = capitalize;
