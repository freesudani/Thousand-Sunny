import React from "react";
import styled from "styled-components";
import H2 from "../theme/H2.styled";
import Button from "../theme/Button.styled";
import { Colors } from "../theme/Theme";
import Subtitle3 from "../theme/Subtitle3.styled";
import Lead5 from "../theme/Lead5.styled";
import Body4 from "../theme/Body4.styled";
import VectorImage from "../images/Vector 1.png";
import elementImg2 from "../images/element.png";
import TrendingImage4 from "../images/Mask Group (4).png";
import TrendingImage3 from "../images/Mask Group (5).png";
import TrendingImage2 from "../images/Mask Group (6).png";
import TrendingImage1 from "../images/Mask Group (7).png";

const TrendingEl = styled.div`
  position: relative;
  height: 684px;
  width: 1152px;
  margin-top: 213px;
  margin-left: auto;
  margin-right: auto;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 57px;
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
  grid-template-columns: 266px 266px 266px 266px;
  grid-template-rows: 446px;
  column-gap: 24px;
`;

const TImage = styled.div`
  position: relative;
`;

const Element2 = styled.div`
  position: absolute;
  margin-top: 428px;
  margin-left: -50px;
`;

const Trending = () => {
  return (
    <TrendingEl>
      <Element2>
        <img src={elementImg2} alt="element" />
      </Element2>
      <Top>
        <Header>
          <H2>Trending stories</H2>
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
        <TImage>
          <img
            src={TrendingImage1}
            alt="Trending"
            style={{ position: "absolute" }}
          />

          <Subtitle3
            style={{
              position: "absolute",
              width: "219px",
              marginTop: "250px",
            }}
          >
            The many benefits of taking a healing holiday
          </Subtitle3>

          <Body4
            style={{
              position: "absolute",
              width: "266px",
              marginTop: "323px",
            }}
          >
            ‘Helaing holidays’ are on the rise tohelp maximise your health and
            happines...
          </Body4>
          <Lead5
            style={{
              position: "absolute",
              width: "266px",
              marginTop: "424px",
              color: `${Colors.Brand.OrangeMain}`,
            }}
          >
            Read More
          </Lead5>
        </TImage>
        <TImage>
          <img
            src={TrendingImage2}
            alt="Trending"
            style={{ position: "absolute" }}
          />

          <Subtitle3
            style={{
              position: "absolute",
              width: "242px",
              marginTop: "250px",
            }}
          >
            The best Kyoto restaurant to try Japanese food
          </Subtitle3>

          <Body4
            style={{
              position: "absolute",
              width: "266px",
              marginTop: "323px",
            }}
          >
            From tofu to teahouses, here’s our guide to Kyoto’s best restaurants
            to visit...
          </Body4>
          <Lead5
            style={{
              position: "absolute",
              width: "266px",
              marginTop: "424px",
              color: `${Colors.Brand.OrangeMain}`,
            }}
          >
            Read More
          </Lead5>
        </TImage>
        <TImage>
          <img
            src={TrendingImage3}
            alt="Trending"
            style={{ position: "absolute" }}
          />

          <Subtitle3
            style={{
              position: "absolute",
              width: "252px",
              marginTop: "250px",
            }}
          >
            Skip Chichen Itza and head to this remote Yucatan
          </Subtitle3>

          <Body4
            style={{
              position: "absolute",
              width: "266px",
              marginTop: "323px",
            }}
          >
            It’s remote and challenging to get, but braving the jungle and
            exploring these ruins without the... happines...
          </Body4>
          <Lead5
            style={{
              position: "absolute",
              width: "266px",
              marginTop: "424px",
              color: `${Colors.Brand.OrangeMain}`,
            }}
          >
            Read More
          </Lead5>
        </TImage>
        <TImage>
          <img
            src={TrendingImage4}
            alt="Trending"
            style={{ position: "absolute" }}
          />

          <Subtitle3
            style={{
              position: "absolute",
              width: "251px",
              marginTop: "250px",
            }}
          >
            Surf’s up at these beginner spots around the world
          </Subtitle3>

          <Body4
            style={{
              position: "absolute",
              width: "266px",
              marginTop: "323px",
            }}
          >
            If learning to surf has in on your to- do list for a while, the good
            news is: it’s never too late...
          </Body4>
          <Lead5
            style={{
              position: "absolute",
              width: "266px",
              marginTop: "424px",
              color: `${Colors.Brand.OrangeMain}`,
            }}
          >
            Read More
          </Lead5>
        </TImage>
      </Bottom>
    </TrendingEl>
  );
};

export default Trending;
