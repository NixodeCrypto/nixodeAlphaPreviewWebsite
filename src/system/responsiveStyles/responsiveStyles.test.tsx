/* @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import responsiveStyles from '.';
import { mountWithTheme, mq } from '@/utils';

describe('system/responsiveStyles', () => {
  it('creates responsive styles css object based with a single scale', () => {
    const StyledComponent = styled.div<{
      width?: Record<string, string | number>;
    }>`
      ${(props) => props.width && responsiveStyles(props.width, 'width')}
    `;
    const wrapper = mountWithTheme(
      <StyledComponent
        width={{ xss: '12px', xs: '16px', md: '19px', lg: '22px' }}
      />,
    );

    expect(wrapper).toHaveStyleRule('width', '12px', {
      media: mq('xss', true),
    });
    expect(wrapper).toHaveStyleRule('width', '16px', {
      media: mq('xs', true),
    });
    expect(wrapper).toHaveStyleRule('width', '19px', {
      media: mq('md', true),
    });
    expect(wrapper).toHaveStyleRule('width', '22px', {
      media: mq('lg', true),
    });
  });

  it('creates responsive styles css object based on multiple scales', () => {
    const StyledComponent = styled.div<{
      size?: Record<string, string | number>;
    }>`
      ${(props) =>
        props.size && responsiveStyles(props.size, ['width', 'height'])}
    `;
    const wrapper = mountWithTheme(
      <StyledComponent
        size={{ xss: '12px', xs: '16px', md: '19px', lg: '22px' }}
      />,
    );

    expect(wrapper).toHaveStyleRule('width', '12px', {
      media: mq('xss', true),
    });
    expect(wrapper).toHaveStyleRule('height', '12px', {
      media: mq('xss', true),
    });
    expect(wrapper).toHaveStyleRule('width', '16px', {
      media: mq('xs', true),
    });
    expect(wrapper).toHaveStyleRule('height', '16px', {
      media: mq('xs', true),
    });
    expect(wrapper).toHaveStyleRule('width', '19px', {
      media: mq('md', true),
    });
    expect(wrapper).toHaveStyleRule('height', '19px', {
      media: mq('md', true),
    });
    expect(wrapper).toHaveStyleRule('width', '22px', {
      media: mq('lg', true),
    });
    expect(wrapper).toHaveStyleRule('height', '22px', {
      media: mq('lg', true),
    });
  });
});
