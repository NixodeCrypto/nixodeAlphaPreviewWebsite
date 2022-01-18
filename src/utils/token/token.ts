import { Theme } from '@emotion/react';
import { ColorSwatches } from '@/utils/colorSwatches';
import strToObj from '@/utils/strToObj';
import { GlobalTheme } from '@/UI';

interface FnTheme {
  space(key: keyof Theme['space']): string;
  fontSizes(key: keyof Theme['fontSizes']): string;
  fs(key: keyof Theme['fontSizes']): string;
  colors(key: `${keyof Theme['colors']}.${keyof ColorSwatches}`): string;
  fonts(key: keyof Theme['fonts']): string;
  fontWeights(key: keyof Theme['fontWeights']): string;
  lineHeights(key: keyof Theme['lineHeights']): string;
  letterSpacings(key: keyof Theme['letterSpacings']): string;
  sizes(key: keyof Theme['sizes']): string;
  screenMaxWidths(key: keyof Theme['screenMaxWidths']): string;
  breakpoints(key: keyof Theme['breakpoints']): string;
  bp(key: keyof Theme['breakpoints']): string;
  borders(key: keyof Theme['borders']): string;
  radii(key: keyof Theme['radii']): string;
  shadows(key: keyof Theme['shadows']): string;
  zIndices(key: keyof Theme['zIndices']): number;
  transition(key: keyof Theme['transition']): string;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const token: FnTheme = (() => {
  const tokenAliases = [
    ['fs', 'fontSizes'],
    ['bp', 'breakpoints'],
  ];
  // key value array pairs from global theme object (e.g. ["space", {"sm": rem(4), "xs": "rem(8)"...}])
  const tokenEntries = Object.entries(GlobalTheme);
  for (let i = 0; i < tokenEntries.length; i += 1) {
    const tokenVal = { ...tokenEntries[i][1] };
    // turn second property in key value array into function that returns a specific property
    // from each theme category (e.g. ["space", ("xss") => space.xss])
    tokenEntries[i][1] = (key: string) => strToObj(key, tokenVal);
  }

  // handle tokenAliases
  for (let i = 0; i < tokenEntries.length; i += 1) {
    tokenAliases.forEach((alias) => {
      // (e.g. "fontSizes" in alias list matches "fontSizes" in GlobalTheme, so a replica with the
      // alias key is pushed into the tokenEntries array)
      if (alias[1] === tokenEntries[i][0]) {
        tokenEntries.push([alias[0], tokenEntries[i][1]]);
      }
    });
  }

  return Object.fromEntries(tokenEntries);
})();

export default token;
