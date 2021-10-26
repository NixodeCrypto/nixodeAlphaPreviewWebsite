import { Theme } from '@emotion/react';
import { GlobalTheme } from '@/UI';

const mq = (breakpoint: keyof Theme['breakpoints']) =>
  `@media (min-width: ${GlobalTheme.breakpoints[breakpoint]})`;

export default mq;
