const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const wordCount = require('../src/wordCount');

describe('wordCount', () => {
  it('counts words in a normal sentence', () => {
    assert.equal(wordCount('The quick brown fox'), 4);
  });

  it('handles irregular spaces and newlines', () => {
    assert.equal(wordCount('  The   quick\n\tbrown\nfox  '), 4);
  });

  it('returns 0 for empty or whitespace-only strings', () => {
    assert.equal(wordCount(''), 0);
    assert.equal(wordCount('    '), 0);
    assert.equal(wordCount('\n\t  '), 0);
  });

  it('returns 0 for non-string input', () => {
    assert.equal(wordCount(null), 0);
    assert.equal(wordCount(undefined), 0);
    assert.equal(wordCount(12345), 0);
  });
});
