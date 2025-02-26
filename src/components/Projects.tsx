import React from "react";

interface Project {
  name: string;
  link: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    { name: "Portfolio Website", link: "#" },
    { name: "E-commerce App", link: "#" },
  ];

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <p key={index}>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {project.name}
          </a>
        </p>
      ))}
    </div>
  );
};

export default Projects;
