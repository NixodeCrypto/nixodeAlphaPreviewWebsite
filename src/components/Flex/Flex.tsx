/* @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import {
  flexbox,
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

const FlexStyles = styled.div<IProps>`
  display: flex;
  ${flexbox};
  ${background};
  ${space};
  ${layout};
  ${border};
  ${position};
  ${typography};
  ${color};
  ${shadow};
`;

const Flex = React.forwardRef(
  (props: IProps, ref: React.Ref<HTMLDivElement>): JSX.Element => {
    const { children, ...other } = props;

    return (
      <FlexStyles ref={ref} {...other}>
        {children}
      </FlexStyles>
    );
  },
);

Flex.displayName = 'Flex';
export default Flex;
