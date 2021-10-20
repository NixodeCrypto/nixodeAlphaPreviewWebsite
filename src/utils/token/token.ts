import { GlobalTheme } from '@/UI';
import { Theme } from '@emotion/react';

// Helper function for emotionjs

interface FnTheme {
  space(key: keyof Theme['space']): string;
  fontSizes(key: keyof Theme['fontSizes']): string;
  fs(key: keyof Theme['fontSizes']): string;
  colors(key: keyof Theme['colors']): string;
  fonts(key: keyof Theme['fonts']): string;
  fontWeights(key: keyof Theme['fontWeights']): string;
  lineHeights(key: keyof Theme['lineHeights']): string;
  letterSpacings(key: keyof Theme['letterSpacings']): string;
  sizes(key: keyof Theme['sizes']): string;
  breakpoints(key: keyof Theme['breakpoints']): string;
  bp(key: keyof Theme['breakpoints']): string;
  borders(key: keyof Theme['borders']): string;
  borderWidths(key: keyof Theme['borderWidths']): string;
  borderStyles(key: keyof Theme['borderStyles']): string;
  radii(key: keyof Theme['radii']): string;
  shadows(key: keyof Theme['shadows']): string;
  zIndices(key: keyof Theme['zIndices']): string;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const token: FnTheme = (() => {
  const tokenAliases = [
    ['fs', 'fontSizes'],
    ['bp', 'breakpoints'],
  ];
  const tokenEntries = Object.entries(GlobalTheme);
  for (let i = 0; i < tokenEntries.length; i += 1) {
    const tokenVal = { ...tokenEntries[i][1] };
    tokenEntries[i][1] = (key: string) =>
      key.split('.').reduce((o: any, j) => o[j], tokenVal);
  }

  for (let i = 0; i < tokenEntries.length; i += 1) {
    tokenAliases.forEach((alias) => {
      if (alias[1] === tokenEntries[i][0]) {
        tokenEntries.push([alias[0], tokenEntries[i][1]]);
      }
    });
  }

  return Object.fromEntries(tokenEntries);
})();

export default token;
