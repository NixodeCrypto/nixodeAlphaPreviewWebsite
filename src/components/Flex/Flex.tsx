/* @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { flexbox, FlexboxProps } from '@/system';
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
      & > * {
        margin-top: ${props.verticalGap};
      }
      margin-top: calc(${props.horizontalGap} * -1);
    `}

  ${(props) =>
    props.horizontalGap &&
    css`
      & > * {
        margin-right: ${props.horizontalGap};
      }
      margin-right: calc(${props.horizontalGap} * -1);
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
