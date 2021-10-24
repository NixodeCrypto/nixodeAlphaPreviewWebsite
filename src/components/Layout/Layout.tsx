/** @jsxImportSource @emotion/react */
import { ThemeProvider, Global } from '@emotion/react';
import { GlobalTheme, GlobalReset } from '@/UI';
import Navbar from '@/components/Navbar';

const Layout = (props: { children: JSX.Element }): JSX.Element => {
  const { children } = props;
  return (
    <>
      <Navbar />
      <Global styles={GlobalReset} />
      <ThemeProvider theme={GlobalTheme}>{children}</ThemeProvider>
    </>
  );
};

export default Layout;
