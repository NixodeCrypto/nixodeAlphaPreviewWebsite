/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import variant from '@/utils/variant';
import { css } from '@emotion/react';

interface IProps extends ButtonProps {
  color: string;
}

const ButtonRoot = styled.button`
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
  const { children } = props;
  return (
    <ButtonRoot type="button" {...props} color="accent">
      {children}
    </ButtonRoot>
  );
};

export default Button;
