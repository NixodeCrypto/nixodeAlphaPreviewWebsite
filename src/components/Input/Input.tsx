/* @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { AlertCircle } from 'react-feather';
import Box from '@/components/Box';
import Flex from '@/components/Flex';
import Caption from '@/components/Caption';
import {
  SpaceProps,
  space,
  LayoutProps,
  layout,
  variant as CSSVariant,
} from '@/system';
import { token } from '@/utils';

export interface IProps extends SpaceProps, LayoutProps {
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'outlined';
  label?: string;
  error?: boolean;
  errorHelperLabel?: string;
}

const InputWrapper = styled(Box)<IProps>`
  position: relative;
  transition: ${token.transition('standard')};
  border: ${token.borders('sm')};
  border-color: ${token.colors('grey.300')};
  border-radius: ${token.radii('sm')};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  &:hover {
    border-color: ${token.colors('grey.400')};
  }
  &:focus {
    border-color: ${token.colors('grey.500')};
  }
  ${(props) =>
    props.error &&
    css`
      border-color: ${token.colors('red.500')};
      &:hover {
        border-color: ${token.colors('red.500')};
      }
      &:focus {
        border-color: ${token.colors('red.500')};
      }
    `}
  width: ${token.sizes('input')};
  ${(props) =>
    CSSVariant(props.size, {
      all: css`
        font-size: ${token.fontSizes('bodyLg')};
      `,
      sm: css`
        height: ${token.sizes('sm')};
        font-size: ${token.fontSizes('bodySm')};
      `,
      md: css`
        height: ${token.sizes('md')};
      `,
      lg: css`
        height: ${token.sizes('lg')};
      `,
    })};

  ${space};
  ${layout};
`;

const InputRoot = styled.input<any>`
  font-family: ${token.fonts('text')};
  font-weight: ${token.fontWeights('medium')};
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  outline: none;
  border: none;
  -webkit-appearance: none;
  &::-moz-focus-inner {
    border: 0;
  }
  ${(props) =>
    props.error &&
    css`
      &::placeholder {
        color: ${token.colors('red.500')};
        opacity: 1;
      }
      &:-ms-input-placeholder {
        color: ${token.colors('red.500')};
      }
      &::-ms-input-placeholder {
        color: ${token.colors('red.500')};
      }
    `}

  ${(props) =>
    CSSVariant(props.size, {
      all: css`
        font-size: ${token.fontSizes('bodyLg')};
      `,
      sm: css`
        padding-left: ${token.space('xs')};
        font-size: ${token.fontSizes('bodySm')};
      `,
      md: css`
        padding-left: ${token.space('xs')};
      `,
      lg: css`
        padding-left: ${token.space('sm')};
      `,
    })};
`;

const IconWrapper = styled.div<{
  start?: boolean;
  end?: boolean;
  error?: boolean;
}>`
  z-index: 2;
  ${(props) =>
    props.start &&
    css`
      padding-left: ${token.space('xs')};
      margin-right: ${token.space('-xs')};
    `}
  ${(props) =>
    props.end &&
    css`
      padding-right: ${token.space('xs')};
      margin-left: ${token.space('xss')};
    `}
  & svg {
    vertical-align: middle;
    width: ${token.sizes('xs')};
    stroke-width: 2.5;
    color: ${token.colors('grey.700')};
    ${(props) =>
      props.error &&
      css`
        color: ${token.colors('red.500')};
      `}
  }
`;

const Input = React.forwardRef(
  (props: IProps, ref: React.Ref<HTMLDivElement>): JSX.Element => {
    const {
      startIcon,
      endIcon,
      label,
      variant = 'outlined',
      size = 'md',
      error = false,
      errorHelperLabel = 'Error',
      ...other
    } = props;

    return (
      <Box position="relative">
        <InputWrapper
          variant={variant}
          size={size}
          error={error}
          errorHelperLabel={errorHelperLabel}
          ref={ref}
          {...other}
        >
          {startIcon && (
            <IconWrapper start error={error}>
              {startIcon}
            </IconWrapper>
          )}
          <InputRoot size={size} placeholder={label} error={error} />
          {endIcon && (
            <IconWrapper end error={error}>
              {endIcon}
            </IconWrapper>
          )}
        </InputWrapper>
        {error && (
          <Flex alignItems="center" height="sm" mt="-2px">
            <AlertCircle
              size={token.sizes('xss')}
              color={token.colors('red.500')}
              strokeWidth="3px"
            />
            <Caption color="red.500" fontWeight="semiBold" ml="4px">
              {errorHelperLabel}
            </Caption>
          </Flex>
        )}
      </Box>
    );
  },
);

Input.displayName = 'Input';
export default Input;
