import { mount, ReactWrapper } from 'enzyme';
import Body from './Body';
import { GlobalTheme } from '@/UI';
import { mq } from '@/utils';

let wrapper: ReactWrapper;
beforeAll(() => {
  wrapper = mount(<Body />);
});
describe('components/Body', () => {
  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('renders as specified element', () => {
    expect(wrapper.find('p').exists()).toBeTruthy();
  });
  it('has correct percentage line-height', () => {
    expect(wrapper).toHaveStyleRule('line-height', '140%');
  });
  it('has correct size', () => {
    expect(wrapper).toHaveStyleRule('font-size', GlobalTheme.fontSizes.bodySm);
    expect(wrapper).toHaveStyleRule('font-size', GlobalTheme.fontSizes.bodyLg, {
      media: mq('sm'),
    });
  });
});
