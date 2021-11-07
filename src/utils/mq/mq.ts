import { Theme } from '@emotion/react';
import { GlobalTheme } from '@/UI';

const mq = (breakpoint: keyof Theme['breakpoints'], testing = false): string =>
  testing
    ? `(min-width: ${GlobalTheme.breakpoints[breakpoint]})`
    : `@media (min-width: ${GlobalTheme.breakpoints[breakpoint]})`;

export default mq;
