import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
  border-radius: 1px;
  margin-bottom: 15px;
  border: 3px solid #ddd;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  border-bottom: 2px solid #4a90e2;
  padding-bottom: 5px;
  text-align: left;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
`;

const ListItem = styled.li`
  font-size: 14px;
  padding: 5px 0;
  color: #444;
`;

const ContactSidebar: React.FC = () => {
  return (
    <SidebarContainer>
   <ProfileImage src={`${process.env.PUBLIC_URL}/shiv.png`} alt="Shiv Shankar Tiwari" />

      <SectionTitle>Contact</SectionTitle>
      <List>
        <ListItem>📍 Hyderabad, India 500032</ListItem>
        <ListItem>📞 +91 7007746087</ListItem>
        <ListItem>✉ pythonsst@gmail.com</ListItem>
        <ListItem>
          🔗{" "}
          <a href="https://www.linkedin.com/in/shivtiwari-mobile-engineer/">
            LinkedIn
          </a>
        </ListItem>
      </List>

      <SectionTitle>Skills</SectionTitle>
      <List>
        <ListItem>JavaScript Expertise</ListItem>
        <ListItem>Proficient in TypeScript</ListItem>
        <ListItem>Dart & Kotlin Proficiency</ListItem>
        <ListItem>React JS & React Native</ListItem>
        <ListItem>Node.js, Express.js, Nest.js</ListItem>
        <ListItem>GraphQL, Redux</ListItem>
        <ListItem>Flutter & Mobile Development</ListItem>
      </List>

      <SectionTitle>Education</SectionTitle>
      <List>
        <ListItem>
          <strong>B.Tech: Computer Science & Engineering</strong>
        </ListItem>
        <ListItem>Rajkiya Engineering College Sonbhadra</ListItem>
        <ListItem>
          Final Year Project: P2P File Sharing using Wi-Fi Direct &
          Infrastructure Mode
        </ListItem>
      </List>

      <SectionTitle>Languages</SectionTitle>
      <List>
        <ListItem>English (Fluent)</ListItem>
        <ListItem>Hindi (Native)</ListItem>
      </List>

      <SectionTitle>Personal Details</SectionTitle>
      <List>
        <ListItem>📅 Date of Birth: 10/07/1995</ListItem>
        <ListItem>🆔 Nationality: Indian</ListItem>
      </List>

      <SectionTitle>Certifications</SectionTitle>
      <List>
        <ListItem>
          🏆 Microsoft Certified Android App Development Training, 2017
        </ListItem>
        <ListItem>🏆 Head of Discipline Committee & Sports Champion</ListItem>
      </List>
    </SidebarContainer>
  );
};

export default ContactSidebar;
