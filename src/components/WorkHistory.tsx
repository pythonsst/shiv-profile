import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 900px;
  margin: 40px auto;
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  color: #666;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

const JobContainer = styled.div`
  margin-bottom: 40px;
`;

const JobTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Company = styled.span`
  font-size: 18px;
  color: #aaa;
  font-weight: normal;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 15px 0;
`;

const Tag = styled.span`
  background: white;
  color: #333;
  font-size: 12px;
  padding: 6px 12px;
  border-radius: 20px;
  border: 1px solid #ddd;
  font-weight: bold;
`;

const BulletList = styled.ul`
  padding-left: 20px;
  margin-top: 10px;
`;

const BulletItem = styled.li`
  font-size: 14px;
  margin-bottom: 10px;
  line-height: 1.5;
  position: relative;
  padding-left: 15px;
  
  &::before {
    content: "•"; 
    position: absolute;
    left: 0;
    color: #333;
    font-size: 16px;
    font-weight: bold;
  }
`;

const WorkHistory: React.FC = () => {
  return (
    <Container>
      <SectionTitle>WORK HISTORY</SectionTitle>

      <JobContainer>
        <JobTitle>Senior Full-Stack Developer <Company>at ACME Corp.</Company></JobTitle>
        <TagsContainer>
          <Tag>AWS</Tag> <Tag>Docker</Tag> <Tag>Jenkins</Tag> <Tag>Node.js</Tag> <Tag>React</Tag> <Tag>React Native</Tag> <Tag>Redux</Tag> <Tag>Terraform</Tag>
        </TagsContainer>
        <BulletList>
          <BulletItem>Migrated a legacy codebase to microservices using Node.js, improving performance by 70%.</BulletItem>
          <BulletItem>Led the migration of legacy Jive mobile apps (Android, iOS) to React Native for a unified codebase.</BulletItem>
          <BulletItem>Refactored search infrastructure to improve search speed and accuracy.</BulletItem>
          <BulletItem>Managed and maintained CI/CD pipelines that automated build, test, and deployment.</BulletItem>
          <BulletItem>Performed code reviews and ensured high production-quality code.</BulletItem>
          <BulletItem>Automated End-to-End Testing and Unit Tests to guarantee application workflows.</BulletItem>
          <BulletItem>Reduced system maintenance time by 85% by reducing technical debt.</BulletItem>
        </BulletList>
      </JobContainer>

      <JobContainer>
        <JobTitle>Senior Full-Stack Developer <Company>at Wayne Enterprises</Company></JobTitle>
        <TagsContainer>
          <Tag>AWS</Tag> <Tag>CI/CD</Tag> <Tag>CircleCI</Tag> <Tag>CSS</Tag> <Tag>Cypress</Tag> <Tag>Elasticsearch</Tag> <Tag>JavaScript</Tag> <Tag>Mocha</Tag> <Tag>MongoDB</Tag> <Tag>Node</Tag> <Tag>Python</Tag> <Tag>React</Tag> <Tag>Redux</Tag> <Tag>TypeScript</Tag>
        </TagsContainer>
        <BulletList>
          <BulletItem>Managed enterprise test-oriented systems handling large data volumes.</BulletItem>
          <BulletItem>Optimized query execution times, reducing some by 99%.</BulletItem>
          <BulletItem>Developed new search & filtering features for Frontend & Backend.</BulletItem>
          <BulletItem>Migrated testing environments to updated MongoDB versions.</BulletItem>
          <BulletItem>Led global teams across US & LATAM for project alignment.</BulletItem>
        </BulletList>
      </JobContainer>

      <JobContainer>
        <JobTitle>Full-Stack Developer <Company>at Umbrella Corp.</Company></JobTitle>
        <TagsContainer>
          <Tag>Angular</Tag> <Tag>Docker</Tag> <Tag>MongoDB</Tag> <Tag>Node.js</Tag> <Tag>React</Tag> <Tag>Redux</Tag> <Tag>Swift</Tag> <Tag>TypeScript</Tag>
        </TagsContainer>
        <BulletList>
          <BulletItem>Implemented UI/UX redesign, fixing major app performance issues.</BulletItem>
          <BulletItem>Developed an iOS app to improve customer support response time by 30%.</BulletItem>
          <BulletItem>Built a project management dashboard for remote team tracking.</BulletItem>
        </BulletList>
      </JobContainer>

      <JobContainer>
        <JobTitle>Frontend Developer <Company>at Stark Industries</Company></JobTitle>
        <TagsContainer>
          <Tag>CSS</Tag> <Tag>Django</Tag> <Tag>HTML</Tag> <Tag>JavaScript</Tag> <Tag>Node</Tag> <Tag>Odoo</Tag> <Tag>Python</Tag>
        </TagsContainer>
        <BulletList>
          <BulletItem>Developed an ERP system for large-scale industrial operations.</BulletItem>
          <BulletItem>Generated and integrated login tokens for enterprise security.</BulletItem>
          <BulletItem>Designed & built a Business Supervision System using TCP protocols.</BulletItem>
          <BulletItem>Led website development based on the Odoo framework.</BulletItem>
        </BulletList>
      </JobContainer>
    </Container>
  );
};

export default WorkHistory;
