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
} from 'styled-system';
import { token, mq } from '@/utils';

export interface IProps
  extends Omit<PProps, 'color'>,
    SpaceProps,
    Omit<ColorProps, 'color'>,
    TypographyProps {
  color?: string;
  xs?: boolean;
}

const CaptionRoot = styled.p<IProps>`
  font-family: ${token.fonts('text')};
  font-size: ${(props) =>
    props.xs ? token.fs('footer') : token.fs('captionSm')};
  ${mq('sm')} {
    font-size: ${(props) =>
      props.xs ? token.fs('footer') : token.fs('captionLg')};
  }
  line-height: 140%;
  ${space};
  ${color};
  ${typography};
`;

const Caption = React.forwardRef(
  (props: IProps, ref: React.Ref<HTMLParagraphElement>): JSX.Element => {
    const { children, xs, ...other } = props;

    return (
      <CaptionRoot ref={ref} xs={xs} {...other}>
        {children}
      </CaptionRoot>
    );
  },
);

Caption.displayName = 'Caption';
export default Caption;
