import React from "react";
import styled from "styled-components";
import H2 from "../theme/H2.styled";
import VectorImage from "../images/Vector 1.png";
import FeatureImage1 from "../images/Mask Group.png";
import FeatureImage2 from "../images/Mask Group (1).png";
import FeatureImage3 from "../images/Mask Group (2).png";
import FeatureImage4 from "../images/Mask Group (3).png";
import Button from "../theme/Button.styled";
import { Colors } from "../theme/Theme";
import Lead8 from "../theme/Lead8.styled";
import Lead9 from "../theme/Lead9.styled";
import elementImg1 from "../images/element3.png";
import elementImg2 from "../images/element2.png";

const FeaturedEl = styled.div`
  position: relative;
  height: 532px;
  width: 1139px;
  margin-top: 262px;
  margin-left: auto;
  margin-right: auto;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled.div`
  margin-bottom: 56px;
`;

const Para = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 46px;
  color: ${Colors.Brand.OrangeMain};
`;

const Bottom = styled.div`
  display: grid;
  grid-template-columns: 261px 261px 261px 261px;
  grid-template-rows: 337px;
  column-gap: 25px;
`;

const FImage = styled.div`
  position: relative;
`;

const FImageTitle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
`;

const Element1 = styled.div`
  position: absolute;
  margin-top: 305px;
  margin-left: -70px;
`;

const Element2 = styled.div`
  position: absolute;
  margin-top: 479px;
  margin-left: 473px;
`;

const Featured = () => {
  return (
    <FeaturedEl>
      <Element1>
        <img src={elementImg1} alt="element" />
      </Element1>
      <Element2>
        <img src={elementImg2} alt="element" style={{ width: "20px" }} />
      </Element2>
      <Top>
        <Header>
          <H2>Featured destinations</H2>
        </Header>
        <Para>
          <Button size="sm" var="special">
            View all
            <img
              src={VectorImage}
              alt="stik"
              style={{ width: "4px", height: "9px", marginLeft: "11px" }}
            />
          </Button>
        </Para>
      </Top>
      <Bottom>
        <FImage>
          <img src={FeatureImage4} alt="Featured" />
          <FImageTitle>
            <Lead8>Raja Ampat</Lead8>
            <Lead9>Indonesia</Lead9>
          </FImageTitle>
        </FImage>
        <FImage>
          <img src={FeatureImage3} alt="Featured" />
          <FImageTitle>
            <Lead8>Fanjingshan</Lead8>
            <Lead9>China</Lead9>
          </FImageTitle>
        </FImage>
        <FImage>
          <img src={FeatureImage2} alt="Featured" />
          <FImageTitle>
            <Lead8>Vevey</Lead8>
            <Lead9>Switzerland</Lead9>
          </FImageTitle>
        </FImage>
        <FImage>
          <img src={FeatureImage1} alt="Featured" />
          <FImageTitle>
            <Lead8>Skadar</Lead8>
            <Lead9>Montenegro</Lead9>
          </FImageTitle>
        </FImage>
      </Bottom>
    </FeaturedEl>
  );
};

export default Featured;
