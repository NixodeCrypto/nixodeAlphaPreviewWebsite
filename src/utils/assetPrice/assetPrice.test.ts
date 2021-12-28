import assetPrice from '.';

describe('assetPrice', () => {
  describe('natural numbers', () => {
    it('rounding for asset prices above 0', () => {
      expect(assetPrice(20.215122)).toEqual('20.22');
    });
    it('rounding for asset prices above 0 and with extended decimal placement', () => {
      expect(assetPrice(20.00000001)).toEqual('20.00');
    });
  });
  describe('asset price < 1', () => {
    it('latest 2 numbers', () => {
      expect(assetPrice(0.000002214)).toEqual('0.0000022');
    });
    it('latest number if the latest 2 numbers are not available', () => {
      expect(assetPrice(0.000002)).toEqual('0.000002');
    });
  });
});
