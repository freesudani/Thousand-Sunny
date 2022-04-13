import React from "react";
import styled from "styled-components";
import Header from "./components/Header";

const AppEl = styled.div`
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <AppEl>
      <Header />
    </AppEl>
  );
};

export default App;
