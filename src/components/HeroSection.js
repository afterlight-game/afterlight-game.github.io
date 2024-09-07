import React from "react";
import styled from "styled-components";

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 50vh;
  min-height: 250px;
  padding: 0 20vw;
  margin: 10vh auto 12.5vh;
  object-fit: contain;
  box-sizing: border-box;
  transition: opacity 0.5s ease, filter 0.5s ease;
`;

const Hero = styled.section`
  background-color: ${({ theme }) => theme.colors.blue};
  height: 65vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const HeroContent = styled.section`
  background-color: ${({ theme }) => theme.colors.blue};
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 0 40px 100px;
  color: ${({ theme }) => theme.colors.light};
  text-align: center;
`;

const Title = styled.h1`
  margin: 20px 40px;
  font-size: 2.5em;
  font-family: ${({ theme }) => theme.fonts.title};
  font-weight: normal;
  transition: text-shadow 0.3s ease, transform 0.3s ease;
  &:hover {
    font-weight: bold;
    text-shadow: 8px 8px 5px ${({ theme }) => theme.colors.dark};
    transform: translateY(-2px) translateX(-2px);
  }
`;

const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  margin: 20px 40px;
  font-size: 1.1em;
  margin-top: 10px;
`;

const HeroSection = () => {
  return (
    <>
      <Hero>
        <Image src="media/logo_clear_bg.png" />
      </Hero>
      <HeroContent>
        <Title>About the Game</Title>
        <Subtitle>
          Blending 2D and 3D gameplay, players manipulate shadows in this
          2-player co-op puzzle platformer.
          <br />
          Will you succumb to the hazards of the imagined 2D realm, or will your
          partnership prevail?
        </Subtitle>
      </HeroContent>
    </>
  );
};

export default HeroSection;
