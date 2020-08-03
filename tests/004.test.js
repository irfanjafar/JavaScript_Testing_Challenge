const isLeapYear = require('../src/004');

test('isLeapYear test for "2004"', () => {
    expect(isLeapYear(2004)).toBe("2004 adalah tahun kabisat");
  });