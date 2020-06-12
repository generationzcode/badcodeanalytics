import {styled} from 'styled-components';
import {neutral,blue,green} from './colors';

export const TextInput = styled.input`
background-color:${neutral[100]};
font-family:"Roboto Mono" monospace;
color:${neutral[300]};
border:none;
transition: background-color 0.5s
&:hover{
    background-color:${neutral[200]}
}
&:focus{
    border: 0.5px ${blue[200]} solid;
}
`

export const SubmitInput = styled.input`
background-color:${green[200]};
font-family:"Roboto Mono" monospace;
color:${neutral[100]};
border:none;
transition: background-color 0.5s;
&:hover{
    background-color:${green[300]};
}
&:active{
    background-color:${green[100]};
}
`
