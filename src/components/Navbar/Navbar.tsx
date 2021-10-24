/* @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import Button from '@/components/Button';
import styled from '@emotion/styled';
import { token, variant } from '@/utils';
import { css } from '@emotion/react';
import { Menu } from 'react-feather';

const Wrapper = styled.div`
  position: relative;
`;

const NavbarRoot = styled.div`
  height: ${token.space('xl')};
  width: 100%;
  position: fixed;
  z-index: ${token.zIndices('navbar')};
  border-bottom: ${token.borders('sm')};
  border-bottom-color: ${token.colors('grey.50')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Space = styled.div`
  width: calc(100% - ${token.space('lg')});
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BrandLogo = styled.img`
  width: 9rem;
`;

const MobileDrawer = styled.div`
  border-bottom: ${token.borders('sm')};
  border-bottom-color: ${token.colors('grey.50')};
  padding-left: ${token.space('sm')};
  padding-top: ${token.space('sm')};
  background: white;
  position: fixed;
  margin-top: calc(${token.space('xl')} + ${token.borders('sm').split(' ')[0]});
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

const Navbar = () => {
  const [activeDrawer, setActiveDrawer] = useState(false);

  const handleResize = () => {
    const intBreakpoint = parseInt(
      token.breakpoints('s').split('px').shift() as string,
      10,
    );
    if (window.innerWidth >= intBreakpoint) {
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
          <BrandLogo src="BrandLogo.svg" />
          <Button
            variant="text"
            color="grey"
            size="icon"
            onClick={handleOpenDrawer}
          >
            <Menu color="black" />
          </Button>
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

export default Navbar;
