import { GlobalTheme } from '@/UI';
import { Theme } from '@emotion/react';

const parseBreakpoint = (breakpoint: keyof Theme['breakpoints']): number =>
  parseInt(
    GlobalTheme.breakpoints[breakpoint].split('px').shift() as string,
    10,
  );

export default parseBreakpoint;
