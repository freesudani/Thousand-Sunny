import React from "react";
import styled from "styled-components";
import Explore from "./components/Explore";
import Featured from "./components/Featured";
import Header from "./components/Header";

const AppEl = styled.div`
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <AppEl>
      <Header />
      <Explore />
      <Featured />
    </AppEl>
  );
};

export default App;
