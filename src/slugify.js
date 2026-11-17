/**
 * Converts a string into a URL-friendly slug.
 *
 * @param {string} str - The input string to slugify.
 * @param {Object} [options] - Optional settings.
 * @param {string} [options.separator='-'] - Separator between words.
 * @param {boolean} [options.lowercase=true] - Whether to convert to lowercase.
 * @returns {string} The slugified string.
 */
function slugify(str, options = {}) {
  if (typeof str !== 'string') return '';

  const { separator = '-', lowercase = true } = options;

  let result = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  if (lowercase) {
    result = result.toLowerCase();
  }

  // Replace non-alphanumeric characters with separator
  result = result.replace(/[^a-zA-Z0-9]+/g, separator);

  // Strip leading and trailing separators
  const escapedSeparator = separator.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  const trimPattern = new RegExp(`^${escapedSeparator}+|${escapedSeparator}+$`, 'g');

  return result.replace(trimPattern, '');
}

module.exports = slugify;
