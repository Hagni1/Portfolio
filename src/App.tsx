import React from "react";
import styled from "styled-components";
import { Header, Navigation, Projects, AboutMe } from "./components";
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
    </AppWrapper>
  );
}

export default App;
