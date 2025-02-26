import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background: linear-gradient(135deg, #004aad, #007bff);
  color: white;
  padding: 35px 40px;
  text-align: center;
  border-radius: 10px;
  width: 100%;
  max-width: 1100px;  // Adjust for width balance
  margin: auto;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
`;

const Name = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin: 10px 0;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
  opacity: 0.9;
`;

const ExperienceBadge = styled.div`
  background: white;
  color: #004aad;
  display: inline-block;
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 50px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  margin-top: 10px;
`;

const ProfileHeader: React.FC = () => {
  return (
    <HeaderContainer>
      <Name>SHIV SHANKAR TIWARI</Name>
      <Title>Mobile App Engineer</Title>
      <ExperienceBadge>🏆 8+ Years of Experience</ExperienceBadge>
    </HeaderContainer>
  );
};

export default ProfileHeader;
