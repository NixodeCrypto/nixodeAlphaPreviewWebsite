import compose from '.';
import { GlobalTheme } from '@/UI';
import { mq } from '@/utils';

describe('system/compose', () => {
  it('deep merges css objects together', () => {
    const config = {
      background: true,
      color: true,
      opacity: true,
    };
    const props = {
      background: {
        xss: 'primary.400',
        xs: 'secondary.500',
        md: 'primary.200',
      },
      color: { xs: 'primary.200', md: 'secondary.500' },
    };
    expect(compose(props, config)).toStrictEqual({
      [mq('xss')]: {
        background: GlobalTheme.colors.primary['400'],
      },
      [mq('xs')]: {
        background: GlobalTheme.colors.secondary['500'],
        color: GlobalTheme.colors.primary['200'],
      },
      [mq('md')]: {
        background: GlobalTheme.colors.primary['200'],
        color: GlobalTheme.colors.secondary['500'],
      },
    });
  });
});
