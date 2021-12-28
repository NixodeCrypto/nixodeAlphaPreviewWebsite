import { ReactWrapper } from 'enzyme';
import CoinTable from '.';
import { mountWithTheme } from '@/utils';

let sampleData: Record<string, any>;
let wrapper: ReactWrapper;

beforeAll(() => {
  sampleData = [
    {
      _id: '61aed321c05b119295c88fe9',
      id: 'btc-bitcoin',
      name: 'Bitcoin',
      img: 'https://static.coinpaprika.com/coin/btc-bitcoin/logo.png',
      symbol: 'BTC',
      rank: 1,
      circulating_supply: 18912744,
      total_supply: 18912744,
      max_supply: 21000000,
      beta_value: 0.937577,
      first_data_at: '2010-07-17T00:00:00Z',
      last_updated: '2021-12-27T22:57:08Z',
      quotes: {
        USD: {
          price: 51036.656169985,
          volume_24h: 27135932523.212,
          volume_24h_change_24h: 12.08,
          market_cap: 9.65243212758e11,
          market_cap_change_24h: 0.23,
          percent_change_15m: 0.01,
          percent_change_30m: -0.34,
          percent_change_1h: -0.11,
          percent_change_6h: -0.87,
          percent_change_12h: 0.35,
          percent_change_24h: 0.23,
          percent_change_7d: 8.84,
          percent_change_30d: -6.63,
          percent_change_1y: 92.41,
          ath_price: 68692.137036932,
          ath_date: '2021-11-10T16:51:15Z',
          percent_from_price_ath: -25.7,
        },
      },
    },
  ];
  wrapper = mountWithTheme(<CoinTable tickerData={sampleData} />);
});

describe('components/CoinTable', () => {
  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  describe('Table Head', () => {
    it('Name Th Tag Found', () => {
      expect(
        wrapper
          .find({ 'data-testid': 'TableHeader' })
          .at(0)
          .text()
          .split(/(?=[A-Z])/),
      ).toContain('Name');
    });
    it('Price Th Tag Found', () => {
      expect(
        wrapper
          .find({ 'data-testid': 'TableHeader' })
          .at(0)
          .text()
          .split(/(?=[A-Z])/),
      ).toContain('Price');
    });
    it('Change Th Tag Found', () => {
      expect(
        wrapper
          .find({ 'data-testid': 'TableHeader' })
          .at(0)
          .text()
          .split(/(?=[A-Z])/),
      ).toContain('Change');
    });
    it('Chart (7d) Th Tag Found', () => {
      expect(
        wrapper
          .find({ 'data-testid': 'TableHeader' })
          .at(0)
          .text()
          .split(/(?=[A-Z])/),
      ).toContain('Chart (7d)');
    });
  });
  describe('Table Body', () => {
    describe('General Data', () => {
      it('Icon src test', () => {
        expect(
          wrapper
            .find({ 'data-testid': 'generalData' })
            .at(0)
            .find('Image')
            .prop('src'),
        ).toEqual(sampleData[0].img);
      });
      it('Icon alt test', () => {
        expect(
          wrapper
            .find({ 'data-testid': 'generalData' })
            .at(0)
            .find('Image')
            .prop('alt'),
        ).toEqual(sampleData[0].name);
      });
      it('Name rendering test', () => {
        expect(
          wrapper
            .find({ 'data-testid': 'generalData' })
            .at(0)
            .text()
            .includes('Bitcoin'),
        ).toBeTruthy();
      });
      it('Symbol rendering test', () => {
        expect(
          wrapper
            .find({ 'data-testid': 'generalData' })
            .at(0)
            .text()
            .includes('BTC'),
        ).toBeTruthy();
      });
    });
    describe('Market Data', () => {
      it('Price rendering test', () => {
        expect(wrapper.text().includes('$51,036.66')).toBeTruthy();
      });
      it('24hr change rendering test', () => {
        expect(wrapper.text().includes('+0.23%')).toBeTruthy();
      });
    });
  });
});
