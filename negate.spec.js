import negate from '../src/negate';

describe('negate', () => {
    it('negate', () => {
      expect(negate(42)).toEqual(-42);
    });
  });