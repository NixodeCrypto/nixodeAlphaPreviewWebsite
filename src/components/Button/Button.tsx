/* @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { token, variant } from '@/utils';
import { css } from '@emotion/react';

interface IProps extends ButtonProps {
  color: string;
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
        background: purple;
        color: white;
      `,
    })};
`;

const Button = (props: IProps): JSX.Element => {
  const { children, type = 'button', ...other } = props;
  return (
    <ButtonRoot type={type} {...other} color="accent">
      {children}
    </ButtonRoot>
  );
};

export default Button;
