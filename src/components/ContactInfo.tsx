import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  font-size: 14px;
  color: #333;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ContactItem = styled.p`
  margin-bottom: 8px;
`;

const Link = styled.a`
  color: #007BFF;
  text-decoration: none;
`;

const ContactInfo: React.FC = () => {
  return (
    <ContactContainer>
      <SectionTitle>Contact</SectionTitle>
      <ContactItem><strong>Address:</strong> Hyderabad, India 500032</ContactItem>
      <ContactItem><strong>Phone:</strong> +91 7007746087</ContactItem>
      <ContactItem><strong>Email:</strong> pythonssst@gmail.com</ContactItem>
      <ContactItem>
        <strong>LinkedIn:</strong> <Link href="https://www.linkedin.com/in/shiv-shankar-tiwari-1a" target="_blank">
          linkedin.com/in/shiv-shankar-tiwari-1a
        </Link>
      </ContactItem>

      <SectionTitle>Skills</SectionTitle>
      <ContactItem>• JavaScript Expertise</ContactItem>
      <ContactItem>• Proficient in TypeScript</ContactItem>
      <ContactItem>• Dart Proficiency</ContactItem>
      <ContactItem>• Kotlin Programming</ContactItem>
      <ContactItem>• Java Programming</ContactItem>
      <ContactItem>• React.js & Redux</ContactItem>
      <ContactItem>• React Native Development</ContactItem>
      <ContactItem>• Node.js & Nest.js</ContactItem>
      <ContactItem>• GraphQL & Express.js</ContactItem>

      <SectionTitle>Languages</SectionTitle>
      <ContactItem>• English (Fluent)</ContactItem>
      <ContactItem>• Hindi (Native)</ContactItem>

      <SectionTitle>Personal Details</SectionTitle>
      <ContactItem><strong>Date of Birth:</strong> 10/07/1995</ContactItem>
      <ContactItem><strong>Nationality:</strong> Indian</ContactItem>
    </ContactContainer>
  );
};

export default ContactInfo;
