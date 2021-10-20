/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import renderer from 'react-test-renderer';
import { css } from '@emotion/react';
import { matchers } from '@emotion/jest';
import variant from '.';

expect.extend(matchers);

const Styled = styled.div<{ color?: string }>`
  ${(props) =>
    variant(props.color, {
      primary: css`
        background: red;
      `,
      secondary: css`
        background: blue;
      `,
      accent: css`
        background: white;
      `,
      default: css`
        background: purple;
      `,
    })}
`;

describe('utils/variant', () => {
  it('functions with string properties', () => {
    const tree = renderer.create(<Styled color="secondary" />).toJSON();
    expect(tree).toHaveStyleRule('background', 'blue');
  });

  it('default variant works', () => {
    const tree = renderer.create(<Styled />).toJSON();
    expect(tree).toHaveStyleRule('background', 'purple');
  });
});
