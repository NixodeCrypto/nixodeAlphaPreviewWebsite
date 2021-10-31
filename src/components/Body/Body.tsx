/* @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { space, SpaceProps, color, ColorProps } from 'styled-system';
import { token, mq } from '@/utils';

export interface IProps
  extends Omit<PProps, 'color'>,
    SpaceProps,
    Omit<ColorProps, 'color'> {
  color?: string;
}

const BodyRoot = styled.p<IProps>`
  font-size: ${token.fs('bodySm')};
  ${mq('sm')} {
    font-size: ${token.fs('bodyLg')};
  }
  line-height: 140%;
  ${space};
  ${color};
`;

const Header = React.forwardRef(
  (props: IProps, ref: React.Ref<HTMLParagraphElement>): JSX.Element => {
    const { children, ...other } = props;

    return (
      <BodyRoot ref={ref} {...other}>
        {children}
      </BodyRoot>
    );
  },
);

Header.displayName = 'Header';
export default Header;
