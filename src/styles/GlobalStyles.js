import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";


const GlobalStyles = createGlobalStyle`
    ${reset}
    body {
        font-family: 'Roboto', sans-serif;
        background-color: #292929;
        color: #fff;
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyles;