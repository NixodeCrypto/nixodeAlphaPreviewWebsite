/* @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { token } from '@/utils';
import {
  layout,
  LayoutProps,
  border,
  BorderProps,
  space,
  SpaceProps,
  color,
  ColorProps,
  typography,
  TypographyProps,
} from '@/system';

export interface IProps
  extends ButtonProps,
    LayoutProps,
    BorderProps,
    SpaceProps,
    ColorProps,
    TypographyProps {}

const IconButtonRoot = styled.button<IProps>`
  position: relative;
  border-radius: 50%;
  box-sizing: border-box;
  background: transparent;
  min-width: ${token.sizes('md')};
  min-height: ${token.sizes('md')};
  width: ${token.sizes('md')};
  height: ${token.sizes('md')};
  border: ${token.borders('sm')};
  border-color: ${token.colors('grey.100')};
  &:hover {
    border: ${token.borders('sm')};
    border-color: ${token.colors('grey.100')};
  }
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${token.colors('grey.500')};
  text-align: center;
  font-family: ${token.fonts('text')};
  & svg {
    width: 22px;
    height: 22px;
  }
  ${layout};
  ${space};
  ${color};
  ${border};
  ${typography};
`;

const IconButton = (props: IProps) => {
  const { children, ...other } = props;
  return <IconButtonRoot {...other}>{children}</IconButtonRoot>;
};

IconButton.displayName = 'IconButton';
export default IconButton;
