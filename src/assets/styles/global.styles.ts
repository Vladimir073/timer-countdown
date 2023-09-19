import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }

  .active {
    color: red;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    transition: .5s ease;
  }

  li::hover{
    color: red;
  }


  *,*:before, *:after{
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  :focus, :active{outline: none;}
  a:focus, a:active{outline: none;}
  
  nav, footer, header, aside{display: block;}
  
  input, button, textarea{font-family: inherit;
  } 

  button {
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }
  
  input::-ms-clear{display: none;}
  a, a:visited{text-decoration: none;}
  a:hover{text-decoration: none;}
  ul li{list-style: none;} 
  img{vertical-align: top;}
  
  
  h1,h2,h3,h4,h5,h6{font-size: inherit; font-weight: 400;}

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
`
