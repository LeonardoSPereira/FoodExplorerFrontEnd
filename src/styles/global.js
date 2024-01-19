import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.colors.dark_400};
    color: ${({ theme }) => theme.colors.light_100};
  }
  
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
  }
  
  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.8);
  }

  &::-webkit-scrollbar {
    width: 0.8rem;
    height: 4rem;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.dark_1000};
    border-radius: 0.8rem;
  }

  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.colors.pink} transparent;

`
