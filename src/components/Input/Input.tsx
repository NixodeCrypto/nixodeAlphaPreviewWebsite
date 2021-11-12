/* @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { AlertCircle } from 'react-feather';
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  variant as CSSVariant,
} from '@/system';
import { token } from '@/utils';
import Box from '@/components/Box';
import Flex from '@/components/Flex';
import Caption from '@/components/Caption';

export interface IProps
  extends Omit<InputProps, 'size'>,
    SpaceProps,
    LayoutProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'outlined';
  label?: string;
  error?: boolean;
  errorHelperLabel?: string;
}

const InputRoot = styled.input<IProps>`
  transition: ${token.transition('standard')};
  box-sizing: border-box;
  font-size: ${token.fontSizes('bodyLg')};
  outline: 0;
  padding: 0;
  display: inline-block;
  border: ${token.borders('sm')};
  border-color: ${token.colors('grey.300')};
  font-family: ${token.fonts('text')};
  font-weight: ${token.fontWeights('medium')};
  border-radius: ${token.radii('sm')};
  -webkit-appearance: none;

  &::-moz-focus-inner {
    border: 0;
  }
  &::placeholder {
    color: ${token.colors('grey.700')};
    opacity: 1;
  }
  &:-ms-input-placeholder {
    color: ${token.colors('grey.700')};
  }
  &::-ms-input-placeholder {
    color: ${token.colors('grey.700')};
  }
  &:hover {
    border-color: ${token.colors('grey.400')};
  }
  &:focus {
    border-color: ${token.colors('grey.500')};
    &::placeholder {
      color: ${token.colors('grey.800')};
      opacity: 1;
    }
    &:-ms-input-placeholder {
      color: ${token.colors('grey.800')};
    }
    &::-ms-input-placeholder {
      color: ${token.colors('grey.800')};
    }
  }

  ${(props) =>
    props.error &&
    css`
      &::placeholder {
        color: ${token.colors('red.500')};
      }
      &:-ms-input-placeholder {
        color: ${token.colors('red.500')};
      }
      &::-ms-input-placeholder {
        color: ${token.colors('red.500')};
      }
      border-color: ${token.colors('red.500')};
      &:hover {
        border-color: ${token.colors('red.500')};
      }
      &:focus {
        border-color: ${token.colors('red.500')};
        &::placeholder {
          color: ${token.colors('red.500')};
        }
        &:-ms-input-placeholder {
          color: ${token.colors('red.500')};
        }
        &::-ms-input-placeholder {
          color: ${token.colors('red.500')};
        }
      }
    `}

  ${(props) =>
    CSSVariant(props.size, {
      all: css`
        font-size: ${token.fontSizes('bodyLg')};
      `,
      sm: css`
        height: ${token.sizes('sm')};
        padding: ${token.space('xs')};
        font-size: ${token.fontSizes('bodySm')};
      `,
      md: css`
        height: ${token.sizes('md')};
        padding: ${token.space('sm')};
        padding-left: ${token.space('xs')};
      `,
      lg: css`
        height: ${token.sizes('lg')};
        padding: ${token.space('md')};
        padding-left: ${token.space('sm')};
      `,
    })}

    ${space}
    ${layout}
`;

const Input = React.forwardRef(
  (props: IProps, ref: React.Ref<HTMLInputElement>): JSX.Element => {
    const {
      label,
      variant = 'outlined',
      size = 'md',
      error = false,
      errorHelperLabel = 'Error',
      ...other
    } = props;

    if (error) {
      return (
        <Box position="relative">
          <InputRoot
            variant={variant}
            size={size as any}
            ref={ref}
            placeholder={label}
            error={error}
            {...other}
          />
          {error && (
            <Flex
              alignItems="center"
              horizontalGap={token.space('xss')}
              height="sm"
            >
              <AlertCircle
                size={token.sizes('xss')}
                color={token.colors('red.500')}
                strokeWidth="3px"
              />
              <Caption color="red.500" fontWeight="semiBold">
                {errorHelperLabel}
              </Caption>
            </Flex>
          )}
        </Box>
      );
    }
    return (
      <InputRoot
        variant={variant}
        size={size as any}
        ref={ref}
        placeholder={label}
        {...other}
      />
    );
  },
);

Input.displayName = 'Input';
export default Input;
