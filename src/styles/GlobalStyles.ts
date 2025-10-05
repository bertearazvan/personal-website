import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* Minimal global resets kept temporarily */
  html { scroll-behavior: smooth; }
  body { width: 100%; margin: 0; }
`;

export default GlobalStyles;
