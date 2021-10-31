/* @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { space, SpaceProps } from 'styled-system';
import { token, variant as CSSVariant } from '@/utils';

export interface IProps extends Omit<InputProps, 'size'>, SpaceProps {
  size?: 'sm' | 'md' | 'lg';
  maxWidth?: boolean;
  variant?: 'outlined';
  label?: string;
}

const InputRoot = styled.input<IProps>`
  transition: ${token.transition('standard')};
  outline: 0;
  padding: 0;
  display: inline-block;
  border-radius: 0;
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

  border: ${token.borders('sm')};
  border-color: ${token.colors('grey.300')};
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
  font-family: ${token.fonts('text')};
  font-weight: ${token.fontWeights('semiBold')};
  border-radius: ${token.radii('sm')};
  ${(props) =>
    CSSVariant(props.size, {
      all: css`
        font-size: ${token.fontSizes('bodyLg')};
      `,
      sm: css`
        font-size: ${token.fontSizes('bodySm')};
        padding: calc(${token.space('xs')} / 2);
      `,
      md: css`
        padding: calc(${token.space('sm')} / 2.15);
      `,
      lg: css`
        padding: calc(${token.space('md')} / 1.61);
      `,
    })}
  ${(props) =>
    props.maxWidth &&
    css`
      width: 100%;
    `}
    ${space};
`;

const Input = React.forwardRef(
  (props: IProps, ref: React.Ref<HTMLInputElement>): JSX.Element => {
    const { label, variant = 'outlined', size = 'md', ...other } = props;

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

/*
 *
      all: css`
        font-size: ${token.fontSizes('bodyLg')};
      `,
      sm: css`
        height: calc(${token.sizes('sm')} - ${heightEqualizer});
        font-size: ${token.fontSizes('bodySm')};
      `,
      md: css`
        height: calc(${token.sizes('md')} - ${heightEqualizer});
      `,
      lg: css`
        height: calc(${token.sizes('md')} - ${heightEqualizer});
        padding: 0.42rem;
      `,
 * */
