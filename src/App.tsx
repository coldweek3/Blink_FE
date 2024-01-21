import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Nav from "./components/layouts/nav/Nav";
import Footer from "./components/layouts/footer/Footer";
import { GlobalStyle } from "./globalStyle";

const BackGroundColor = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  background-color: rgba(237, 241, 246, 0.95);
`;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  flex-grow: 1;
  font-family: NotoSansRegular; /* 기본 폰트설정 */
`;

const Layout = () => {
  const location = useLocation();

  return (
    <BackGroundColor>
      {location.pathname !== "/login" && <Nav />}
      <Wrapper>
        <Outlet />
        {location.pathname !== "/login" && <Footer />}
      </Wrapper>
    </BackGroundColor>
  );
};

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout />
    </>
  );
}

export default App;
