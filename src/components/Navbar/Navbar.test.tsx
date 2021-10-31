import { ReactWrapper, mount } from 'enzyme';
import { GlobalTheme } from '@/UI';
import Navbar from './Navbar';

let wrapper: ReactWrapper;

beforeAll(() => {
  wrapper = mount(<Navbar />);
});

describe('components/Navbar', () => {
  it('matches screenshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('zIndex', () => {
    expect(wrapper).toHaveStyleRule(
      'z-index',
      GlobalTheme.zIndices.navbar.toString(),
    );
  });
  it('correct links', () => {
    expect(wrapper.text().includes('Home'));
    expect(wrapper.text().includes('Prices'));
    expect(wrapper.text().includes('Portfolio'));
    expect(wrapper.text().includes('Learn'));
    expect(wrapper.text().includes('Sign in'));
    expect(wrapper.text().includes('Sign up'));
  });
});
