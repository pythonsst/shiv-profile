import React from "react";
import styled from "styled-components";

// 🟦 Header Container with Elegant Gradient
const HeaderContainer = styled.div`
  background: linear-gradient(135deg, #002855, #004aad);
  color: white;
  padding: 50px 20px;
  text-align: center;
  border-radius: 15px;
  width: 100%;
  max-width: 1100px;
  margin: auto;
  box-shadow: 0px 8px 18px rgba(0, 0, 0, 0.2);
  position: relative;
`;

// ✍️ Title & Subtitle Styling
const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-top: 0;
  letter-spacing: 1px;
`;

const Subtitle = styled.h3`
  font-size: 20px;
  font-weight: normal;
  opacity: 0.9;
`;

// 📜 Summary with Clean Text (No `**` formatting)
const SummaryText = styled.p`
  font-size: 16px;
  margin-top: 20px;
  line-height: 1.7;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.95;
  text-align: center;
  font-weight: 500;
`;

// 🏆 Experience Badge with Sleek Design
const ExperienceBadge = styled.div`
  background: #ffcc00;
  color: #002855;
  font-weight: bold;
  padding: 12px 24px;
  border-radius: 20px;
  display: inline-block;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  margin-top: 25px;
  font-size: 16px;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      {/* Title & Subtitle */}
      <Title>Shiv Shankar Tiwari</Title>
      <Subtitle>Mobile App Engineer</Subtitle>

      {/* Summary - No `**` bold formatting */}
      <SummaryText>
        Passionate Mobile Engineer with 6+ years of experience in
        designing and developing scalable, high-performance mobile applications.
        Specialized in cross-platform development (React Native, Flutter) and
        native (Android, iOS) mobile solutions, delivering seamless user experiences.

        Expertise in FinTech & EdTech applications, leading development teams,
        optimizing app performance, and integrating robust security protocols.
        Proven track record of building and launching successful mobile applications
        with 100K+ downloads on the Play Store & App Store.
      </SummaryText>

      {/* Experience Badge */}
      <ExperienceBadge>🏆 6+ Years of Experience</ExperienceBadge>
    </HeaderContainer>
  );
};

export default Header;
