import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Arial", sans-serif;
    background-color: #f8f9fa;
    color: #333;
    line-height: 1.7;
  }

  h1 {
    font-size: 26px;
    font-weight: bold;
  }

  h2 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  p {
    font-size: 14px;
    color: #555;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  ul li {
    font-size: 14px;
    margin-bottom: 8px;
  }

  .container {
    max-width: 1000px;
    margin: auto;
    display: flex;
    gap: 20px;
  }
`;

export default GlobalStyle;
