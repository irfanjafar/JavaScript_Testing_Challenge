const mebikibi = require('../src/003');

test('mebikibi test for "512MB"', () => {
    expect(mebikibi(512)).toBe(524288);
  });