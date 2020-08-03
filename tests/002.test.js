const sum  = require('../src/002');

test('sum test for "3+7"', () => {
  expect(sum(3,7)).toBe(10);
});