const censor = require('../src/010');

test('censoring "saya" and "nasi" test for "Saya ingin makan nasi goreng" ', () => {
  expect(censor('Saya ingin makan nasi goreng.',['saya','nasi'])).toEqual('#### ingin makan #### goreng.');
});