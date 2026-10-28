const {square, sortedAsc} = require('./SquareOfNumbersAsc.js');

test('returns the square of numbers in ascending order', () => {
    expect(square([3, 1, 4, 2])).toEqual([1, 4, 9, 16]);
    expect(square([-2, -1, 0, 1, 2])).toEqual([0, 1, 1, 4, 4]);
    expect(square([5, 3, 8, 6])).toEqual([9, 25, 36, 64]);
    expect(square([-5, -3, -8, -6])).toEqual([9, 25, 36, 64]);
    expect(square([10])).toEqual([100]);
});