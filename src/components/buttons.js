import {styled} from 'styled-components';
import {blue} from "./colors"

const Button = styled.button`
background-color:${blue[200]};
border: none;
color: white;
padding: 12px 24px;
font-size: 1 rem;
font-family:"Roboto Mono" monospace;
transition: background-color 0.5s linear, color 0.5s linear;
`;