const timesTwo = require('./takeproducts');

test('return value with tax', () => {
    expect(timesTwo(10, 6)).toBe(16);
});
