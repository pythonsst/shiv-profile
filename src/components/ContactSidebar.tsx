import React from "react";
import styled from "styled-components";

const Sidebar = styled.div`
  flex: 1;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 120px;
  border-radius: 50%;
  margin-bottom: 15px;
`;

const ContactSidebar: React.FC = () => {
  return (
    <Sidebar>
      <ProfileImage src="https://via.placeholder.com/120" alt="Shiv Shankar Tiwari" />
      <h3>Contact</h3>
      <p>📍 Hyderabad, India</p>
      <p>📞 +91 7007746087</p>
      <p>✉ pythonssst@gmail.com</p>
      <p><a href="https://www.linkedin.com/in/shiv-shankar-tiwari-1a">LinkedIn</a></p>
    </Sidebar>
  );
};

export default ContactSidebar;
