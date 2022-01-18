/** @jsxImportSource @emotion/react */
import { useEffect } from 'react';
import { ThemeProvider, Global } from '@emotion/react';
import { GlobalTheme, GlobalReset } from '@/UI';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Box from '@/components/Box';

const Layout = (props: {
  children?: JSX.Element | JSX.Element[];
  nonStandardLayout?: boolean;
}): JSX.Element => {
  const { children, nonStandardLayout = false } = props;

  useEffect(() => {
    // TODO: Add authentication on server and verify whether user is signed in on a global state
    document.cookie = 'signed_in=false';
    // TODO: Add language translation API
    document.cookie = 'lang=en';
  }, []);

  return (
    <>
      <Global styles={GlobalReset} />
      <ThemeProvider theme={GlobalTheme}>
        <Navbar />
        {nonStandardLayout ? children : <Box pt="xl">{children}</Box>}
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
