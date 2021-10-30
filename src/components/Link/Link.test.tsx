import { mount } from 'enzyme';
import { GlobalTheme } from '@/UI';
import Link from '.';

describe('components/Link', () => {
  it('matches snapshot', () => {
    const wrapper = mount(<Link href="/" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('standard font-size', () => {
    const wrapper = mount(<Link href="/" />);
    expect(wrapper).toHaveStyleRule('font-size', GlobalTheme.fontSizes.bodyLg);
  });
  it('small size', () => {
    const wrapper = mount(<Link href="/" size="sm" />);
    expect(wrapper).toHaveStyleRule('font-size', GlobalTheme.fontSizes.bodySm);
  });
});
