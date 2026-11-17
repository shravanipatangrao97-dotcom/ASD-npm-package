/**
 * Truncates a string to a maximum length with an omission indicator.
 *
 * @param {string} str - The input string.
 * @param {number|Object} [length=30] - Max length of output string, or options object.
 * @param {Object|string} [options={}] - Options object or omission string.
 * @param {string} [options.omission='...'] - The string indicating omission.
 * @returns {string} The truncated string.
 */
function truncate(str, length = 30, options = {}) {
  if (typeof str !== 'string') return '';

  let maxLen = length;
  let omission = '...';

  if (typeof length === 'object' && length !== null) {
    maxLen = typeof length.length === 'number' ? length.length : 30;
    omission = typeof length.omission === 'string' ? length.omission : '...';
  } else if (typeof options === 'string') {
    omission = options;
  } else if (typeof options === 'object' && options !== null) {
    if (typeof options.omission === 'string') {
      omission = options.omission;
    }
  }

  if (maxLen < 0) maxLen = 0;
  if (str.length <= maxLen) return str;
  if (maxLen <= omission.length) return omission.slice(0, maxLen);

  return str.slice(0, maxLen - omission.length) + omission;
}

module.exports = truncate;
