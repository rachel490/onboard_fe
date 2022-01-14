import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
    ${normalize}

    * {
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
        font-size: 14px;
    }

    a {
        text-decoration: none;
        color: black;
        cursor: pointer;
    }

    a:link {
        color: black;
    }

    button {
        border: none;
        background-color: inherit;
        cursor: pointer;
    }

    ul,li {
        list-style: none;
        padding-left: 0;
    }

`;

export default GlobalStyle;
