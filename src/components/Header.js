import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import HeaderImg from "../images/thousand-01 1.png";
import H1 from "../theme/H1.styled";
import Subtitle1 from "../theme/Subtitle1.styled";
import Button from "../theme/Button.styled";
import elementImg1 from "../images/element3.png";
import elementImg2 from "../images/element.png";
import elementImg3 from "../images/element2.png";

const Element1 = styled.div`
  position: absolute;
  margin-top: 185px;
  margin-left: 577px;
`;

const Element2 = styled.div`
  position: absolute;
  margin-top: 748px;
  margin-left: 652px;
`;

const Element3 = styled.div`
  position: absolute;
  margin-top: 459px;
  margin-left: 0px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Right = styled.div``;
const Left = styled.div``;

const HeaderEl = styled.div`
  position: relative;
  height: 786px;
  width: 1415px;
  margin: 38px auto 0px auto;
`;

const Title = styled.div`
  margin-left: 109px;
  margin-top: 165px;
  width: 356px;
`;

const HolidayFinder = styled.div`
  margin-top: 74px;
  margin-left: 109px;
  width: 471px;
  height: 344px;
`;

const Rect = styled.div`
  width: 32px;
  height: 2px;
  margin-left: 0px;
  margin-top: 21px;
  background: #202336;
  border-radius: 4px;
`;

const Selectors = styled.div`
  display: grid;
  grid-template-columns: 220px 220px;
  grid-template-rows: 52px 52px;
  column-gap: 30px;
  row-gap: 35px;
  margin-left: 0px;
  margin-top: 48px;
`;

const Selector = styled.div`
  border: 0.8px solid #afb0b9;
  border-radius: 6px;
  overflow: hidden;
`;

const Image = styled.div`
  margin-top: 132px;
  width: 687px;
`;

const Header = () => {
  return (
    <HeaderEl>
      <Navbar />
      <Element1>
        <img src={elementImg1} alt="element" />
      </Element1>
      <Element2>
        <img src={elementImg2} alt="element" />
      </Element2>
      <Element3>
        <img src={elementImg3} alt="element" />
      </Element3>
      <Bottom>
        <Left>
          <Title>
            <H1>Explore and Travel</H1>
          </Title>
          <HolidayFinder>
            <Subtitle1>Holiday finder</Subtitle1>
            <Rect />
            <Selectors>
              <Selector></Selector>
              <Selector></Selector>
              <Selector></Selector>
              <Selector></Selector>
            </Selectors>
            <Button
              var="contained"
              size="lg"
              style={{ marginTop: "47px", marginLeft: "0px" }}
            >
              Explore
            </Button>
          </HolidayFinder>
        </Left>
        <Right>
          <Image>
            <img src={HeaderImg} alt="headerimage" />
          </Image>
        </Right>
      </Bottom>
    </HeaderEl>
  );
};

export default Header;
