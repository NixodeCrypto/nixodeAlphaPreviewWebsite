/* @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import {
  layout,
  LayoutProps,
  space,
  SpaceProps,
  color,
  ColorProps,
  typography,
  TypographyProps,
  variant,
} from '@/system';
import { token, mq } from '@/utils';

export interface IProps
  extends HeadingProps,
    SpaceProps,
    ColorProps,
    TypographyProps,
    LayoutProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const HeaderRoot = styled.h1<IProps>`
  font-family: ${token.fonts('title')};
  ${(props) =>
    variant(
      props.as,
      {
        h1: css`
          font-size: ${token.fontSizes('h1Sm')};
          ${mq('sm')} {
            font-size: ${token.fontSizes('h1')};
          }
        `,
        h2: css`
          font-size: ${token.fontSizes('h2Sm')};
          ${mq('sm')} {
            font-size: ${token.fontSizes('h2')};
          }
        `,
        h3: css`
          font-size: ${token.fontSizes('h3Sm')};
          ${mq('sm')} {
            font-size: ${token.fontSizes('h3')};
          }
        `,
        h4: css`
          font-size: ${token.fontSizes('h4Sm')};
          ${mq('sm')} {
            font-size: ${token.fontSizes('h4')};
          }
        `,
        h5: css`
          font-size: ${token.fontSizes('h5Sm')};
          ${mq('sm')} {
            font-size: ${token.fontSizes('h5')};
          }
        `,
        h6: css`
          font-size: ${token.fontSizes('h6Sm')};
          ${mq('sm')} {
            font-size: ${token.fontSizes('h6')};
          }
        `,
      },
      true,
    )}
  line-height: 140%;
  ${space};
  ${color};
  ${typography};
  ${layout};
`;

const Header = React.forwardRef(
  (props: IProps, ref: React.Ref<HTMLHeadingElement>): JSX.Element => {
    const { children, as = 'h1', ...other } = props;

    return (
      <HeaderRoot as={as} ref={ref} {...other}>
        {children}
      </HeaderRoot>
    );
  },
);

Header.displayName = 'Header';
export default Header;
