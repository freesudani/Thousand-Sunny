import React from "react";
import styled from "styled-components";
import Button from "../theme/Button.styled";
import Logo from "../images/logo.svg";

const pages = ["Home", "Destinations", "About", "Partner"];

const NavbarEl = styled.nav`
  padding: 0 84px 0 111px;
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1000px) {
    padding: 0 5px 0 70px;
  }
`;

const LeftPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RightPart = styled.div`
  display: flex;
  max-width: 663px;

  @media (max-width: 1000px) {
    max-width: 500px;
  }
`;

const Navbar = () => {
  return (
    <NavbarEl>
      <LeftPart>
        <img
          src={Logo}
          alt="logo"
          style={{ width: "41px", paddingTop: "10px" }}
        />
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
