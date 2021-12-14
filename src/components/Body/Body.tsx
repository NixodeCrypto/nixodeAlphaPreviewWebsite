/* @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import {
  space,
  SpaceProps,
  color,
  ColorProps,
  typography,
  TypographyProps,
  position,
  PositionProps,
} from '@/system';
import { token, mq } from '@/utils';

export interface IProps
  extends PProps,
    SpaceProps,
    ColorProps,
    TypographyProps,
    PositionProps {}

const BodyRoot = styled.p<IProps>`
  margin: 0 0;
  font-family: ${token.fonts('text')};
  font-size: ${token.fs('bodySm')};
  ${mq('sm')} {
    font-size: ${token.fs('bodyLg')};
  }
  line-height: 140%;
  ${space};
  ${color};
  ${typography};
  ${position};
`;

const Body = React.forwardRef(
  (props: IProps, ref: React.Ref<HTMLParagraphElement>): JSX.Element => {
    const { children, ...other } = props;

    return (
      <BodyRoot ref={ref} {...other}>
        {children}
      </BodyRoot>
    );
  },
);

Body.displayName = 'Body';
export default Body;
