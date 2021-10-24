/* @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { token, variant as CSSVariant } from '@/utils';
import { css } from '@emotion/react';
import { transparentize } from 'polished';

interface IProps extends ButtonProps {
  color?: 'primary' | 'secondary' | 'accent' | 'grey';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'text' | 'outlined';
}

const ButtonRoot = styled.button<IProps>`
  position: relative;
  font-family: ${token.fonts('text')};
  font-weight: ${token.fontWeights('semiBold')};
  cursor: pointer;
  border: 0;
  border-radius: ${token.radii('sm')};
  transition: ${token.transition('standard')};
  background: transparent;
  ${(props) =>
    props.color &&
    CSSVariant(props.variant, {
      all: css`
        color: ${token.colors(`${props.color}.500`)};
        &:hover {
          background: ${transparentize(
            0.8,
            token.colors(`${props.color}.500`),
          )};
        }
        &:active {
          background: ${transparentize(
            0.6,
            token.colors(`${props.color}.500`),
          )};
        }
      `,
      solid:
        props.color === 'grey'
          ? css`
              background: ${token.colors(`${props.color}.100`)};
              color: black;
              &:hover {
                background: ${token.colors(`${props.color}.200`)};
              }
              &:active {
                background: ${token.colors(`${props.color}.300`)};
              }
            `
          : css`
              background: ${token.colors(`${props.color}.500`)};
              color: white;
              &:hover {
                background: ${token.colors(`${props.color}.600`)};
              }
              &:active {
                background: ${token.colors(`${props.color}.700`)};
              }
            `,
      text: css``,
      outlined: css`
        border: ${token.borders('sm')};
        border-color: ${token.colors(`${props.color}.500`)};
      `,
    })}
  ${(props) =>
    CSSVariant(props.size, {
      all: css`
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: ${token.fontSizes('bodyLg')};
      `,
      sm: css`
        height: ${token.sizes('sm')};
        padding: ${token.insets('xs')};
        font-size: ${token.fontSizes('bodySm')};
      `,
      md: css`
        height: ${token.sizes('md')};
        padding: ${token.insets('sm')};
      `,
      lg: css`
        height: ${token.sizes('lg')};
        padding: ${token.insets('md')};
      `,
    })}
`;

const Button = React.forwardRef(
  (props: IProps, ref: React.Ref<HTMLButtonElement>): JSX.Element => {
    const {
      children,
      type = 'button',
      color = 'primary',
      variant = 'solid',
      size = 'md',
      ...other
    } = props;

    return (
      <ButtonRoot
        type={type}
        color={color}
        size={size}
        ref={ref}
        variant={variant}
        {...other}
      >
        {children}
      </ButtonRoot>
    );
  },
);

Button.displayName = 'Button';
export default Button;
