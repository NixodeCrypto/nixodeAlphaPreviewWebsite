/** @jsxImportSource @emotion/react */
import { ThemeProvider, Global } from '@emotion/react';
import { GlobalTheme, GlobalReset } from '@/UI';

const Layout = (props: { children: JSX.Element }): JSX.Element => {
  const { children } = props;
  return (
    <>
      <Global styles={GlobalReset} />
      <ThemeProvider theme={GlobalTheme}>{children}</ThemeProvider>
    </>
  );
};

export default Layout;
