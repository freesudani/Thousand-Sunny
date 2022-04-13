import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { Colors } from "./theme/Theme";

const GlobalStyle = createGlobalStyle`
  body{
    background-color:${Colors.Brand.BGWhite};
    min-height: 100vh;
    max-width: 1600px;
  }
*{
  padding: 0;
   margin: 0;
   box-sizing: border-box;
   
   font-family: 'Inter', sans-serif;
   font-family: 'Mulish', sans-serif;
   font-family: 'Playfair Display', serif;
 
}
a{
  text-decoration: none;
}
a:visited{
  color: #070710;
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
