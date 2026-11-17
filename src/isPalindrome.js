/**
 * Determines whether a string is a palindrome.
 *
 * @param {string} str - The input string.
 * @param {Object} [options={}] - Optional settings.
 * @param {boolean} [options.caseSensitive=false] - Whether comparison is case-sensitive.
 * @param {boolean} [options.ignoreWhitespace=true] - Whether to ignore spaces.
 * @param {boolean} [options.ignorePunctuation=true] - Whether to ignore punctuation.
 * @returns {boolean} True if string is a palindrome, false otherwise.
 */
function isPalindrome(str, options = {}) {
  if (typeof str !== 'string') return false;

  const {
    caseSensitive = false,
    ignoreWhitespace = true,
    ignorePunctuation = true
  } = options;

  let cleaned = str;

  if (!caseSensitive) {
    cleaned = cleaned.toLowerCase();
  }

  if (ignoreWhitespace && ignorePunctuation) {
    cleaned = cleaned.replace(/[^a-zA-Z0-9]/g, '');
  } else {
    if (ignoreWhitespace) {
      cleaned = cleaned.replace(/\s+/g, '');
    }
    if (ignorePunctuation) {
      cleaned = cleaned.replace(/[^\w\s]|_/g, '');
    }
  }

  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

module.exports = isPalindrome;
