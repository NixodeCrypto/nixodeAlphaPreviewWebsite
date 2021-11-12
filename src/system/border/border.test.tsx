/* @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { mount } from 'enzyme';
import border, { BorderProps } from '.';

describe('system/border', () => {
  it('can use border config properties', () => {
    const Styled = styled.div<BorderProps>`
      ${border};
    `;

    const tree = mount(<Styled borderWidth="1rem" />);
    expect(tree).toHaveStyleRule('border-width', '1rem');
  });
});
