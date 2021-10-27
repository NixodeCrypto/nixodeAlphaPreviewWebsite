import { matchers } from '@emotion/jest';
import styled from '@emotion/styled';
import mountWithTheme from '.';
import { GlobalTheme } from '@/UI';

expect.extend(matchers);

describe('utils/mountWithTheme', () => {
  it('theme context is applied to mounted component', () => {
    const StyledComponent = styled.div`
      margin: ${(props) => props.theme.space.md};
    `;

    const wrapper = mountWithTheme(<StyledComponent />);
    expect(wrapper).toHaveStyleRule('margin', GlobalTheme.space.md);
  });
});
