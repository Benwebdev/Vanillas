import all from '../src/all';

// Replace with actual tests
describe('all', () => {
    const allSame = (function (x) {
        return function (y) {
          return x === y;
        };
      })(3);   

  it('all', () => {
    expect(all(allSame, [3, 3, 3, 3])).toEqual(true);
  });
  it('all not', () => {
    expect(all(allSame, [3, 3, 1, 3])).toEqual(false);
  });
});
