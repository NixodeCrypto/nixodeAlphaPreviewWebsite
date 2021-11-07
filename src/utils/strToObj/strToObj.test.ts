import strToObj from '.';

describe('utils/strToObj', () => {
  it('converts dot notation string into object property', () => {
    expect(strToObj('a.b.c', { a: { b: { c: 1 } } })).toEqual(1);
  });
  it('returns first object property when string is not dot notation', () => {
    expect(strToObj('a', { a: 1 })).toEqual(1);
  });
  it('number indexing', () => {
    expect(strToObj('a.1', { a: { 1: 1 } })).toEqual(1);
  });
});
