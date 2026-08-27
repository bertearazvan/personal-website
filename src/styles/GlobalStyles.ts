import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* Minimal global resets kept temporarily */
  html { 
    scroll-behavior: smooth;
    scroll-padding-top: 80px; /* Account for sticky header */
  }
  body { width: 100%; margin: 0; }
  
  /* Smoother scroll animation with custom timing */
  @media (prefers-reduced-motion: no-preference) {
    * {
      scroll-behavior: smooth;
    }
  }
`;

export default GlobalStyles;
