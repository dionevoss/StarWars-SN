import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    @import url('http://fonts.cdnfonts.com/css/open-sans')
    margin: 0;
    padding: 0;
    background: #fffafa;
    font-family: Open Sans, sans-serif;
    border: none;
  }
`;

export default GlobalStyle;