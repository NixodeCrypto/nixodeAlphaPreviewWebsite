import '@emotion/react';

type PaletteGenObj = { light: string; base: string; dark: string };
declare module '@emotion/react' {
  export interface Theme {
    space: {
      xss: string;
      xs: string;
      s: string;
      m: string;
      l: string;
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
      primary: PaletteGenObj;
      secondary: PaletteGenObj;
      accent: PaletteGenObj;
    };
    fonts: {
      title: string;
      text: string;
    };
  }
}
