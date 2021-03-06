/* @jsxImportSource @emotion/react */
import NextLink from 'next/link';
import styled from '@emotion/styled';
import { space, SpaceProps, color, ColorProps } from '@/system';
import { token } from '@/utils';

interface IProps extends LinkProps, SpaceProps, ColorProps {
  size?: 'sm';
}

const LinkStyles = styled.a<any>`
  font-family: ${token.fonts('text')};
  color: black;
  text-decoration: none;
  font-weight: ${token.fontWeights('bold')};
  font-size: ${(props) =>
    props.size === 'sm'
      ? token.fontSizes('bodySm')
      : token.fontSizes('bodyLg')};

  ${space};
  ${color};
`;

const Link = (props: IProps): JSX.Element => {
  const { children, href, className, size, ...other } = props;
  return (
    <NextLink href={href as string} passHref {...other}>
      <LinkStyles size={size} className={className} {...other}>
        {children}
      </LinkStyles>
    </NextLink>
  );
};

Link.displayName = 'Link';
export default Link;
