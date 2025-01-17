import React from "react";
import styled from "@emotion/styled";
import Main from "../components/Main";
function Home() {
  const HomeWrapper = styled.div`
    width: 60%;
    height: 500vh;
    background-color: #121212;
  `;
  return <HomeWrapper>
    <Main></Main>
  </HomeWrapper>;
}

export default Home;
