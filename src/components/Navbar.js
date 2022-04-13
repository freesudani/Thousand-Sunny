import React from "react";
import styled from "styled-components";
import Logo from "../images/logo.svg";
import { Colors, TextStyles } from "../theme/Theme";
import Button from "../theme/Button.styled";

const pages = ["Home", "Destinations", "About", "Partner"];

const NavbarEl = styled.nav`
  padding: 0 84px 0 111px;
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RightPart = styled.div`
  display: flex;
  max-width: 663px;
`;

const Navbar = () => {
  return (
    <NavbarEl>
      <LeftPart>
        <img src={Logo} style={{ width: "41px", paddingTop: "10px" }} />
      </LeftPart>
      <RightPart>
        {pages.map((page, index) => (
          <Button
            var="text"
            key={index}
            style={{ marginRight: "35px", verticalAlign: "center" }}
          >
            {page}
          </Button>
        ))}
        <Button
          var="outline"
          size="sm"
          style={{
            marginRight: "18px",
          }}
        >
          Login
        </Button>
        <Button var="contained" size="sm">
          Register
        </Button>
      </RightPart>
    </NavbarEl>
  );
};

export default Navbar;
