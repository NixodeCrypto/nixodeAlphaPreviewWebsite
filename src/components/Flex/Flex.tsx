/* @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { flexbox, FlexboxProps } from 'styled-system';
import { IProps as BoxProps, BoxStyles } from '@/components/Box';

export interface IProps extends BoxProps, FlexboxProps {
  verticalGap?: string | number;
  horizontalGap?: string | number;
}

const FlexStyles = styled(BoxStyles)<IProps>`
  display: flex;
  ${flexbox};
  ${(props) =>
    props.verticalGap &&
    css`
      & > *:nth-child(n + 2) {
        margin-top: calc(${props.verticalGap});
      }
    `}

  ${(props) =>
    props.horizontalGap &&
    css`
      & > *:nth-child(n + 2) {
        margin-left: calc(${props.horizontalGap});
      }
    `}
`;

const Flex = React.forwardRef(
  (props: IProps, ref: React.Ref<HTMLDivElement>): JSX.Element => {
    const { children, verticalGap, horizontalGap, ...other } = props;

    return (
      <FlexStyles
        verticalGap={verticalGap}
        horizontalGap={horizontalGap}
        ref={ref}
        {...other}
      >
        {children}
      </FlexStyles>
    );
  },
);

Flex.displayName = 'Flex';
export default Flex;
