import is from '../src/is';

// Replace with actual tests
describe('is', () => {
    it('is', () => {
        expect(is(String, new String(''))).toEqual(true);
    });
});

describe('is not', () => {
    it('is not', () => {
        expect(is(String, 100)).toEqual(false);
    });
});