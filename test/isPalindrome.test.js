const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const isPalindrome = require('../src/isPalindrome');

describe('isPalindrome', () => {
  it('identifies simple palindromes', () => {
    assert.equal(isPalindrome('racecar'), true);
    assert.equal(isPalindrome('kayak'), true);
    assert.equal(isPalindrome('hello'), false);
  });

  it('ignores casing and punctuation by default', () => {
    assert.equal(isPalindrome('A man, a plan, a canal: Panama'), true);
    assert.equal(isPalindrome("Madam, I'm Adam"), true);
  });

  it('supports caseSensitive option', () => {
    assert.equal(isPalindrome('Racecar', { caseSensitive: true }), false);
    assert.equal(isPalindrome('racecar', { caseSensitive: true }), true);
  });

  it('supports disabling ignoreWhitespace or ignorePunctuation', () => {
    assert.equal(isPalindrome('race car', { ignoreWhitespace: false }), false);
    assert.equal(isPalindrome('race:car', { ignorePunctuation: false }), false);
  });

  it('handles empty strings and edge cases', () => {
    assert.equal(isPalindrome(''), true);
    assert.equal(isPalindrome('a'), true);
    assert.equal(isPalindrome(null), false);
    assert.equal(isPalindrome(undefined), false);
  });
});
