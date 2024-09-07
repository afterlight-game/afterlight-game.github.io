import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.dark};
`;

const SectionHeading = styled.h2`
  margin: 0;
  padding: 40px 0 0;
  font-size: 2em;
  font-family: ${({ theme }) => theme.fonts.title};
  font-weight: normal;
  transition: text-shadow 0.3s ease, transform 0.3s ease;
  &:hover {
    font-weight: bold;
    text-shadow: 8px 8px 5px ${({ theme }) => theme.colors.shadow};
    transform: translateY(-2px) translateX(-2px);
  }
  color: ${({ theme }) => theme.colors.light};
  text-align: center;
`;

const Highlights = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 40px 40px 10vh;
  background-color: ${({ theme }) => theme.colors.dark};
`;

const GifContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 1px 2px ${({ theme }) => theme.colors.shadow};
  background-color: ${({ theme }) => theme.colors.darkAccent};
  overflow: hidden;
`;

const Gif = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Caption = styled.div`
  margin: 20px 25px 25px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1em;
  text-align: center;
  color: ${({ theme }) => theme.colors.light};
`;

const HighlightSection = () => {
  const items = [
    {
      src: "gifs/2d-3d.gif",
      caption:
        "Play with shadows like never before! Optimized real-time conversion from any 3D mesh to physics-accurate 2D shadows.",
    },
    {
      src: "gifs/2d-platform.gif",
      caption:
        "Traditional 2D platforming gameplay, with immersive original artwork.",
    },
    {
      src: "gifs/3d-manip.gif",
      caption:
        "Puzzle-platforming, now with an extra-dimensional partner! Challenge the mind with these subversive puzzle designs.",
    },
  ];

  return (
    <Section>
      <SectionHeading id="highlights">Highlights</SectionHeading>
      <Highlights>
        {items.map((item, index) => (
          <GifContainer key={index}>
            <Gif src={item.src} alt={`Highlight ${index}`} />
            <Caption>{item.caption}</Caption>
          </GifContainer>
        ))}
      </Highlights>
    </Section>
  );
};

export default HighlightSection;
