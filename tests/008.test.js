const arrayMirror = require('../src/008');

test('arrayMirroring test for [1,2,3]', () => {
  expect(arrayMirror([1,2,3])).toEqual([1,2,3,3,2,1]);
});