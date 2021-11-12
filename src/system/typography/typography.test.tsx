/* @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { mount } from 'enzyme';
import typography, { TypographyProps } from '.';

describe('system/typography', () => {
  it('can use typography config properties', () => {
    const Styled = styled.div<TypographyProps>`
      ${typography};
    `;

    const tree = mount(<Styled fontSize="2rem" />);
    expect(tree).toHaveStyleRule('font-size', '2rem');
  });
});
