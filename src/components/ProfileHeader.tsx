import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background: #2c2c2c;
  color: white;
  padding: 30px 20px;
  text-align: center;
`;

const Name = styled.h1`
  font-size: 26px;
`;

const Role = styled.h2`
  font-size: 18px;
  font-weight: normal;
`;

const Description = styled.p`
  max-width: 800px;
  margin: 15px auto;
  font-size: 14px;
  color: #ddd;
`;

const ProfileHeader: React.FC = () => {
  return (
    <HeaderContainer>
      <Name>Shiv Shankar Tiwari</Name>
      <Role>Mobile App Engineer</Role>
      <Description>
        Experienced Mobile Application Engineer with 6+ years of experience in designing and 
        developing scalable, high-performance mobile applications. Specializing in Mobile App 
        Development, including cross-platform (React Native, Flutter) and native development 
        (Android, iOS). Expertise in FinTech & EdTech applications, leading development teams, 
        optimizing app performance, and integrating security protocols.
      </Description>
    </HeaderContainer>
  );
};

export default ProfileHeader;
