import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.blue};
  padding: 10px 20px;
  display: flex;
  justify-content: center;
`;

const NavLinks = styled.div`
  max-width: 30vw;
  display: flex;
  gap: 40px;
  justify-content: center;
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.title};
  text-decoration: none;
  transition: text-shadow 0.3s ease, transform 0.3s ease;
  &:hover {
    font-weight: bold;
    text-shadow: 8px 8px 5px ${({ theme }) => theme.colors.dark};
    transform: translateY(-2px) translateX(-2px);
  }
`;

const Divider = styled.span`
  color: ${({ theme }) => theme.colors.light};
  pointer-events: none;
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLinks>
        <NavLink href="#highlights">Highlights</NavLink>
        <Divider>|</Divider>
        <NavLink href="#about">About</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
