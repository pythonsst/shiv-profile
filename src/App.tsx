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

// import React from "react";
// import ProfileHeader from "./components/ProfileHeader";
// import WorkHistory from "./components/WorkHistory";
// import ContactSidebar from "./components/ContactSidebar";
// import Skills from "./components/Skills";
// import GlobalStyle from "./styles/globalStyles";

// const App: React.FC = () => {
//   return (
//     <>
//       <GlobalStyle />
//       <ProfileHeader />
//       <div className="container">
//         <WorkHistory />
//         <div>
//           <ContactSidebar />
//           <Skills />
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;
