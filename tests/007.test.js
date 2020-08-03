const repeatLetter = require('../src/007');

test('repeatLetter test for "Hello World (2)"', () => {
  expect(repeatLetter('Hello World!',2)).toEqual('HHeelllloo WWoorrlldd!!');
});