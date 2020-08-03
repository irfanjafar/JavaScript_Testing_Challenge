const repeatString = require('../src/006');

test('repeatString test for "3x Makan!"', () => {
  expect(repeatString('Makan!',3)).toEqual('Makan!Makan!Makan!');
});