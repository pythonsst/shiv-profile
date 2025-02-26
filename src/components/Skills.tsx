// import React from "react";

// const Skills: React.FC = () => {
//   const skills: string[] = ["React.js", "Node.js", "TypeScript", "MongoDB", "Express"];

//   return (
//     <div style={{ padding: "20px", textAlign: "center" }}>
//       <h2>Skills</h2>
//       <ul>
//         {skills.map((skill, index) => (
//           <li key={index}>{skill}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Skills;

import React from "react";
import styled from "styled-components";

const SkillsContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-top: 20px;
`;

const SkillsTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const Tag = styled.span`
  background: white;
  color: #333;
  font-size: 14px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid #ddd;
  text-align: center;
`;

const skills = [
  "AWS",
  "Docker",
  "Jenkins",
  "Node.js",
  "React",
  "React Native",
  "Redux",
  "Terraform"
];

const Skills: React.FC = () => {
  return (
    <SkillsContainer>
      <SkillsTitle>Skills</SkillsTitle>
      <TagContainer>
        {skills.map((skill, index) => (
          <Tag key={index}>{skill}</Tag>
        ))}
      </TagContainer>
    </SkillsContainer>
  );
};

export default Skills;
