import { mount } from 'enzyme';
import Input from '.';
import { GlobalTheme } from '@/UI';

describe('components/Input', () => {
  it('matches snapshot', () => {
    const wrapper = mount(<Input />);
    expect(wrapper).toMatchSnapshot();
  });
  it('preset value', () => {
    const wrapper = mount(<Input defaultValue="admin@example.com" />);
    expect(wrapper.props().defaultValue).toBe('admin@example.com');
  });
  describe('error state', () => {
    it('color change', () => {
      const wrapper = mount(<Input error />);
      expect(wrapper.find('InputWrapper')).toHaveStyleRule(
        'border-color',
        GlobalTheme.colors.red[500],
      );
    });

    it('error icon', () => {
      const wrapper = mount(<Input error />);
      expect(wrapper.find('AlertCircle').exists()).toBeTruthy();
    });

    it('error helper text', () => {
      const wrapper = mount(
        <Input error errorHelperLabel="Email Address Invalid" />,
      );
      expect(wrapper.find('Caption').text()).toBe('Email Address Invalid');
    });
  });
});
