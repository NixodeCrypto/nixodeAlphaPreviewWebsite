/* @jsxImportSource @emotion/react */
import responsiveStyles from '.';
import { GlobalTheme } from '@/UI';
import { mq } from '@/utils';

describe('system/responsiveStyles', () => {
  it('creates responsive style object from single scale', () => {
    const resObj = { xss: '1rem', xs: '2rem', md: '3rem' };
    const scale = 'width';
    expect(responsiveStyles(resObj, scale)).toStrictEqual({
      [mq('xss')]: {
        width: '1rem',
      },
      [mq('xs')]: {
        width: '2rem',
      },
      [mq('md')]: {
        width: '3rem',
      },
    });
  });
  it('creates responsive style object from multiple scales', () => {
    const resObj = { xss: '1rem', xs: '2rem', md: '3rem' };
    const scale = ['width', 'height'];
    expect(responsiveStyles(resObj, scale)).toStrictEqual({
      [mq('xss')]: {
        width: '1rem',
        height: '1rem',
      },
      [mq('xs')]: {
        width: '2rem',
        height: '2rem',
      },
      [mq('md')]: {
        width: '3rem',
        height: '3rem',
      },
    });
  });
  it('creates responsive style object with theme values', () => {
    const resObj = { xss: 'sm', xs: 'md', md: 'lg' };
    const scale = 'padding';
    expect(responsiveStyles(resObj, scale)).toStrictEqual({
      [mq('xss')]: {
        padding: GlobalTheme.space.sm,
      },
      [mq('xs')]: {
        padding: GlobalTheme.space.md,
      },
      [mq('md')]: {
        padding: GlobalTheme.space.lg,
      },
    });
  });
});
