import {createGlobalStyle} from "styled-components";
import {neutral,blue} from "./colors"
export const GlobalStyle = createGlobalStyle`
html {
    font-size: 16px;
    box-sizing: border-box;
}

*, *:before, *:after {
    box-sizing: inherit;
}


body {
    margin: 0;
    font-family: "Roboto Mono" monospace;
    padding:30px;
    background-color:${neutral[100]}
}

button{
    margin:5px
}
button:hover{
    background-color:${blue[100]};
}
button:focus{
    background-color:${blue[300]};
}
button:active{
    background-color:${blue[300]};
}

main{
    width: 90%;
    margin: 0 auto;
}
`;