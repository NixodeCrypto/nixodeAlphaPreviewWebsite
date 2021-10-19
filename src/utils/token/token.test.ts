import { GlobalTheme } from '@/UI';
import token from '.';

describe('utils/token', () => {
  test('single property access in design system object', () => {
    expect(token.space('s')).toBe(GlobalTheme.space.s);
  });
  test('dot notation property access in design system object', () => {
    expect(token.colors('primary.dark')).toBe(GlobalTheme.colors.primary.dark);
  });
  test('alias property access in design system object', () => {
    expect(token.fs('footer')).toBe(GlobalTheme.fontSizes.footer);
  });
});
