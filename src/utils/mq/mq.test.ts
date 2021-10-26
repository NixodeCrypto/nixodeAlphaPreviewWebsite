import mq from '.';

describe('utils/mq', () => {
  it('generates media query css string from breakpoints object in global theme', () => {
    const bp = mq('md');
    expect(bp).toBe(`@media (min-width: 960px)`);
  });
});
