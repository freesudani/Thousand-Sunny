import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { Colors } from "./theme/Theme";

const GlobalStyle = createGlobalStyle`
 
  body{
    background-color:${Colors.Brand.BGWhite};
    width: 1600px;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    font-family: 'Mulish', sans-serif;
    font-family: 'Playfair Display', serif;

    @media (max-width: 1000px) {
    width: 1000px;
  }
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <>
      <GlobalStyle />
      <App />
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
