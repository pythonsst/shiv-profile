import React from "react";
import GlobalStyle from "../styles/globalStyles";
import ProfileHeader from "./ProfileHeader";
import WorkHistory from "./WorkHistory";


const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ProfileHeader />
      <WorkHistory />
    </>
  );
};

export default App;
