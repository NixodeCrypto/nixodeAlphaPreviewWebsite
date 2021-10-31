import { mount } from 'enzyme';
import Header from './Header';
import { GlobalTheme } from '@/UI';
import { mq } from '@/utils';

describe('components/Header', () => {
  it('matches snapshot', () => {
    const wrapper = mount(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
  it('renders as specified element', () => {
    const wrapper = mount(<Header as="h2" />);
    expect(wrapper.find('h2').exists()).toBeTruthy();
  });
  it('has correct percentage line-height', () => {
    const wrapper = mount(<Header as="h1" />);
    expect(wrapper).toHaveStyleRule('line-height', '140%');
  });
  describe('sizes', () => {
    it('h1', () => {
      const wrapper = mount(<Header as="h1" />);
      expect(wrapper).toHaveStyleRule('font-size', GlobalTheme.fontSizes.h1Sm);
      expect(wrapper).toHaveStyleRule('font-size', GlobalTheme.fontSizes.h1, {
        media: mq('sm'),
      });
    });
    it('h2', () => {
      const wrapper = mount(<Header as="h2" />);
      expect(wrapper).toHaveStyleRule('font-size', GlobalTheme.fontSizes.h2Sm);
      expect(wrapper).toHaveStyleRule('font-size', GlobalTheme.fontSizes.h2, {
        media: mq('sm'),
      });
    });
    it('h3', () => {
      const wrapper = mount(<Header as="h3" />);
      expect(wrapper).toHaveStyleRule('font-size', GlobalTheme.fontSizes.h3Sm);
      expect(wrapper).toHaveStyleRule('font-size', GlobalTheme.fontSizes.h3, {
        media: mq('sm'),
      });
    });
    it('h4', () => {
      const wrapper = mount(<Header as="h4" />);
      expect(wrapper).toHaveStyleRule('font-size', GlobalTheme.fontSizes.h4Sm);
      expect(wrapper).toHaveStyleRule('font-size', GlobalTheme.fontSizes.h4, {
        media: mq('sm'),
      });
    });
    it('h5', () => {
      const wrapper = mount(<Header as="h5" />);
      expect(wrapper).toHaveStyleRule('font-size', GlobalTheme.fontSizes.h5Sm);
      expect(wrapper).toHaveStyleRule('font-size', GlobalTheme.fontSizes.h5, {
        media: mq('sm'),
      });
    });
    it('h6', () => {
      const wrapper = mount(<Header as="h6" />);
      expect(wrapper).toHaveStyleRule('font-size', GlobalTheme.fontSizes.h6Sm);
      expect(wrapper).toHaveStyleRule('font-size', GlobalTheme.fontSizes.h6, {
        media: mq('sm'),
      });
    });
  });
});
