/* @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { token, variant } from '@/utils';
import { css } from '@emotion/react';

interface IProps extends ButtonProps {
  color: string;
}

const ButtonRoot = styled.button`
  color: ${token.colors('primary.base')}
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
      default: css`
        backgrond: grey;
        color: white;
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
