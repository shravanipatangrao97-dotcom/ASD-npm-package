const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const capitalize = require('../src/capitalize');

describe('capitalize', () => {
  it('capitalizes the first letter of a string', () => {
    assert.equal(capitalize('hello'), 'Hello');
    assert.equal(capitalize('hello world'), 'Hello world');
  });

  it('keeps remaining characters intact by default', () => {
    assert.equal(capitalize('hELLO'), 'HELLO');
  });

  it('lowercases remainder when lowerRest option is true', () => {
    assert.equal(capitalize('hELLO WORLD', { lowerRest: true }), 'Hello world');
    assert.equal(capitalize('hELLO WORLD', true), 'Hello world');
  });

  it('handles already capitalized strings', () => {
    assert.equal(capitalize('Hello'), 'Hello');
  });

  it('returns empty string for non-string or empty input', () => {
    assert.equal(capitalize(''), '');
    assert.equal(capitalize(null), '');
    assert.equal(capitalize(undefined), '');
    assert.equal(capitalize(123), '');
  });
});
