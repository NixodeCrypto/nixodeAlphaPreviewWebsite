/* @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { mount } from 'enzyme';
import background, { BackgroundProps } from '.';

describe('system/background', () => {
  it('can use background config properties', () => {
    const Styled = styled.div<BackgroundProps>`
      ${background};
    `;

    const tree = mount(<Styled backgroundPosition="center" />);
    expect(tree).toHaveStyleRule('background-position', 'center');
  });
});
