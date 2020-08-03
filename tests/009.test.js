const symmetrical = require('../src/009');

test('symmetrical test', () => {
  expect(symmetrical('malam')).toBe(true) 
  expect(symmetrical('taat')).toBe(true)  
  expect(symmetrical('tidur')).toBe(false) 
  expect(symmetrical(1234)).toBe(false)   
  expect(symmetrical(108801)).toBe(true)  
  expect(symmetrical(8001008)).toBe(true) 
});