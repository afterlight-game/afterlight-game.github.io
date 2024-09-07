import React, { useEffect, useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaArtstation,
  FaGlobe,
  FaInstagram,
  FaItchIo,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import styled from "styled-components";

const AboutSection = styled.section`
  background-color: ${({ theme }) => theme.colors.darkAccent};
`;

const SectionHeading = styled.h2`
  margin: 0;
  padding: 40px 0 0;
  font-weight: normal;
  font-size: 2em;
  font-family: ${({ theme }) => theme.fonts.handwritingTitle};
  transition: text-shadow 0.3s ease, transform 0.3s ease;
  &:hover {
    font-weight: bold;
    text-shadow: 8px 8px 5px ${({ theme }) => theme.colors.shadow};
    transform: translateY(-2px) translateX(-2px);
  }
  color: ${({ theme }) => theme.colors.light};
  text-align: center;
`;

const PolaroidGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px 40px 10vh;
  background-color: ${({ theme }) => theme.colors.darkAccent};

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    scroll-snap-type: y mandatory;
    overflow-y: auto;
  }
`;

const Polaroid = styled.div`
  position: relative;
  box-shadow: 2px 2px 8px ${({ theme }) => theme.colors.shadow};
  background: ${({ theme }) => theme.colors.light};
  padding: 5px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover,
  &.active {
    transform: scale(1.05);
    box-shadow: 8px 8px 6px ${({ theme }) => theme.colors.shadow};
  }

  &:not(.active):hover .hover-image {
    opacity: 1;
  }

  &:not(.active) .hover-image {
    opacity: 0;
  }

  &:not(.active):hover .normal-image {
    opacity: 0;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  overflow: hidden;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
`;

const Name = styled.div`
  font-family: ${({ theme }) => theme.fonts.handwriting};
  font-size: 1.25rem;
  font-weight: bold;
  margin: 5px 0 0;
`;

const Role = styled.div`
  font-family: ${({ theme }) => theme.fonts.body};
  margin: 10px;
  font-size: 0.8em;
  white-space: pre-line;
`;

const SocialLinks = styled.div`
  margin: 15px 0 0;
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const SocialIcon = styled.a`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.dark};

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

function normalizeRoles(roleString) {
  return roleString
    .split("/")
    .map((role) => role.trim())
    .join("\n");
}

const AboutUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (window.innerWidth > 500) return;

    const handleScroll = () => {
      const polaroids = document.querySelectorAll(".polaroid");
      const windowCenter = window.innerHeight / 2;

      polaroids.forEach((polaroid, index) => {
        const rect = polaroid.getBoundingClientRect();
        const polaroidCenter = rect.top + rect.height / 2;

        if (Math.abs(polaroidCenter - windowCenter) < rect.height / 2) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const profiles = [
    {
      normal: "profile/normal/Robin.jpg",
      silhouette: "profile/silhouette/Robin-silhouette.png",
      name: "Robin Cho",
      role: "Creative Director/Producer/Designer",
      socials: {
        LinkedIn: "https://linkedin.com/in/robin-cho-85a430145",
        Instagram: "https://www.instagram.com/_insig",
      },
    },
    {
      normal: "profile/normal/Michael.jpg",
      silhouette: "profile/silhouette/Michael-silhouette.png",
      name: "Michael Byrne",
      role: "2D Artist/Animator/Lead Narrative",
      socials: {
        LinkedIn: "https://linkedin.com/in/michael-byrne-307645159",
        Instagram: "https://www.instagram.com/mikeybyrneart",
      },
    },
    {
      normal: "profile/normal/Cormac.jpg",
      silhouette: "profile/silhouette/Cormac-silhouette.png",
      name: "Cormac Dorrat",
      role: "Lead Designer/Level Programmer",
      socials: {
        LinkedIn: "https://linkedin.com/in/cormac-dorrat-dev",
        ItchIo: "https://cormacdev.itch.io",
        Website: "https://www.cormacdorrat.com",
      },
    },
    {
      normal: "profile/normal/Wenli.jpg",
      silhouette: "profile/silhouette/Wenli-silhouette.png",
      name: "Wenli Zhang",
      role: "3D Artist/Modeller",
      socials: {
        LinkedIn: "https://linkedin.com/in/wenli-zhang-79b900268",
        ArtStation: "https://www.artstation.com/nana_w",
        Website: "https://nana_w.artstation.com",
      },
    },
    {
      normal: "profile/normal/Jarrod.jpg",
      silhouette: "profile/silhouette/Jarrod-silhouette.png",
      name: "Jarrod Tymensen",
      role: "Designer/Social Media Manager",
      socials: {
        LinkedIn: "https://linkedin.com/in/jarrod-tymensen-719464248",
        Email: "mailto:tymensenj@gmail.com",
      },
    },
    {
      normal: "profile/normal/Aly.jpg",
      silhouette: "profile/silhouette/Aly-silhouette.png",
      name: "Thien An Ly",
      role: "Lead Programmer/Technical Artist",
      socials: {
        LinkedIn: "https://linkedin.com/in/thien-an-ly",
        GitHub: "https://github.com/thelazyant164",
        Website: "https://thelazyant164.github.io",
      },
    },
    {
      normal: "profile/normal/Preston.jpg",
      silhouette: "profile/silhouette/Preston-silhouette.png",
      name: "Preston Hulme",
      role: "Programmer",
      socials: {
        LinkedIn: "https://linkedin.com/in/preston-hulme-b093b8322",
      },
    },
    {
      normal: "profile/normal/Cody.jpg",
      silhouette: "profile/silhouette/Cody-silhouette.png",
      name: "Cody Dinh",
      role: "Programmer",
      socials: {
        LinkedIn: "https://linkedin.com/in/thach-dinh-4b9294218",
      },
    },
    {
      normal: "profile/normal/Yufan.webp",
      silhouette: "profile/silhouette/Yufan-silhouette.png",
      name: "Yufan Zhou",
      role: "Programmer",
      socials: {
        LinkedIn: "https://linkedin.com/in/yufan-zhou-474895298",
      },
    },
    {
      normal: "profile/normal/Callum.webp",
      silhouette: "profile/silhouette/Callum-silhouette.png",
      name: "Callum Lee Gow",
      role: "Music Composer",
      socials: {
        LinkedIn: "https://linkedin.com/in/callumleegow",
        Website: "https://callumleegow.com",
        Instagram: "https://www.instagram.com/callum.leegow",
      },
    },
    {
      normal: "profile/normal/Matt.jpg",
      silhouette: "profile/silhouette/Matt-silhouette.png",
      name: "Matthew Erasmus",
      role: "Sound Designer",
      socials: {
        LinkedIn: "https://linkedin.com/in/matthew-erasmus-868609291",
      },
    },
  ];

  return (
    <AboutSection>
      <SectionHeading id="about">About Us</SectionHeading>
      <PolaroidGrid>
        {profiles.map((profile, index) => (
          <Polaroid
            key={index}
            className={`polaroid ${activeIndex === index ? "active" : ""}`}
          >
            <ImageContainer>
              <Image
                src={profile.silhouette}
                alt="Profile"
                className="normal-image"
              />
              <Image
                src={profile.normal}
                alt="Profile Hover"
                className="hover-image"
              />
            </ImageContainer>
            <Name>{profile.name}</Name>
            <Role>{normalizeRoles(profile.role)}</Role>
            <SocialLinks>
              {profile.socials.LinkedIn && (
                <SocialIcon
                  key={`linkedIn-${index}`}
                  href={profile.socials.LinkedIn}
                  target="_blank"
                >
                  <FaLinkedin />
                </SocialIcon>
              )}
              {profile.socials.ItchIo && (
                <SocialIcon
                  key={`itchIo-${index}`}
                  href={profile.socials.ItchIo}
                  target="_blank"
                >
                  <FaItchIo />
                </SocialIcon>
              )}
              {profile.socials.GitHub && (
                <SocialIcon
                  key={`github-${index}`}
                  href={profile.socials.GitHub}
                  target="_blank"
                >
                  <FaGithub />
                </SocialIcon>
              )}
              {profile.socials.ArtStation && (
                <SocialIcon
                  key={`artStation-${index}`}
                  href={profile.socials.ArtStation}
                  target="_blank"
                >
                  <FaArtstation />
                </SocialIcon>
              )}
              {profile.socials.Website && (
                <SocialIcon
                  key={`website-${index}`}
                  href={profile.socials.Website}
                  target="_blank"
                >
                  <FaGlobe />
                </SocialIcon>
              )}
              {profile.socials.Instagram && (
                <SocialIcon
                  key={`instagram-${index}`}
                  href={profile.socials.Instagram}
                  target="_blank"
                >
                  <FaInstagram />
                </SocialIcon>
              )}
              {profile.socials.Email && (
                <SocialIcon
                  key={`email-${index}`}
                  href={profile.socials.Email}
                  target="_blank"
                >
                  <SiGmail />
                </SocialIcon>
              )}
            </SocialLinks>
          </Polaroid>
        ))}
      </PolaroidGrid>
    </AboutSection>
  );
};

export default AboutUs;
