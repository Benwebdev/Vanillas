import flatten from '../src/flatten';

// Replace with actual tests
describe('flatten', () => {
  it('flatten', () => {
    expect(flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });
});