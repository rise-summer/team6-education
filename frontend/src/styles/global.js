import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.textColor};
    height: 100vh;
    margin: 0;
    padding: 0;
    font-weight: 500;
    font-family: 'Source Sans Pro', sans-serif;
    transition: all 0.25s linear;

  }
`