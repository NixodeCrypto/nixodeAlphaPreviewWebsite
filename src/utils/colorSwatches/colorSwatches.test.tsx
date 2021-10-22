import colorSwatches from '.';

describe('utils/colorSwatches', () => {
  it('generates color palette from hex color', () => {
    const palette = colorSwatches('#0000FF');
    expect(palette).toMatchObject({
      '50': '#adadff',
      '100': '#9393ff',
      '200': '#6b6bff',
      '300': '#3d3dff',
      '400': '#1f1fff',
      '500': '#0000FF',
      '600': '#0000c2',
      '700': '#00009d',
      '800': '#00007e',
      '900': '#00006c',
    });
  });
  it('generates color palette from rgb color', () => {
    const palette = colorSwatches('rgb(0,0,255)');
    expect(palette).toMatchObject({
      '50': '#adadff',
      '100': '#9393ff',
      '200': '#6b6bff',
      '300': '#3d3dff',
      '400': '#1f1fff',
      '500': 'rgb(0,0,255)',
      '600': '#0000c2',
      '700': '#00009d',
      '800': '#00007e',
      '900': '#00006c',
    });
  });
});
