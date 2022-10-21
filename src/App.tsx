import React from "react";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
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
      <ToastContainer />
    </AppWrapper>
  );
}

export default App;
