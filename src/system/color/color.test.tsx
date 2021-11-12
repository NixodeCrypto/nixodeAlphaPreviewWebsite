/* @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { mount } from 'enzyme';
import color, { ColorProps } from '.';

describe('system/color', () => {
  it('can use color config properties', () => {
    const Styled = styled.div<ColorProps>`
      ${color};
    `;

    const tree = mount(<Styled backgroundColor="#FFFFFF" />);
    expect(tree).toHaveStyleRule('background-color', '#FFFFFF');
  });
  it('aliases', () => {
    const Styled = styled.div<ColorProps>`
      ${color};
    `;

    const tree = mount(<Styled bg="#FFFFFF" />);
    expect(tree).toHaveStyleRule('background-color', '#FFFFFF');
  });
});
