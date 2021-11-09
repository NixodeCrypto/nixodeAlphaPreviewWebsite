import cssTransform from '.';
import { GlobalTheme } from '@/UI';

describe('system/cssTransform', () => {
  it('can access theme based on scales array', () => {
    expect(cssTransform('marginTop', 'sm')).toStrictEqual({
      marginTop: GlobalTheme.space.sm,
    });
  });
  it('can access theme based on aliases', () => {
    expect(cssTransform('pt', 'sm')).toStrictEqual({
      paddingTop: GlobalTheme.space.sm,
    });
  });
  it('can access theme baed on multiples array', () => {
    expect(cssTransform('paddingX', 'sm')).toStrictEqual({
      paddingRight: GlobalTheme.space.sm,
      paddingLeft: GlobalTheme.space.sm,
    });
  });
  it('alias can access multiples', () => {
    expect(cssTransform('px', 'sm')).toStrictEqual({
      paddingRight: GlobalTheme.space.sm,
      paddingLeft: GlobalTheme.space.sm,
    });
  });
  it('regular css values (non-theme values) can display', () => {
    expect(cssTransform('px', '1rem')).toStrictEqual({
      paddingRight: '1rem',
      paddingLeft: '1rem',
    });
  });
  it('can access strToObj values', () => {
    expect(cssTransform('color', 'primary.500')).toStrictEqual({
      color: GlobalTheme.colors.primary['500'],
    });
  });
  it('alias can access theme values', () => {
    expect(cssTransform('bg', 'primary.500')).toStrictEqual({
      backgroundColor: GlobalTheme.colors.primary['500'],
    });
  });
});
