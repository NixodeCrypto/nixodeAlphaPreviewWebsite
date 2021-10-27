/* @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { Menu } from 'react-feather';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { token, parseBreakpoint } from '@/utils';
import Button from '@/components/Button';
import Flex from '@/components/Flex';
import Box from '@/components/Box';
import Link from '@/components/Link';
import BrandLogo from '@/components/BrandLogo';

const Navbar = () => {
  const router = useRouter();
  const [activeDrawer, setActiveDrawer] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= parseBreakpoint('md')) {
      setActiveDrawer(false);
    }
  };

  const handleOpenDrawer = () => {
    setActiveDrawer(!activeDrawer);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const NavLink = styled(Link)`
    padding-top: ${token.space('md')};
    padding-bottom: ${token.space('md')};
    &:hover {
      text-decoration: solid underline;
      text-decoration-thickness: 4.5px;
      text-underline-offset: calc(${token.space('md')} - 3px);
      text-decoration-color: ${token.colors('primary.500')};
    }
  `;

  return (
    <Box
      position="fixed"
      zIndex={token.zIndices('navbar')}
      width="100%"
      background="white"
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        borderBottom="sm"
        borderColor="grey.50"
        height="xl"
      >
        <Flex
          width={{
            xss: `calc(100% - ${token.space('lg')})`,
            md: `calc(100% - ${token.space('xl')})`,
          }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box width="100%">
            <Link href="/">
              <BrandLogo />
            </Link>
          </Box>
          <Box display={{ xss: 'block', md: 'none' }}>
            <Button
              variant="text"
              color="grey"
              size="icon"
              onClick={handleOpenDrawer}
            >
              <Menu color="black" />
            </Button>
          </Box>
          <Flex
            display={{ xss: 'none', md: 'flex' }}
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            horizontalGap={token.space('lg')}
          >
            <NavLink href="/">Home</NavLink>
            <NavLink href="/prices">Prices</NavLink>
            <NavLink href="/portfolio">Portfolio</NavLink>
            <NavLink href="/learn">Learn</NavLink>
          </Flex>

          <Flex
            display={{ xss: 'none', md: 'flex' }}
            width="100%"
            flexDirection="row"
            justifyContent="flex-end"
            alignItems="center"
            horizontalGap={token.space('md')}
          >
            <Link href="/signin">Sign in</Link>
            <Button onClick={() => router.push('/signup')}>Sign up</Button>
          </Flex>
        </Flex>
      </Flex>
      {activeDrawer && (
        <Flex
          borderBottom="sm"
          borderBottomColor="grey.50"
          pl="sm"
          pt="xss"
          background="white"
          position="fixed"
          width="100%"
          flexDirection="column"
          maxWidth={`calc(100% - ${token.sizes('sm')})`}
          css={css`
            & > * {
              padding-top: ${token.space('sm')};
              padding-bottom: ${token.space('sm')};
            }
          `}
        >
          <Link href="/">Home</Link>
          <Link href="/prices">Prices</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/learn">Learn</Link>
          <Box
            width={`calc(100% - ${token.sizes('sm')})`}
            maxWidth="20rem"
            css={css`
              button:nth-of-type(1) {
                margin-bottom: ${token.space('xs')};
              }
            `}
          >
            <Button maxWidth size="lg">
              Get started
            </Button>
            <Button maxWidth size="lg" variant="outlined">
              Sign in
            </Button>
          </Box>
        </Flex>
      )}
    </Box>
  );
};

export default Navbar;
