import map from '../src/map';

describe('map', () => {
    const double = x => x * 2;
    it('map', () => {
        expect(map(double, [1, 2, 3])).toEqual([2, 4, 6]);
    });
});

describe('map2', () => {
    const upper = x => x.toUpperCase();
    it('map', () => {
        expect(map(upper, ["one", "two", "three"])).toEqual(["ONE", "TWO", "THREE"]);
    });
});

