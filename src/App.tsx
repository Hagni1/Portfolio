import React from "react";
import styled from "styled-components";
import { Header, Navigation, Projects, AboutMe, ContactMe } from "./components";
const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
function App() {
  return (
    <AppWrapper>
      <Navigation />
      <Header />
      <Projects />
      <AboutMe />
      <ContactMe />
    </AppWrapper>
  );
}

export default App;
