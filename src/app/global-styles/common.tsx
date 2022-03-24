import { createGlobalStyle } from "styled-components";

export const Common = createGlobalStyle`
    html {
        font-family: 'Noto Sans', sans-serif;
        font-weight: 500;
        font-style: normal;
        letter-spacing: -0.035em;
        font-size: 16px;
    }

    body {
        overflow-x: hidden;
        color: #1c1526;
        line-height: 1.15;
    }
`;
