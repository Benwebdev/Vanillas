import add from '../src/add';

// Replace with actual tests
describe('thing', () => {
  it('adds', () => {
    expect(add(2,2)).toEqual(4);
  });
});

describe('thing2', () => {
    const [num1, num2] = [10,20];
    it('adds', () => {
      expect(add(num1,num2)).toEqual(num1 + num2);
    });
  });