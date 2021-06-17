import compose from '../src/compose';
import add from '../src/add';

// Replace with actual tests
describe('compose', () => {
  it('compose', () => {
    const a = compose(add(2,2),add(2,2)); 
    console.log(a);
    // expect(compose(add(2,2),add(2,2))).toEqual(8);
  });
});