import React from "react";
import styled from "styled-components";
import H2 from "../theme/H2.styled";
import Body1 from "../theme/Body1.styled";
import Button from "../theme/Button.styled";
import ExplorerImage from "../images/Thousand-02 1.png";

const ExploreEl = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 550px;
  width: 1242px;
  margin: 267px auto 0px auto;

  @media (max-width: 1000px) {
    width: 1000px;
  }
`;

const Image = styled.div`
  height: 100%;
  max-width: 659px;

  @media (max-width: 1000px) {
    max-width: 500px;
  }
`;

const NewWay = styled.div`
  height: auto;
  max-width: 481px;
  margin-top: 112px;

  @media (max-width: 1000px) {
    max-width: 500px;
    margin-left: 290px;
  }
`;

const Title = styled.div`
  height: auto;
  width: 481px;
`;

const Body = styled.div`
  margin-top: 20px;
  height: 120px;
`;

const Explore = () => {
  return (
    <ExploreEl>
      <Image>
        <img src={ExplorerImage} alt="explorerimage" />
      </Image>
      <NewWay>
        <Title>
          <H2>A new way to explore the world </H2>
        </Title>
        <Body>
          <Body1>
            For decades travellers have reached for Lonely Planet books when
            looking to plan and execute their perfect trip, but now, they can
            also let Lonely Planet Experiences lead the way
          </Body1>
        </Body>
        <Button var="contained" size="md" style={{ marginTop: "39px" }}>
          Learn more
        </Button>
      </NewWay>
    </ExploreEl>
  );
};

export default Explore;
