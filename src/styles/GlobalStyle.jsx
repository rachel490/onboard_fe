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
        color: inherit;
        cursor: pointer;
    }


    button {
        margin: 0;
        padding: 0;
        border: 0;
        background: none;
        cursor: pointer;
    }

    ul,li {
        list-style: none;
        padding-left: 0;
    }

`;

export default GlobalStyle;
