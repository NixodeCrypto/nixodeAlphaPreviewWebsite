import isObject from '.';

describe('utils/isObject', () => {
  it('returns true if object', () => {
    expect(isObject({})).toBe(true);
  });
  it('returns false if not object', () => {
    expect(isObject('A')).toBe(false);
  });
});
