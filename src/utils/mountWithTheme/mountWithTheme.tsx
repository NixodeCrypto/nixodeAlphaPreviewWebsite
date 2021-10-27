import { mount, ReactWrapper } from 'enzyme';
import { ThemeProvider } from '@emotion/react';
import { GlobalTheme } from '@/UI';

const mountWithTheme = (tree: JSX.Element): ReactWrapper => {
  const WrappingThemeProvider = ({ children }: { children: JSX.Element }) => (
    <ThemeProvider theme={GlobalTheme}>{children}</ThemeProvider>
  );

  return mount(tree, { wrappingComponent: WrappingThemeProvider });
};

export default mountWithTheme;
