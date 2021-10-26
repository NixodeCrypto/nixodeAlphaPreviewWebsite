import parseBreakpoint from '.';

describe('utils/parseBreakpoint', () => {
  it('returns breakpoint in number format from global theme breakpoint object key', () => {
    const bp = parseBreakpoint('md');
    expect(bp).toBe(960);
  });
});
