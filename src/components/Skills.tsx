import React from "react";

const Skills: React.FC = () => {
  const skills: string[] = ["React.js", "Node.js", "TypeScript", "MongoDB", "Express"];

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
