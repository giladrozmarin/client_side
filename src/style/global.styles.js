import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    body {
    
    }
    html {
      font-size: 10px;
    }
    body {
     
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #282c34;
        color: white;
        min-height: 100vh;
    }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      /*border:aqua dashed 3px; */
      /*color:papayawhip*/
    }
    li {
      list-style-type: none;
    }
`;

export default GlobalStyles;
