import { createGlobalStyle } from "styled-components";

export const Common = createGlobalStyle`
    html {
        font-family: 'Gilroy', 'Calibri', sans-serif;
        font-size: 16px;
    }

    body {
        overflow-x: hidden;
        background-color: #202020;
        color: #1c1526;
        line-height: 1.15;
    }
`;
