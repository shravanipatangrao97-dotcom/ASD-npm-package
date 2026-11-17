const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const slugify = require('../src/slugify');

describe('slugify', () => {
  it('converts basic text into a slug', () => {
    assert.equal(slugify('Hello World'), 'hello-world');
  });

  it('handles multiple spaces and symbols', () => {
    assert.equal(slugify('  Hello,   World!  123  '), 'hello-world-123');
  });

  it('removes accents and diacritics', () => {
    assert.equal(slugify('Crème Brûlée'), 'creme-brulee');
    assert.equal(slugify('Café au Lait'), 'cafe-au-lait');
  });

  it('supports custom separator', () => {
    assert.equal(slugify('Hello World', { separator: '_' }), 'hello_world');
  });

  it('supports lowercase = false option', () => {
    assert.equal(slugify('Hello World', { lowercase: false }), 'Hello-World');
  });

  it('returns empty string for non-string or empty input', () => {
    assert.equal(slugify(''), '');
    assert.equal(slugify(null), '');
    assert.equal(slugify(undefined), '');
    assert.equal(slugify(123), '');
  });
});
