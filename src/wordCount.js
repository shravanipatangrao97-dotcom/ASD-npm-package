/**
 * Counts the number of words in a string.
 *
 * @param {string} str - The input string.
 * @returns {number} The word count.
 */
function wordCount(str) {
  if (typeof str !== 'string') return 0;

  const trimmed = str.trim();
  if (!trimmed) return 0;

  return trimmed.split(/\s+/).length;
}

module.exports = wordCount;
