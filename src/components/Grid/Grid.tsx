/* @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { BoxProps, BoxStyles } from '@/components/Box';
import { grid, GridProps as GridExtendProps } from 'styled-system';

export interface GridProps extends BoxProps, GridExtendProps {}

const GridStyles = styled(BoxStyles)<GridProps>`
  ${grid};
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
