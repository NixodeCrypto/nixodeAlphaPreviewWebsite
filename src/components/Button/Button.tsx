/* @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { Theme, css } from '@emotion/react';
import { transparentize } from 'polished';
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  border,
  BorderProps,
  variant as CSSVariant,
} from '@/system';
import { ColorSwatches } from '@/utils/colorSwatches';
import { token } from '@/utils';

export interface IProps
  extends ButtonProps,
    SpaceProps,
    LayoutProps,
    BorderProps {
  color?: 'primary' | 'secondary' | 'accent' | 'grey';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  variant?: 'solid' | 'text' | 'outlined';
}

const solidGreyComposer = (color: keyof Theme['colors']) => {
  const tokenColorPicks =
    color === 'grey'
      ? ['100', '200', '300', '800']
      : ['500', '600', '700', 'white'];

  for (let i = 0; i < tokenColorPicks.length; i += 1) {
    tokenColorPicks[i] =
      token.colors(
        `${color}.${tokenColorPicks[i]}` as `${keyof Theme['colors']}.${keyof ColorSwatches}`,
      ) ?? tokenColorPicks[i];
  }

  return css`
    border-color: ${tokenColorPicks[0]};
    background: ${tokenColorPicks[0]};
    color: ${tokenColorPicks[3]};
    &:hover, &:focus-visible {
      border-color: ${tokenColorPicks[1]};
      background: ${tokenColorPicks[1]};
    }
    &:active {
      border-color: ${tokenColorPicks[2]};
      background: ${tokenColorPicks[2]};
  `;
};

const ButtonRoot = styled.button<IProps>`
  position: relative;
  font-family: ${token.fonts('text')};
  font-weight: ${token.fontWeights('semiBold')};
  cursor: pointer;
  border: ${token.borders('sm')};
  border-color: transparent;
  border-radius: ${token.radii('sm')};
  transition: ${token.transition('standard')};
  white-space: nowrap;
  box-sizing: border-box;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus-visible {
    outline: 0;
  }

  ${(props) =>
    props.color &&
    CSSVariant(props.variant, {
      all: css`
        color: ${token.colors(`${props.color}.500`)};
      `,
      solid: solidGreyComposer(props.color),
      text: css`
        &:hover,
        &:focus-visible {
          background: ${transparentize(
            0.9,
            token.colors(`${props.color}.500`),
          )};
        }
        &:active {
          background: ${transparentize(
            0.7,
            token.colors(`${props.color}.500`),
          )};
          color: ${token.colors(`${props.color}.600`)};
        }
      `,
      outlined: css`
        border: ${token.borders('sm')};
        border-color: ${token.colors(`${props.color}.500`)};
        &:hover,
        &:focus-visible {
          background: ${transparentize(
            0.9,
            token.colors(`${props.color}.500`),
          )};
        }
        &:active {
          background: ${transparentize(
            0.7,
            token.colors(`${props.color}.500`),
          )};
          border-color: ${token.colors(`${props.color}.600`)};
          color: ${token.colors(`${props.color}.600`)};
        }
      `,
    })}

  ${(props) =>
    CSSVariant(props.size, {
      all: css`
        font-size: ${token.fontSizes('bodyLg')};
      `,
      icon: css`
        height: ${token.sizes('sm')};
      `,
      sm: css`
        height: ${token.sizes('sm')};
        padding-left: ${token.space('xs')};
        padding-right: ${token.space('xs')};
        font-size: ${token.fontSizes('bodySm')};
      `,
      md: css`
        height: ${token.sizes('md')};
        padding-left: ${token.space('sm')};
        padding-right: ${token.space('sm')};
      `,
      lg: css`
        height: ${token.sizes('lg')};
        padding-left: ${token.space('md')};
        padding-right: ${token.space('md')};
      `,
    })}

  ${space};
  ${layout};
  ${border};
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
