import { createGlobalStyle } from 'styled-components';
import 'font-awesome/css/font-awesome.css';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0px;
    padding:0px;
    box-sizing: border-box;
    outline:0;

  }
  body{
    background: #f5f5f5; /*#ebebe3; /* #86d8dc; /*#c8f0f0; /* #333A56;/* #70a3c4; */
    text-rendering: optimizeLegibility !important;
    font-family: sans-serif;
  }
`;

export default GlobalStyles;
