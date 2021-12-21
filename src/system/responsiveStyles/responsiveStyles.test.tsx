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
  it('creates responsive style object with strToObj values', () => {
    const resObj = {
      xss: 'secondary.500',
      xs: 'primary.500',
      md: 'accent.400',
    };
    const scale = 'backgroundColor';
    expect(responsiveStyles(resObj, scale)).toStrictEqual({
      [mq('xss')]: {
        backgroundColor: GlobalTheme.colors.secondary['500'],
      },
      [mq('xs')]: {
        backgroundColor: GlobalTheme.colors.primary['500'],
      },
      [mq('md')]: {
        backgroundColor: GlobalTheme.colors.accent['400'],
      },
    });
  });
  it('creates responsive style object with alias scales', () => {
    const resObj = { xss: 'sm', xs: 'md', md: 'lg' };
    const scale = 'px';
    expect(responsiveStyles(resObj, scale)).toStrictEqual({
      [mq('xss')]: {
        paddingRight: GlobalTheme.space.sm,
        paddingLeft: GlobalTheme.space.sm,
      },
      [mq('xs')]: {
        paddingRight: GlobalTheme.space.md,
        paddingLeft: GlobalTheme.space.md,
      },
      [mq('md')]: {
        paddingRight: GlobalTheme.space.lg,
        paddingLeft: GlobalTheme.space.lg,
      },
    });
  });
  it('creates style object with no responsiveness', () => {
    const resObj = '1rem';
    const scale = 'px';
    expect(responsiveStyles(resObj, scale)).toStrictEqual({
      paddingRight: '1rem',
      paddingLeft: '1rem',
    });
  });
  it('creates responsive style object with property alias scale', () => {
    const resObj = { xss: '1rem', md: 'sm' };
    const scale = 'screenMaxWidth';
    expect(responsiveStyles(resObj, scale)).toStrictEqual({
      [mq('xss')]: {
        maxWidth: '1rem',
      },
      [mq('md')]: {
        maxWidth: GlobalTheme.screenMaxWidths.sm,
      },
    });
  });
  it('creates responsive style object with custom fn transformer', () => {
    const resObj = { xss: '1rem', md: 'md' };
    const scale = 'verticalGap';
    expect(responsiveStyles(resObj, scale)).toStrictEqual({
      [mq('xss')]: {
        '* + *': {
          marginTop: '1rem',
        },
      },
      [mq('md')]: {
        '* + *': {
          marginTop: GlobalTheme.space.md,
        },
      },
    });
  });
});
