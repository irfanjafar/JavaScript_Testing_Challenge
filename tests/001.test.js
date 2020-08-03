const charLength  = require('../src/001');

test('Charlength test for "jest"', () => {
  expect(charLength('jest')).toBe(4);
});