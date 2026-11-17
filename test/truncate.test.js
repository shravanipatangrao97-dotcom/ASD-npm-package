const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const truncate = require('../src/truncate');

describe('truncate', () => {
  it('does not truncate strings shorter than max length', () => {
    assert.equal(truncate('Hello', 10), 'Hello');
  });

  it('truncates strings exceeding max length using default ellipsis', () => {
    assert.equal(truncate('Hello World!', 8), 'Hello...');
  });

  it('supports custom omission string', () => {
    assert.equal(truncate('Hello World!', 8, '[..]'), 'Hell[..]');
    assert.equal(truncate('Hello World!', 8, { omission: '--' }), 'Hello --');
  });

  it('supports options object as second argument', () => {
    assert.equal(truncate('Hello World!', { length: 8, omission: '..' }), 'Hello ..');
  });

  it('handles length smaller than omission indicator', () => {
    assert.equal(truncate('Hello World!', 2), '..');
    assert.equal(truncate('Hello World!', 0), '');
  });

  it('returns empty string for non-string input', () => {
    assert.equal(truncate(null), '');
    assert.equal(truncate(undefined), '');
    assert.equal(truncate(123), '');
  });
});
