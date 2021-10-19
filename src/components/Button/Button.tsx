/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const ButtonRoot = styled.button``;
const Button = (props: ButtonProps): JSX.Element => {
  const { children } = props;
  return (
    <ButtonRoot type="button" {...props}>
      {children}
    </ButtonRoot>
  );
};

export default Button;
