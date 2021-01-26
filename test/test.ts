import assert = require('assert');

describe('Array#join', () => {
  // This test intentionally fails
  it('joins all elements into a string with separator', () => {
    assert(['a', 'b', 'c'].join(':') === 'a:b:c:');
  });
});
