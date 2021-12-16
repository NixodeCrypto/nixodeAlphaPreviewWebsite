/** @jsxImportSource @emotion/react */
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
