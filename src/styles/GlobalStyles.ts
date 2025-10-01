import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* Navigation-Clean.css (selected rules) */
  .navigation-clean {
    background: rgba(1, 1, 1, 0);
    padding-top: .75rem;
    padding-bottom: .75rem;
    color: #333;
    border-radius: 0;
    box-shadow: none;
    border: none;
    margin-bottom: 0;
  }

  @media (min-width:768px) {
    .navigation-clean {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  }

  .navigation-clean .navbar-brand {
    font-weight: bold;
    color: inherit;
  }

  .nav-link {
    text-align: right;
    font-size: 18px;
    font-weight: 600;
  }

  /* styles.css (selected rules) */
  html { scroll-behavior: smooth; }
  body { width: 100%; }

  .mainDiv {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0% 20%;
  }

  .description-text {
    margin-top: 10px;
    background-color: rgba(0,0,0,0);
    color: black;
    font-family: Raleway, sans-serif;
    font-size: 1.5rem;
  }

  .particles-div {
    position: absolute;
    height: 100vh;
    top: 0; bottom: 0; left: 0; right: 0;
  }

  .mouse-scroll-container { width: 100%; height: 150px; text-align: center; margin-top: 130px; }
  .mouse-scroll { margin-left: auto; margin-right: auto; width: 40px; height: 70px; border: solid 2px #fff; border-radius: 20px; box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.3); padding-top: 14px; }

  #avatarDiv { margin: 0 auto; width: 300px; padding-top: 100px; }

  @media (max-width: 1200px) {
    .mainDiv { display: grid; grid-template-columns: 1fr; margin: 0% 0%; }
    .about-desc { margin: 30% auto; }
  }

  @media (max-width: 600px) {
    #avatar { width: 200px; }
    #avatarDiv { width: 200px; padding-top: 20px; }
    h1 { font-size: 30px; }
    h2 { font-size: 26px; }
    h3 { font-size: 22px; }
  }
`;

export default GlobalStyles;
