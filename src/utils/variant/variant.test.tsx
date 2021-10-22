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
      all: css`
        color: yellow;
      `,
      primary: css`
        background: red;
      `,
      secondary: css`
        background: blue;
      `,
      overrider: css`
        color: red;
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

  it("'all' style property gets added to all chosen variants", () => {
    const tree = renderer.create(<Styled color="primary" />).toJSON();
    expect(tree).toHaveStyleRule('color', 'yellow');
  });
  it("'all' style property gets added to default variant", () => {
    const tree = renderer.create(<Styled />).toJSON();
    expect(tree).toHaveStyleRule('color', 'yellow');
  });
  it("'all' styles can be overridden", () => {
    const tree = renderer.create(<Styled color="overrider" />).toJSON();
    expect(tree).toHaveStyleRule('color', 'red');
  });
});
