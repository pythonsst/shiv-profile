import React from "react";
import styled from "styled-components";
import ProfileHeader from "./ProfileHeader";
import WorkHistory from "./WorkHistory";
import ContactSidebar from "./ContactSidebar";

const ResumeContainer = styled.div`
  display: flex;
  max-width: 1000px;
  margin: 30px auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const LeftColumn = styled.div`
  width: 65%;
  padding: 30px;
  background: #fff;
`;

const RightColumn = styled.div`
  width: 35%;
  padding: 30px;
  background: #f9f9f9;
`;

const ResumeLayout: React.FC = () => {
  return (
    <>
      <ProfileHeader />
      <ResumeContainer>
        <LeftColumn>
          <WorkHistory />
        </LeftColumn>
        <RightColumn>
          <ContactSidebar />
        </RightColumn>
      </ResumeContainer>
    </>
  );
};

export default ResumeLayout;
