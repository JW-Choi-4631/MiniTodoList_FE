import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing : border-box;
        padding : 0;
        margin : 0;
        font-family: 'Gaegu';
    }

    /* div {
        border : 1px black solid;
    } */

    body {
        background-image:url('https://cms.boardmix.com/images/kr/articles/2022/skills/todolist02.png');
        background-size : 130%;
        background-repeat : repeat;
    }

    .App {
        max-width : 1200px;
        max-height : 800px;
        margin : 0 auto;
    }
`;

export default GlobalStyle;