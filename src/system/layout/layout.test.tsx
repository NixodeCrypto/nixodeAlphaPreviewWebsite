/* @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { mount } from 'enzyme';
import layout, { LayoutProps } from '.';

describe('system/layout', () => {
  it('can use layout config properties', () => {
    const Styled = styled.div<LayoutProps>`
      ${layout};
    `;

    const tree = mount(<Styled width="10rem" />);
    expect(tree).toHaveStyleRule('width', '10rem');
  });
});
