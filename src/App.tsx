import React from "react";

import ProfileHeader from "./components/ProfileHeader";
import WorkHistory from "./components/WorkHistory";
import GlobalStyle from "./styles/globalStyles";

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
