import '@emotion/react';
import { ColorSwatches } from '@/utils/colorSwatches';

declare module '@emotion/react' {
  export interface Theme {
    space: {
      xss: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    fontSizes: {
      // Footer fs
      footer: string;
      // Caption fs
      captionSm: string;
      captionLg: string;
      // Body fs
      bodySm: string;
      bodyLg: string;
      // H6 fs
      h6Sm: string;
      h6: string;
      // H5 fs
      h5Sm: string;
      h5: string;
      // H4 fs
      h4Sm: string;
      h4: string;
      // H3 fs
      h3Sm: string;
      h3: string;
      // H2 fs
      h2Sm: string;
      h2: string;
      // H1 fs
      h1Sm: string;
      h1: string;
    };
    colors: {
      primary: ColorSwatches;
      secondary: ColorSwatches;
      accent: ColorSwatches;
      red: ColorSwatches;
      pink: ColorSwatches;
      purple: ColorSwatches;
      deepPurple: ColorSwatches;
      indigo: ColorSwatches;
      blue: ColorSwatches;
      lightBlue: ColorSwatches;
      cyan: ColorSwatches;
      teal: ColorSwatches;
      green: ColorSwatches;
      lightGreen: ColorSwatches;
      lime: ColorSwatches;
      yellow: ColorSwatches;
      amber: ColorSwatches;
      orange: ColorSwatches;
      deepOrange: ColorSwatches;
      brown: ColorSwatches;
      grey: ColorSwatches;
      blueGrey: ColorSwatches;
    };
    fonts: {
      title: string;
      text: string;
    };
    fontWeights: {
      thin: number;
      light: number;
      regular: number;
      medium: number;
      semiBold: number;
      bold: number;
      extraBold: number;
    };
    lineHeights: Record<string, string>;
    letterSpacings: Record<string, string>;
    sizes: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    breakpoints: {
      xss: string;
      xs: string;
      s: string;
      m: string;
      l: string;
    };
    borders: Record<'sm', string>;
    radii: Record<'sm', string>;
    shadows: Record<string, string>;
    zIndices: Record<'navbar', number>;
    transition: Record<'standard', string>;
  }
}
