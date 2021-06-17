import chain from '../src/chain';

describe('chain', () => {
  const duplicate = n => [n, n];
  it('chain', () => {
    expect(chain(duplicate, [1, 2, 3])).toEqual([1, 1, 2, 2, 3, 3]);
  });
});