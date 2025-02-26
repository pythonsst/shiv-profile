import React from "react";
import styled from "styled-components";

const JobContainer = styled.div`
  margin-bottom: 30px;
`;

const JobTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Company = styled.span`
  font-size: 16px;
  color: #aaa;
  font-weight: normal;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 10px 0;
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
  margin-bottom: 8px;
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

interface ExperienceProps {
  title: string;
  company: string;
  skills: string[];
  bulletPoints: string[];
}

const ExperienceItem: React.FC<ExperienceProps> = ({ title, company, skills, bulletPoints }) => {
  return (
    <JobContainer>
      <JobTitle>{title} <Company>at {company}</Company></JobTitle>

      {/* Skills Section Below Company Name */}
      <TagsContainer>
        {skills.map((skill, index) => (
          <Tag key={index}>{skill}</Tag>
        ))}
      </TagsContainer>

      {/* Role-Specific Technologies */}
    
      {/* Responsibilities */}
      <BulletList>
        {bulletPoints.map((point, index) => (
          <BulletItem key={index}>{point}</BulletItem>
        ))}
      </BulletList>
    </JobContainer>
  );
};

export default ExperienceItem;
