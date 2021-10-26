/* @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import {
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
} from 'styled-system';

export interface BoxProps
  extends DivProps,
    SpaceProps,
    LayoutProps,
    BorderProps,
    ShadowProps,
    PositionProps {}

// Exporting Styles as they are used in Flex and Grid components
export const BoxStyles = styled.div<BoxProps>`
  ${space};
  ${layout};
  ${border};
  ${shadow};
  ${position};
`;

const Box = React.forwardRef(
  (props: BoxProps, ref: React.Ref<HTMLDivElement>): JSX.Element => {
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
