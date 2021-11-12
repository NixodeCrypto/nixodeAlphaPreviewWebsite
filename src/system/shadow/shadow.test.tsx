/* @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { mount } from 'enzyme';
import shadow, { ShadowProps } from '.';

describe('system/shadow', () => {
  it('can use shadow config properties', () => {
    const Styled = styled.div<ShadowProps>`
      ${shadow};
    `;

    const tree = mount(<Styled boxShadow="1px 10px #FFFFFF" />);
    expect(tree).toHaveStyleRule('box-shadow', '1px 10px #FFFFFF');
  });
});
