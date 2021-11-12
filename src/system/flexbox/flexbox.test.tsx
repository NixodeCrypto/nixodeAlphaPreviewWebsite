/* @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { mount } from 'enzyme';
import flexbox, { FlexboxProps } from '.';

describe('system/flexbox', () => {
  it('can use flexbox config properties', () => {
    const Styled = styled.div<FlexboxProps>`
      ${flexbox};
    `;

    const tree = mount(<Styled justifyContent="space-between" />);
    expect(tree).toHaveStyleRule('justify-content', 'space-between');
  });
});
