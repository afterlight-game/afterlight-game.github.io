import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 50px 20px;
  background-color: ${({theme}) => theme.colors.blue};
  color: #fff;
  text-align: center;
`;

const MediaGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const MediaItem = styled.div`
  width: 300px;
  height: 200px;
`;

const MediaSection = () => {
  return (
    <Section id="media">
      <h2>Media</h2>
      <MediaGrid>
        <MediaItem />
        <MediaItem />
        <MediaItem />
        {/* Add more media items as needed */}
      </MediaGrid>
    </Section>
  );
};

export default MediaSection;
