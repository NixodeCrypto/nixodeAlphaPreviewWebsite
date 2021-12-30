/* @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import {
  FlexboxProps,
  color,
  ColorProps,
  background,
  BackgroundProps,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  border,
  BorderProps,
  shadow,
  ShadowProps,
  position,
  PositionProps,
  typography,
  TypographyProps,
} from '@/system';

export interface IProps
  extends DivProps,
    FlexboxProps,
    BackgroundProps,
    SpaceProps,
    LayoutProps,
    BorderProps,
    ShadowProps,
    PositionProps,
    TypographyProps,
    ColorProps {}

const SpanStyles = styled.span<IProps>`
  ${background};
  ${space};
  ${layout};
  ${border};
  ${position};
  ${typography};
  ${color};
  ${shadow};
`;

const Span = React.forwardRef(
  (props: IProps, ref: React.Ref<HTMLSpanElement>): JSX.Element => {
    const { children, ...other } = props;

    return (
      <SpanStyles ref={ref} {...other}>
        {children}
      </SpanStyles>
    );
  },
);

Span.displayName = 'Span';
export default Span;
