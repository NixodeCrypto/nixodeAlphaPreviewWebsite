import { mount } from 'enzyme';
import BrandLogo from './BrandLogo';

describe('components/BrandLogo', () => {
  it('matches snapshot', () => {
    const wrapper = mount(<BrandLogo />);
    expect(wrapper).toMatchSnapshot();
  });
});
