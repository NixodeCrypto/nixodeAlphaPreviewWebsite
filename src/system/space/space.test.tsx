/* @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { mount } from 'enzyme';
import space, { SpaceProps } from '.';

describe('system/space', () => {
  it('can use space config properties', () => {
    const Styled = styled.div<SpaceProps>`
      ${space};
    `;

    const tree = mount(<Styled padding="10rem" />);
    expect(tree).toHaveStyleRule('padding', '10rem');
  });
  it('aliases', () => {
    const Styled = styled.div<SpaceProps>`
      ${space};
    `;

    const tree = mount(<Styled p="10rem" />);
    expect(tree).toHaveStyleRule('padding', '10rem');
  });
});
