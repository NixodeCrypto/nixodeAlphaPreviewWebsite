/* @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { flexbox, FlexboxProps } from '@/system';
import { IProps as BoxProps, BoxStyles } from '@/components/Box';

export interface IProps extends BoxProps, FlexboxProps {}

const FlexStyles = styled(BoxStyles)<IProps>`
  display: flex;
  ${flexbox};
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
