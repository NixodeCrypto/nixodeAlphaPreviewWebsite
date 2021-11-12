/* @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { mount } from 'enzyme';
import position, { PositionProps } from '.';

describe('system/position', () => {
  it('can use position config properties', () => {
    const Styled = styled.div<PositionProps>`
      ${position};
    `;

    const tree = mount(<Styled right="50%" />);
    expect(tree).toHaveStyleRule('right', '50%');
  });
});
