import { ReactWrapper } from 'enzyme';
import Flex from '.';
import { GlobalTheme } from '@/UI';
import mountWithTheme from '@/utils/mountWithTheme';

let wrapper: ReactWrapper;

beforeAll(() => {
  wrapper = mountWithTheme(
    <Flex
      alignItems="center"
      justifyContent="center"
      flexGrow={1}
      flexDirection="column"
      px="sm"
    />,
  );
});

describe('components/Flex', () => {
  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  describe('flex css properties', () => {
    it('display', () => {
      expect(wrapper).toHaveStyleRule('display', 'flex');
    });
    it('align-items', () => {
      expect(wrapper).toHaveStyleRule('align-items', 'center');
    });
    it('justify-content', () => {
      expect(wrapper).toHaveStyleRule('justify-content', 'center');
    });
    it('flex-grow', () => {
      expect(wrapper).toHaveStyleRule('flex-grow', '1');
    });
    it('flex-direction', () => {
      expect(wrapper).toHaveStyleRule('flex-direction', 'column');
    });
  });
  it('access to theme', () => {
    expect(wrapper).toHaveStyleRule('padding-right', GlobalTheme.space.sm);
    expect(wrapper).toHaveStyleRule('padding-left', GlobalTheme.space.sm);
  });
});
