import { lighten, darken } from 'polished';

export interface ColorSwatches {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

// creates palette of colors based on single color prop given (500)
const colorSwatches = (color: string): ColorSwatches => ({
  50: lighten(0.34, color),
  100: lighten(0.288, color),
  200: lighten(0.21, color),
  300: lighten(0.12, color),
  400: lighten(0.06, color),
  500: color,
  600: darken(0.08, color),
  700: darken(0.122, color),
  800: darken(0.152, color),
  900: darken(0.2, color),
});

export default colorSwatches;
