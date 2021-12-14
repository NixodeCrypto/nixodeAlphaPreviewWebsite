/* @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import {
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
    BackgroundProps,
    SpaceProps,
    LayoutProps,
    BorderProps,
    ShadowProps,
    PositionProps,
    TypographyProps,
    ColorProps {}

// Exporting Styles as they are used in Flex and Grid components
export const BoxStyles = styled.div<IProps>`
  ${background};
  ${space};
  ${layout};
  ${border};
  ${shadow};
  ${position};
  ${typography};
  ${color};
`;

const Box = React.forwardRef(
  (props: IProps, ref: React.Ref<HTMLDivElement>): JSX.Element => {
    const { children, ...other } = props;
    return (
      <BoxStyles ref={ref} {...other}>
        {children}
      </BoxStyles>
    );
  },
);

Box.displayName = 'Box';
export default Box;
