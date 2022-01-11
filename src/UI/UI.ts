import { css, Theme } from '@emotion/react';
import { rem } from 'polished';
import colorSwatches from '@/utils/colorSwatches'; // import directly to avoid circular dependency with utils/token

export const GlobalTheme: Theme = {
  space: {
    '-xl': rem(-64),
    '-lg': rem(-32),
    '-md': rem(-24),
    '-sm': rem(-16),
    '-xs': rem(-8),
    '-xss': rem(-4),
    xss: rem(4),
    xs: rem(8),
    sm: rem(16),
    md: rem(24),
    lg: rem(32),
    xl: rem(64),
  },
  fontSizes: {
    // Footer fs
    footer: rem(10),
    // Caption fs
    captionSm: rem(11),
    captionLg: rem(12),
    // Body fs
    bodySm: rem(14),
    bodyLg: rem(16),
    // H6 fs
    h6Sm: rem(12),
    h6: rem(14),
    // H5 fs
    h5Sm: rem(14),
    h5: rem(16),
    // H4 fs
    h4Sm: rem(16),
    h4: rem(20),
    // H3 fs
    h3Sm: rem(20),
    h3: rem(24),
    // H2 fs
    h2Sm: rem(24),
    h2: rem(34),
    // H1 fs
    h1Sm: rem(34),
    h1: rem(52),
  },
  colors: {
    // Brand Colors
    primary: colorSwatches('#FD9500'),
    secondary: colorSwatches('#82B5B2'),
    accent: colorSwatches('#DC5D3C'),
    // Base Colors
    red: colorSwatches('#f44336'),
    pink: colorSwatches('#e91e63'),
    purple: colorSwatches('#9c27b0'),
    deepPurple: colorSwatches('#673ab7'),
    indigo: colorSwatches('#3f51b5'),
    blue: colorSwatches('#2196f3'),
    lightBlue: colorSwatches('#03a9f4'),
    cyan: colorSwatches('#00bcd4'),
    teal: colorSwatches('#009688'),
    green: colorSwatches('#4caf50'),
    lightGreen: colorSwatches('#8bc34a'),
    lime: colorSwatches('#cddc39'),
    yellow: colorSwatches('#ffeb3b'),
    amber: colorSwatches('#ffc107'),
    orange: colorSwatches('#ff9800'),
    deepOrange: colorSwatches('#ff5722'),
    brown: colorSwatches('#795548'),
    grey: colorSwatches('#9e9e9e'),
    blueGrey: colorSwatches('#607d8b'),
  },
  fonts: {
    title: 'Inter, Roboto, sans-serif',
    text: 'Inter, Roboto, sans-serif',
  },
  fontWeights: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
  },
  lineHeights: {},
  letterSpacings: {
    sm: rem(1.5),
  },
  sizes: {
    xss: rem(14),
    xs: rem(19),
    sm: rem(28),
    md: rem(37),
    lg: rem(46),
    xl: rem(64),
    xxl: rem(144),
    card: rem(215),
    cardXl: rem(225),
    maxLayoutSm: rem(320),
    maxLayoutMd: rem(400),
    img: rem(432),
    imgXl: rem(480),
    input: rem(280),
    inputXl: rem(480),
    max: '100%',
  },
  screenMaxWidths: {
    xs: rem(400),
    sm: rem(700),
    md: rem(1100),
  },
  breakpoints: {
    xss: '0px',
    xs: '320px',
    sm: '640px',
    md: '960px',
    lg: '1280px',
  },
  borders: {
    sm: `${rem(2)} solid`,
  },
  radii: {
    sm: rem(4),
    xl: rem(24),
  },
  shadows: {
    focus: '0 0 0 3px rgba(66,153,225,0.3)',
    reg: 'rgba(0,0,0,0.1) 0px 4px 12px',
  },
  zIndices: {
    navbar: 9999,
    popup: 6000,
  },
  transition: {
    standard: 'all 0.1s ease-in-out, width 0s, height 0s',
  },
};

export const GlobalReset = css`
  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
  }
  main {
    display: block;
  }
  h1 {
    font-size: 2em;
    margin: 0 0;
  }
  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }
  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }
  a {
    background-color: transparent;
  }
  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }
  b,
  strong {
    font-weight: bolder;
  }
  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  img {
    border-style: none;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }
  button,
  input {
    /* 1 */
    overflow: visible;
  }
  button,
  select {
    /* 1 */
    text-transform: none;
  }
  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }
  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }
  progress {
    vertical-align: baseline;
  }
  textarea {
    overflow: auto;
  }
  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }
  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }
  [type='search'] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }
  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }
  details {
    display: block;
  }
  summary {
    display: list-item;
  }
  template {
    display: none;
  }
  [hidden] {
    display: none;
  }
`;
