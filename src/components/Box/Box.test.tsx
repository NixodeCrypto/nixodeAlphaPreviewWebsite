import { ReactWrapper } from 'enzyme';
import Box from '.';
import { GlobalTheme } from '@/UI';
import mountWithTheme from '@/utils/mountWithTheme';

let wrapper: ReactWrapper;

beforeAll(() => {
  wrapper = mountWithTheme(
    <Box
      m="20px"
      p="20px"
      mx="sm"
      px={{ sm: '10px', md: '20px' }}
      width="20px"
      height="20px"
      border="1px solid black"
      position="absolute"
      boxShadow="5px 10px black"
      background="blue"
    />,
  );
});

describe('components/Box', () => {
  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('background', () => {
    expect(wrapper).toHaveStyleRule('background', 'blue');
  });
  it('space', () => {
    expect(wrapper).toHaveStyleRule('margin', '20px');
    expect(wrapper).toHaveStyleRule('padding', '20px');
  });
  it('layout', () => {
    expect(wrapper).toHaveStyleRule('width', '20px');
    expect(wrapper).toHaveStyleRule('height', '20px');
  });
  it('border', () => {
    expect(wrapper).toHaveStyleRule('border', '1px solid black');
  });
  it('shadow', () => {
    expect(wrapper).toHaveStyleRule('box-shadow', '5px 10px black');
  });
  it('position', () => {
    expect(wrapper).toHaveStyleRule('position', 'absolute');
  });
  it('theming', () => {
    expect(wrapper).toHaveStyleRule('margin-right', GlobalTheme.space.sm);
    expect(wrapper).toHaveStyleRule('margin-left', GlobalTheme.space.sm);
  });
});
