import React from "react";
import styled from "styled-components";
import Explore from "./components/Explore";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Guides from "./components/Guides";
import Header from "./components/Header";
import Testimonials from "./components/Testimonials";
import Trending from "./components/Trending";

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
      <Guides />
      <Testimonials />
      <Trending />
      <Footer />
    </AppEl>
  );
};

export default App;
