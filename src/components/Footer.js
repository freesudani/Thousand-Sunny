import React from "react";
import styled from "styled-components";
import { Colors } from "../theme/Theme";
import Logo from "../images/logo.svg";
import Body5 from "../theme/Body5.styled";
import Subtitle4 from "../theme/Subtitle4.styled";
import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialYoutube,
  TiSocialLinkedin,
  TiSocialInstagram,
} from "react-icons/ti";

const FootergEl = styled.div`
  position: relative;
  padding: 78px 40px 32px 50px;
  height: 482px;
  width: 100vw;
  margin-top: 196px;
  background-color: ${() => Colors.Brand.BGFooter};
`;

const Top = styled.div`
  display: grid;
  grid-template-columns: 381px 165px 165px 165px;
  column-gap: 70px;
  height: 330px;
`;

const Moto = styled.div`
  width: 391px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const OrderedList = styled.ul``;

const ListItem = styled.li`
  list-style: none;
  margin-bottom: 8px;
`;

const Divider = styled.div`
  width: 1219px;
  height: 0.6px;
  background: ${Colors.Brand.BorderGrey};
`;

const SocialMedia = styled.div`
  position: relative;
  height: 85.4px;
  width: 100vw;
`;

const Icons = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-around;
  width: 248.1px;
`;

const Icon = styled.div`
  font-size: 30px;
`;

const Footer = () => {
  return (
    <FootergEl>
      <Top>
        <Moto>
          <img src={Logo} alt="logo" style={{ marginBottom: "20px" }} />
          <Body5 style={{ marginBottom: "55px" }}>
            Plan and book your perfect trip with <br /> expert advice, travel
            tips destination
            <br /> information from us
          </Body5>
          <Body5>©2020 Thousand Sunny. All rights reserved</Body5>
        </Moto>
        <Column>
          <Subtitle4>Destinations</Subtitle4>
          <OrderedList>
            <ListItem>
              <Body5>Africa</Body5>
            </ListItem>
            <ListItem>
              <Body5>Antarcita</Body5>
            </ListItem>
            <ListItem>
              <Body5>Asia</Body5>
            </ListItem>
            <ListItem>
              <Body5>Europe</Body5>
            </ListItem>
            <ListItem>
              <Body5>America</Body5>
            </ListItem>
          </OrderedList>
        </Column>
        <Column>
          <Subtitle4>Shop</Subtitle4>
          <OrderedList>
            <ListItem>
              <Body5>Destination Guides</Body5>
            </ListItem>
            <ListItem>
              <Body5>Pictorial & Gifts</Body5>
            </ListItem>
            <ListItem>
              <Body5>Special Offers</Body5>
            </ListItem>
            <ListItem>
              <Body5>Delivery Times</Body5>
            </ListItem>
            <ListItem>
              <Body5>FAQs</Body5>
            </ListItem>
          </OrderedList>
        </Column>
        <Column>
          <Subtitle4>Interests</Subtitle4>
          <OrderedList>
            <ListItem>
              <Body5>Adventure Travel</Body5>
            </ListItem>
            <ListItem>
              <Body5>Art And Culture</Body5>
            </ListItem>
            <ListItem>
              <Body5>Wildlife And Nature</Body5>
            </ListItem>
            <ListItem>
              <Body5>Family Holidays</Body5>
            </ListItem>
            <ListItem>
              <Body5>Food And Drink</Body5>
            </ListItem>
          </OrderedList>
        </Column>
      </Top>
      <Divider />
      <SocialMedia>
        <Icons>
          <Icon>
            <TiSocialTwitter />
          </Icon>
          <Icon>
            <TiSocialFacebook />
          </Icon>
          <Icon>
            <TiSocialYoutube />
          </Icon>
          <Icon>
            <TiSocialLinkedin />
          </Icon>
          <Icon>
            <TiSocialInstagram />
          </Icon>
        </Icons>
      </SocialMedia>
    </FootergEl>
  );
};

export default Footer;
