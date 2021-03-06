import { ReactWrapper } from 'enzyme';
import Grid from '.';
import { GlobalTheme } from '@/UI';
import { mountWithTheme } from '@/utils';

let wrapper: ReactWrapper;

beforeAll(() => {
  wrapper = mountWithTheme(
    <Grid
      gridTemplateRows="2rem"
      gridTemplateColumns="2rem"
      gridColumnGap="5rem"
      gridRowGap="3rem"
      px="sm"
    />,
  );
});

describe('components/Grid', () => {
  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  describe('grid css properties', () => {
    it('display', () => {
      expect(wrapper).toHaveStyleRule('display', 'grid');
    });
    it('grid-template-rows', () => {
      expect(wrapper).toHaveStyleRule('grid-template-rows', '2rem');
    });
    it('grid-template-columns', () => {
      expect(wrapper).toHaveStyleRule('grid-template-columns', '2rem');
    });
    it('grid-column-gap', () => {
      expect(wrapper).toHaveStyleRule('grid-column-gap', '5rem');
    });
    it('grid-row-gap', () => {
      expect(wrapper).toHaveStyleRule('grid-row-gap', '3rem');
    });
  });
  it('access to theme', () => {
    expect(wrapper).toHaveStyleRule('padding-right', GlobalTheme.space.sm);
    expect(wrapper).toHaveStyleRule('padding-left', GlobalTheme.space.sm);
  });
});
