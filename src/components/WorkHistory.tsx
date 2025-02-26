import React from "react";
import styled from "styled-components";
import ExperienceItem from "./ExperienceItem";

const Container = styled.div`
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
  margin: auto;
`;

const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  color: #666;
  margin-bottom: 20px;
  text-transform: uppercase;
  text-align: center;
`;

const WorkHistory: React.FC = () => {
  return (
    <Container>
      <SectionTitle>Work History</SectionTitle>

      <ExperienceItem
        title="Deputy Manager - App Development"
        company="Validus Fintech, Hyderabad"

        skills={[
          "React Native",
          "TypeScript",
          "Android & iOS",
          "CI/CD & Automation",
          " Clean Code & SOLID Principles"
        ]}
        bulletPoints={[
          "Leading development of FinTech mobile apps",
          "Spearheading React Native & .NET backend integration",
          "Managing entire mobile app lifecycle",
          "Added CI/CD for all mobile apps using Fastlane, now one command deploys apps to both App Store and Play Store.",
          "Refactored old codebase following clean architecture and implemented security measures to prevent reverse engineering.",
          "Reduced app size by 30% using React Native’s new architecture.",
          "Created new open-source packages for reusability across all Validus Fintech apps.",
          "Reused components effectively to eliminate redundancy and duplication.",
        ]}      />

      <ExperienceItem
        title="Senior Mobile App Engineer"
        company="Bitcoin Depot, Atlanta"
        skills={[
          "React Native",
          "GraphQL & REST API",
  "React Hooks & Redux",
  "JWT & OAuth",
  "Next.js & TypeScript",
        ]}
        bulletPoints={[
          "Led development of Android & iOS apps for Bitcoin transactions.",
          "Designed & optimized features like Bitcoin ATM locator.",
          "Improved reliability through unit testing, debugging, & performance tuning.",
          "Migrated a legacy codebase to functional components and updated React Native version.",
          "Created and fixed issues that were not compatible with the latest React Native version.",
        ]}
      />

      <ExperienceItem
        title="Full Stack Engineer"
        company="Affinidi, Bangalore"

        skills={[
          "React Native & Web3",
          "Blockchain",
          "Next.js & TypeScript",
          "AWS & Cloud Services"
        ]}
        bulletPoints={[
          "Developed decentralized identity solutions leveraging Blockchain & Web 3.0.",
          "Built secure digital wallets for privacy-focused transactions.",
        ]}
      />

      <ExperienceItem
        title="Contract Mobile App Engineer"
        company="Bangalore"
        skills={[
          "Flutter",
          "React Native",
          "Firebase",
          "AWS",
          "Dart",
          "Google Cloud",
          "Machine Learning"
        ]}
        bulletPoints={[
          "Developed & deployed mobile applications for global clients & startups.",
          "Key projects: FingerTip (educational platform), Multipie (social trading platform), Paniwala (water delivery platform).",
        ]}
      />
      
    </Container>
  );
};

export default WorkHistory;
