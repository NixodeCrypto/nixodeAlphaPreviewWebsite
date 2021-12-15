/* @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import {
  grid,
  GridProps,
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
    GridProps,
    BackgroundProps,
    SpaceProps,
    LayoutProps,
    BorderProps,
    ShadowProps,
    PositionProps,
    TypographyProps,
    ColorProps {}

const GridStyles = styled.div<IProps>`
  display: grid;
  ${grid};
  ${background};
  ${space};
  ${layout};
  ${border};
  ${position};
  ${typography};
  ${color};
  ${shadow};
`;

const Grid = React.forwardRef(
  (props: GridProps, ref: React.Ref<HTMLDivElement>): JSX.Element => {
    const { children, ...other } = props;

    return (
      <GridStyles ref={ref} {...other}>
        {children}
      </GridStyles>
    );
  },
);

Grid.displayName = 'Grid';
export default Grid;
