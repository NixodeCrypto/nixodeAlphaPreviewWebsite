import { ReactWrapper } from 'enzyme';
import IconButton from '.';
import { GlobalTheme } from '@/UI';
import { mountWithTheme } from '@/utils';

let wrapper: ReactWrapper;

beforeAll(() => {
  wrapper = mountWithTheme(<IconButton />);
});

describe('components/IconButton', () => {
  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('set width and height', () => {
    expect(wrapper).toHaveStyleRule('width', GlobalTheme.sizes.md);
    expect(wrapper).toHaveStyleRule('height', GlobalTheme.sizes.md);
    expect(wrapper).toHaveStyleRule('min-width', GlobalTheme.sizes.md);
    expect(wrapper).toHaveStyleRule('min-height', GlobalTheme.sizes.md);
  });
  it('border', () => {
    expect(wrapper).toHaveStyleRule('border', GlobalTheme.borders.sm);
    expect(wrapper).toHaveStyleRule(
      'border-color',
      GlobalTheme.colors.grey['100'],
    );
  });
  it('proper centering', () => {
    expect(wrapper).toHaveStyleRule('display', 'flex');
    expect(wrapper).toHaveStyleRule('justify-content', 'center');
    expect(wrapper).toHaveStyleRule('align-items', 'center');
  });
  it('proper svg rendering', () => {
    expect(wrapper).toHaveStyleRule('color', GlobalTheme.colors.grey['500']);
    expect(wrapper).toHaveStyleRule('width', '22px', { target: 'svg' });
    expect(wrapper).toHaveStyleRule('height', '22px', { target: 'svg' });
  });
});
