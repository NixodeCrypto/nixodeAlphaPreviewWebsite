import shallowFlatten from '.';

describe('utils/shallowFlatten', () => {
  it('flattens object once', () => {
    const obj = {
      color: {
        bg: 'backgroundColor',
      },
      space: {
        m: 'margin',
        mt: 'marginTop',
        mr: 'marginRight',
        mb: 'marginBottom',
        ml: 'marginLeft',
        mx: 'marginX',
        my: 'marginY',
        p: 'padding',
        pt: 'paddingTop',
        pr: 'paddingRight',
        pb: 'paddingBottom',
        pl: 'paddingLeft',
        px: 'paddingX',
        py: 'paddingY',
      },
    };

    expect(shallowFlatten(obj)).toStrictEqual({
      bg: 'backgroundColor',
      m: 'margin',
      mt: 'marginTop',
      mr: 'marginRight',
      mb: 'marginBottom',
      ml: 'marginLeft',
      mx: 'marginX',
      my: 'marginY',
      p: 'padding',
      pt: 'paddingTop',
      pr: 'paddingRight',
      pb: 'paddingBottom',
      pl: 'paddingLeft',
      px: 'paddingX',
      py: 'paddingY',
    });
  });
});
