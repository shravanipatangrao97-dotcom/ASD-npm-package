const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const textkit = require('../src/index');

describe('textkit-lite package exports', () => {
  it('exports all expected functions', () => {
    assert.equal(typeof textkit.slugify, 'function');
    assert.equal(typeof textkit.capitalize, 'function');
    assert.equal(typeof textkit.truncate, 'function');
    assert.equal(typeof textkit.wordCount, 'function');
    assert.equal(typeof textkit.isPalindrome, 'function');
  });
});
