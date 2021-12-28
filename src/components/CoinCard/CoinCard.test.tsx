import { ReactWrapper } from 'enzyme';
import CoinCard from '.';
import { GlobalTheme } from '@/UI';
import { mountWithTheme, mq } from '@/utils';

let sampleData: Record<string, any>;
let wrapper: ReactWrapper;

beforeAll(() => {
  sampleData = {
    name: 'Bitcoin',
    img: 'https://static.coinpaprika.com/coin/btc-bitcoin/logo.png',
    symbol: 'BTC',
    quotes: {
      USD: {
        price: 50813.83584317,
        percent_change_7d: 10.57,
      },
    },
  };
  wrapper = mountWithTheme(<CoinCard tickerData={sampleData} />);
});

describe('components/CoinCard', () => {
  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  describe('size rendering', () => {
    it('renders correct width', () => {
      expect(wrapper.find({ 'data-testid': 'wrapper' })).toHaveStyleRule(
        'width',
        GlobalTheme.sizes.card,
        { media: mq('xss') },
      );
      expect(wrapper.find({ 'data-testid': 'wrapper' })).toHaveStyleRule(
        'width',
        GlobalTheme.sizes.cardXl,
        { media: mq('lg') },
      );
    });

    it('renders correct height', () => {
      expect(wrapper.find({ 'data-testid': 'wrapper' })).toHaveStyleRule(
        'height',
        GlobalTheme.sizes.card,
        { media: mq('xss') },
      );
      expect(wrapper.find({ 'data-testid': 'wrapper' })).toHaveStyleRule(
        'height',
        GlobalTheme.sizes.cardXl,
        { media: mq('lg') },
      );
    });
  });

  describe('border styling', () => {
    it('border', () => {
      expect(wrapper.find({ 'data-testid': 'wrapper' })).toHaveStyleRule(
        'border',
        GlobalTheme.borders.sm,
      );
    });

    it('borderColor', () => {
      expect(wrapper.find({ 'data-testid': 'wrapper' })).toHaveStyleRule(
        'border-color',
        GlobalTheme.colors.grey['100'],
      );
    });

    it('borderRadius', () => {
      expect(wrapper.find({ 'data-testid': 'wrapper' })).toHaveStyleRule(
        'border-radius',
        GlobalTheme.radii.sm,
      );
    });
  });

  describe('correct text rendering', () => {
    it('name rendering', () => {
      expect(wrapper.find({ 'data-testid': 'name' }).at(2).text()).toEqual(
        'Bitcoin',
      );
    });
    it('symbol rendering', () => {
      expect(wrapper.find({ 'data-testid': 'symbol' }).at(2).text()).toEqual(
        'BTC',
      );
    });
    it('price change rendering', () => {
      expect(
        wrapper.find({ 'data-testid': 'priceChange' }).at(2).text(),
      ).toEqual('+10.57%');
    });
    it('price rendering', () => {
      expect(wrapper.find({ 'data-testid': 'price' }).at(2).text()).toEqual(
        '$50,813.84',
      );
    });
  });
});
