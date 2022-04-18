import React from "react";
import styled from "styled-components";
import GuideImage from "../images/Thousand-03.png";
import H2 from "../theme/H2.styled";
import Body1 from "../theme/Body1.styled";
import Button from "../theme/Button.styled";

const GuideEl = styled.div`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin: 173px auto 0px auto;
  height: 550px;
  width: 1242px;

  @media (max-width: 1000px) {
    width: 1000px;
    margin-left: 120px;
  }
`;

const Image = styled.div`
  height: 100%;
  max-width: 599px;

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
  }
`;

const Title = styled.div`
  height: 100px;
  width: 481px;
`;

const Body = styled.div`
  margin-top: 20px;
  height: 120px;
`;

const Guides = () => {
  return (
    <GuideEl>
      <Image>
        <img src={GuideImage} alt="Guideimage" />
      </Image>
      <NewWay>
        <Title>
          <H2>
            Guides by Thousand
            <br /> Sunny
          </H2>
        </Title>
        <Body>
          <Body1>
            Packed with tips and advice from our on-the-ground experts, our city
            guides app (iOS and Android) is the ultimate resource before and
            during a trip.
          </Body1>
        </Body>
        <Button var="contained" size="md" style={{ marginTop: "33px" }}>
          Download
        </Button>
      </NewWay>
    </GuideEl>
  );
};

export default Guides;
