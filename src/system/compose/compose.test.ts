import compose from '.';
import { GlobalTheme } from '@/UI';
import { mq } from '@/utils';

describe('system/compose', () => {
  it('deep merges css objects together', () => {
    const config = {
      bg: true,
      color: true,
      opacity: true,
    };
    const props = {
      bg: {
        xss: 'primary.400',
        xs: 'secondary.500',
        md: 'primary.200',
      },
      color: { xs: 'primary.200', md: 'secondary.500' },
    };
    expect(compose(props, config)).toStrictEqual({
      [mq('xss')]: {
        backgroundColor: GlobalTheme.colors.primary['400'],
      },
      [mq('xs')]: {
        backgroundColor: GlobalTheme.colors.secondary['500'],
        color: GlobalTheme.colors.primary['200'],
      },
      [mq('md')]: {
        backgroundColor: GlobalTheme.colors.primary['200'],
        color: GlobalTheme.colors.secondary['500'],
      },
    });
  });
  it('alias scales and multiple scales', () => {
    const config = {
      px: true,
      my: true,
      marginX: true,
    };

    const props = {
      px: {
        xss: '1rem',
        md: '3rem',
      },
      my: {
        md: '2rem',
        lg: '4rem',
      },
      marginX: {
        sm: '2rem',
      },
    };

    expect(compose(props, config)).toStrictEqual({
      [mq('xss')]: {
        paddingRight: '1rem',
        paddingLeft: '1rem',
      },
      [mq('sm')]: {
        marginRight: '2rem',
        marginLeft: '2rem',
      },
      [mq('md')]: {
        paddingRight: '3rem',
        paddingLeft: '3rem',
        marginTop: '2rem',
        marginBottom: '2rem',
      },
      [mq('lg')]: {
        marginTop: '4rem',
        marginBottom: '4rem',
      },
    });
  });
  it('responsive scales and singular values', () => {
    const config = {
      pr: true,
      pl: true,
    };

    const props = {
      pr: '1rem',
      pl: { xs: '1rem', md: '2rem' },
    };

    expect(compose(props, config)).toStrictEqual({
      paddingRight: '1rem',
      [mq('xs')]: {
        paddingLeft: '1rem',
      },
      [mq('md')]: {
        paddingLeft: '2rem',
      },
    });
  });
  it('cssTransform prop array scales', () => {
    const config = {
      screenMaxWidth: true,
    };

    const props = {
      screenMaxWidth: { xs: '1rem', md: 'sm' },
    };

    expect(compose(props, config)).toStrictEqual({
      [mq('xs')]: {
        maxWidth: '1rem',
      },
      [mq('md')]: {
        maxWidth: GlobalTheme.breakpoints.sm,
      },
    });
  });
  it('cssTransform custom fn transformer', () => {
    const config = {
      px: true,
      verticalGap: true,
    };

    const props = {
      px: { xs: '1rem' },
      verticalGap: { xs: 'sm', md: 'lg' },
    };
    expect(compose(props, config)).toStrictEqual({
      [mq('xs')]: {
        paddingRight: '1rem',
        paddingLeft: '1rem',
        '* + *': {
          marginTop: GlobalTheme.space.sm,
        },
      },
      [mq('md')]: {
        '* + *': {
          marginTop: GlobalTheme.space.lg,
        },
      },
    });
  });
});
