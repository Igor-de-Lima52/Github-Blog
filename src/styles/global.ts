import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :root{
    font-size: 62.5%;
  }

  body, input, button, textarea{
    font-size: 1.6rem;
    line-height: 160%;
    font-family: "Nunito", sans-serif;
  }
  
  body{
    background: ${props => props.theme["base-background"]};
    
    &::-webkit-scrollbar{
      width: 1rem;
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb{
      width: 1rem;
      background-color: ${props => props.theme["base-profile"]};
      border-radius: 1rem;
    }
  
  }
`;