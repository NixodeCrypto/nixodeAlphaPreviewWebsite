import { Theme } from '@emotion/react';
import { GlobalTheme } from '@/UI';

const parseBreakpoint = (breakpoint: keyof Theme['breakpoints']): number =>
  parseInt(
    GlobalTheme.breakpoints[breakpoint].split('px').shift() as string,
    10,
  );

export default parseBreakpoint;
