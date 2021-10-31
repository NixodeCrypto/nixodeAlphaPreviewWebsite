import { mount, ReactWrapper } from 'enzyme';
import Caption from './Caption';
import { GlobalTheme } from '@/UI';
import { mq } from '@/utils';

let wrapper: ReactWrapper;
beforeAll(() => {
  wrapper = mount(<Caption />);
});
describe('components/Caption', () => {
  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('renders as specified element', () => {
    expect(wrapper.find('p').exists()).toBeTruthy();
  });
  it('has correct percentage line-height', () => {
    expect(wrapper).toHaveStyleRule('line-height', '140%');
  });
  it('has correct default size', () => {
    expect(wrapper).toHaveStyleRule(
      'font-size',
      GlobalTheme.fontSizes.captionSm,
    );
    expect(wrapper).toHaveStyleRule(
      'font-size',
      GlobalTheme.fontSizes.captionLg,
      {
        media: mq('sm'),
      },
    );
  });
  it('extra small size', () => {
    const xsWrapper = mount(<Caption xs />);
    expect(xsWrapper).toHaveStyleRule(
      'font-size',
      GlobalTheme.fontSizes.footer,
    );
  });
});
