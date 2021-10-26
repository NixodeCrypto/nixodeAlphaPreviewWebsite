import { GlobalTheme } from '@/UI';
import { Theme } from '@emotion/react';

// Media query helper for emotionjs

const mq = (breakpoint: keyof Theme['breakpoints']) =>
  `@media (min-width: ${GlobalTheme.breakpoints[breakpoint]})`;

export default mq;
