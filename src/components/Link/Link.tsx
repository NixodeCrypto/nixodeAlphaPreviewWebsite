/* @jsxImportSource @emotion/react */
import NextLink from 'next/link';
import styled from '@emotion/styled';
import { space, SpaceProps } from 'styled-system';
import { token } from '@/utils';

interface IProps extends LinkProps, SpaceProps {
  size?: 'sm' | undefined;
}

const LinkStyles = styled.a<IProps>`
  font-family: ${token.fonts('text')};
  color: black;
  text-decoration: none;
  font-weight: ${token.fontWeights('bold')};
  font-size: ${(props) =>
    props.size === 'sm'
      ? token.fontSizes('bodySm')
      : token.fontSizes('bodyLg')};
  ${space};
`;

const Link = (props: IProps): JSX.Element => {
  const { href, className, size, ...other } = props;
  return (
    <NextLink href={href as string} passHref {...other}>
      <LinkStyles size={size} className={className} />
    </NextLink>
  );
};

Link.displayName = 'Link';
export default Link;
