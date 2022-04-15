import React from "react";
import styled from "styled-components";
import TestiImage from "../images/photo.png";
import H2 from "../theme/H2.styled";
import Star from "../components/Star";
import Body2 from "../theme/Body2.styled";
import Subtitle2 from "../theme/Subtitle2.styled";
import Body3 from "../theme/Body3.styled";
import elementImg2 from "../images/element.png";

const TestEl = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: auto;
  width: 1036px;
  margin: 248px auto 0px auto;
`;

const Element2 = styled.div`
  position: absolute;
  margin-top: 248px;
  margin-left: -50px;
`;

const PartText = styled.div`
  width: 450px;
  height: auto;
  margin-top: 31px;
`;

const Image = styled.div`
  width: 416px;
  height: 522.98px;
`;

const Left = styled.div`
  height: auto;
`;

const Testimonials = () => {
  return (
    <TestEl>
      <Element2>
        <img src={elementImg2} alt="element" />
      </Element2>
      <Left>
        <H2 style={{ marginTop: "15px" }}>Testimonials</H2>
        <PartText>
          <Star style={{ marginTop: "31px" }} />
          <Body2 style={{ marginTop: "30px" }}>
            “Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus
            ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet
            turpis nec”
          </Body2>
          <Subtitle2 style={{ marginTop: "100px" }}>Edward Newgate</Subtitle2>
          <Body3 style={{ marginTop: "-10px" }}>Founder Circle</Body3>
        </PartText>
      </Left>
      <Image>
        <img src={TestiImage} alt="Testiimage" />
      </Image>
    </TestEl>
  );
};

export default Testimonials;
