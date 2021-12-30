import { ReactWrapper } from 'enzyme';
import Span from '.';
import { GlobalTheme } from '@/UI';
import { mountWithTheme } from '@/utils';

let wrapper: ReactWrapper;

beforeAll(() => {
  wrapper = mountWithTheme(<Span px="sm" fontSize="2rem" />);
});

describe('components/Span', () => {
  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  describe('typography css properties', () => {
    it('font-size', () => {
      expect(wrapper).toHaveStyleRule('font-size', '2rem');
    });
  });
  it('access to theme', () => {
    expect(wrapper).toHaveStyleRule('padding-right', GlobalTheme.space.sm);
    expect(wrapper).toHaveStyleRule('padding-left', GlobalTheme.space.sm);
  });
});
