/* @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Menu } from 'react-feather';
import { useRouter } from 'next/router';

import { css } from '@emotion/react';
import { token, mq, parseBreakpoint } from '@/utils';
import Button from '@/components/Button';
import Flex from '@/components/Flex';
import Box from '@/components/Box';
import Link from '@/components/Link';

const Wrapper = styled.div`
  position: fixed;
  z-index: ${token.zIndices('navbar')};
  width: 100%;
  background: white;
`;

const NavbarRoot = styled.div`
  height: ${token.space('xl')};
  border-bottom: ${token.borders('sm')};
  border-bottom-color: ${token.colors('grey.50')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Space = styled.div`
  width: calc(100% - ${token.space('lg')});
  ${mq('md')} {
    width: calc(100% - ${token.space('xl')});
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BrandLogo = styled.img`
  width: ${token.sizes('xxl')};
`;

const MobileDrawer = styled.div`
  border-bottom: ${token.borders('sm')};
  border-bottom-color: ${token.colors('grey.50')};
  padding-left: ${token.space('sm')};
  padding-top: ${token.space('md')};
  background: white;
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: column;
  & > * {
    padding-bottom: ${token.space('lg')};
  }
`;

const ButtonContainer = styled.div`
  button:nth-of-type(1) {
    margin-bottom: ${token.space('xs')};
  }
  max-width: 20rem;
  width: calc(100% - ${token.sizes('sm')});
`;

const NavLink = styled.a`
  font-family: ${token.fonts('text')};
  color: black;
  text-decoration: none;
  font-weight: ${token.fontWeights('bold')};
`;

const Mobile = styled.div`
  display: block;
  ${mq('md')} {
    display: none;
  }
`;

const Desktop = styled.div<{ fullWidth?: boolean; rightAlign?: boolean }>`
  display: none;
  ${mq('md')} {
    width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
    display: flex;
    flex-direction: row;
    justify-content: ${(props) => (props.rightAlign ? 'flex-end' : 'center')};
    align-items: center;
    &:not(:last-child) > * {
      margin-right: ${token.space('md')};
    }
    &:not(:first-child) > * {
      margin-left: ${token.space('md')};
    }
  }
`;

const Gutter = styled.div`
  width: 100%;
`;

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

  return (
    <Wrapper>
      <NavbarRoot>
        <Space>
          <Gutter>
            <NavLink href="/">
              <BrandLogo src="BrandLogo.svg" />
            </NavLink>
          </Gutter>
          <Mobile>
            <Button
              variant="text"
              color="grey"
              size="icon"
              onClick={handleOpenDrawer}
            >
              <Menu color="black" />
            </Button>
          </Mobile>
          <Desktop>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/prices">Prices</NavLink>
            <NavLink href="/portfolio">Portfolio</NavLink>
            <NavLink href="/learn">Learn</NavLink>
          </Desktop>
          <Desktop fullWidth rightAlign>
            <NavLink href="/signin">Sign in</NavLink>
            <Button onClick={() => router.push('/signup')}>Sign up</Button>
          </Desktop>
        </Space>
      </NavbarRoot>
      {activeDrawer && (
        <MobileDrawer>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/prices">Prices</NavLink>
          <NavLink href="/portfolio">Portfolio</NavLink>
          <NavLink href="/learn">Learn</NavLink>
          <ButtonContainer>
            <Button maxWidth size="lg">
              Get started
            </Button>
            <Button maxWidth size="lg" variant="outlined">
              Sign in
            </Button>
          </ButtonContainer>
        </MobileDrawer>
      )}
    </Wrapper>
  );
};

const NewNav = () => {
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

  return (
    <Box position="fixed" zIndex={9999} width="100%" background="white">
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
              <BrandLogo src="BrandLogo.svg" />
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
            horizontalGap={token.space('md')}
          >
            <Link href="/">Home</Link>
            <Link href="/prices">Prices</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/learn">Learn</Link>
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
          pt="md"
          background="white"
          position="fixed"
          width="100%"
          flexDirection="column"
          css={css`
            & > * {
              padding-bottom: ${token.space('lg')};
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
