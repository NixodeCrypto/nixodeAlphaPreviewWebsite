/* @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { mount } from 'enzyme';
import grid, { GridProps } from '.';

describe('system/grid', () => {
  it('can use grid config properties', () => {
    const Styled = styled.div<GridProps>`
      ${grid};
    `;

    const tree = mount(<Styled gridGap="1rem" />);
    expect(tree).toHaveStyleRule('grid-gap', '1rem');
  });
});
