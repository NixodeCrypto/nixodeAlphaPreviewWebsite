import Select from '.';
import { GlobalTheme } from '@/UI';
import { mountWithTheme } from '@/utils';

describe('components/Select', () => {
  it('matches snapshot', () => {
    const wrapper = mountWithTheme(<Select />);
    expect(wrapper).toMatchSnapshot();
  });
  /*
  describe('sizes', () => {
    it('sm', () => {});
    it('md', () => {});
    it('lg', () => {});
  });
  describe('menu', () => {
    it('css on closed state', () => {});
    it('css on open state', () => {});
    it('displays item list', () => {});
  });
  describe('other props', () => {
    it('label', () => {});
    it('value', () => {});
    it('onChange', () => {});
  });
   * */
});
