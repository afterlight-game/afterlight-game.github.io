import React from "react";
import { TbBrandLinktree } from "react-icons/tb";
import styled from "styled-components";

const FooterSection = styled.footer`
  background-color: #355982;
  color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const FooterText = styled.p`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 0.8em;
  text-align: right;
`;

const LinkTree = styled.a`
  font-family: ${({ theme }) => theme.fonts.body};
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;

  padding: 10px;
  border-radius: 8px;
  border: 3px solid ${({ theme }) => theme.colors.light};

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.light};
  }
`;

const LinkTreeLabel = styled.p`
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterSection>
      <FooterText>
        Afterlight, a Swinburne capstone game.
        <br />
        Coming to PAX'24.
      </FooterText>
      <LinkTree href="https://linktr.ee/afterlightgame" target="_blank">
        <LinkTreeLabel>LinkTree</LinkTreeLabel>
        <TbBrandLinktree />
      </LinkTree>
    </FooterSection>
  );
};

export default Footer;
