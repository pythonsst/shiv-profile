import React from "react";
import styled from "styled-components";
import ExperienceItem from "./ExperienceItem";

const Container = styled.div`
  background: white;
  padding: 30px;
  border-radius: 8px;
`;



const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  color: #444;
  margin-bottom: 20px;
`;

const WorkHistory: React.FC = () => {
  return (
    <Container>
      <SectionTitle>Work History</SectionTitle>

      <ExperienceItem
        title="Deputy Manager - App Development"
        company="Validus Fintech, Hyderabad"
        startYear="2024-07"
        endYear="Current"
        skills={["React Native", "TypeScript", "Android & iOS", "CI/CD", "Clean Code"]}
        bulletPoints={
          [
            "Architected high-performance FinTech mobile applications, ensuring seamless user experiences and compliance with industry standards while leveraging React Native for optimal performance.",
            "Designed and implemented a fully automated CI/CD pipeline using Fastlane, enabling one-command deployments to both the App Store and Google Play, reducing manual effort by 90%.",
            "Refactored and modernized a legacy codebase, enforcing Clean Architecture, implementing robust security measures to prevent reverse engineering, and reducing app size by 30%.",
            "Developed and maintained enterprise-grade CI/CD pipelines, automating build, test, and deployment workflows, ensuring efficient, error-free, and scalable application releases.",
            "Created reusable open-source packages and standardized components, reducing redundancy, accelerating development cycles, and promoting maintainable code across all Validus Fintech applications."
          ]
        }
      />

      <ExperienceItem
        title="Senior Mobile App Engineer"
        company="Bitcoin Depot, Atlanta"
        startYear="2022-07"
        endYear="2024-05"
        skills={["React Native", "GraphQL & REST API", "React Hooks & Redux"]}
        bulletPoints={[
          "Led the development of Android & iOS applications, ensuring secure Bitcoin transactions.",
          "Designed and optimized features like BDCCheckout funding & Bitcoin ATM locator, improving accessibility and functionality.",
          "Enhanced app reliability through comprehensive unit testing, debugging, and performance optimization.",
          "Refactored a legacy codebase by converting class components to functional components, improving maintainability and performance.",
          "Resolved compatibility issues arising from React Native version upgrades, ensuring a seamless transition to the latest framework versions.",
        ]}
      />

      <ExperienceItem
        title="Full Stack Engineer"
        company="Affinidi, Bangalore"
        startYear="2021-07"
        endYear="2022-05"
        skills={["React Native & Web3", "Blockchain", "Next.js & TypeScript", "AWS & Cloud Services"]}
        bulletPoints={[
          "Developed decentralized identity solutions leveraging Blockchain & Web 3.0, ensuring secure digital transactions and identity verification.",
          "Built and deployed secure digital wallets (YourEdge Wallet, Asli Wallet) for privacy-focused transactions, ensuring compliance with Web3 standards.",
          "Designed and implemented GraphQL APIs to improve data accessibility and reduce backend response times by 50%.",
          "Utilized AWS cloud services to ensure high availability, security, and scalability of the application infrastructure.",
        ]}
      />

      <ExperienceItem
        title="Contract Mobile App Engineer"
        company="Bangalore"
        startYear="2019-06"
        endYear="2021-07"
        skills={["Flutter", "React Native", "Firebase", "AWS", "Dart", "Google Cloud", "Machine Learning"]}
        bulletPoints={[
          "Designed and deployed mobile applications for global clients & startups, ensuring high scalability and user experience.",
          "Key projects: FingerTip (educational platform), Multipie (social trading platform), Paniwala (water delivery platform).",
        ]}
      />
    </Container>
  );
};

export default WorkHistory;
