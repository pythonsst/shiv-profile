import React from "react";
import styled from "styled-components";
import ProfileHeader from "./components/ProfileHeader";
import ContactSidebar from "./components/ContactSidebar";
import WorkHistory from "./components/WorkHistory";
import Header from "./components/Header";


const Container = styled.div`
  display: flex;
  max-width: 1200px;
  margin: auto;
  gap: 20px;
`;

const MainContent = styled.div`
  flex: 3;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const App: React.FC = () => {
  return (
    <div>

      <Header />
      <Container>
        <MainContent>
          <WorkHistory />
        </MainContent>
        <ContactSidebar />
      </Container>
    </div>
  );
};

export default App;
