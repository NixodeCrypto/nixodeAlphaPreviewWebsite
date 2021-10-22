/* @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { token, variant } from '@/utils';
import { css } from '@emotion/react';

interface IProps extends ButtonProps {
  color?: string;
}

const ButtonRoot = styled.button`
  font-family: ${token.fonts('text')};
  ${(props) =>
    variant(props.color, {
      primary: css`
        background: blue;
        color: red;
      `,
      secondary: css`
        background: green;
        color: white;
      `,
      accent: css`
        background: ${token.colors('blue.200')};
        color: white;
      `,
      default: css`
        background: ${token.colors('grey.400')};
        color: ${token.colors('grey.600')};
        &:hover {
          background: ${token.colors('grey.500')};
        }
      `,
    })};
`;

const Button = (props: IProps): JSX.Element => {
  const { children, type = 'button', ...other } = props;
  return (
    <ButtonRoot type={type} {...other}>
      {children}
    </ButtonRoot>
  );
};

export default Button;
