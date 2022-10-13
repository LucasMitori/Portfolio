import styled from "styled-components";
import personalImage from "../../assets/personal/image03.jpeg";

/****************************************

    Author: Lucas Mitori Oliveira Okumura
    contact: lucas.mitori@hotmail.com
    cel: +55 (11) 9-7749-2121
    Name: Portifólio Design
    Description: Using styled-components to improve main Page.
    ~ *   The Page Styles   * ~

            Version: 1.0

****************************************/

export const HomeSection = styled.main`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-4);
  border-bottom: 5px solid black;
  background-image: url(${personalImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: -1;

  & > h1 {
    font-size: var(--font-subtitle-32);
    color: white;
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
    & > h1 {
      padding-left: 300px;
    }
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const TypingEffect = styled.div`
  height: 100px;
  width: 90%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: var(--font-subtitle-28);
    color: var(--color-grey-0);
  }

  b {
    text-decoration: underline;
    text-decoration-color: var(--color-feedback-info);
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
    padding-left: 300px;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;

/*------------------------- Skip line -------------------------*/

export const NavBarMenuBtn = styled.button`
  width: 70px;
  height: 50px;
  position: fixed;
  top: 10%;
  left: 80%;
  background-color: var(--color-grey-2);
  border-radius: var(--radius-8);
  z-index: 1001;

  & > svg {
    transform: scale(1.5);
  }

  @media screen and (min-width: 480px) {
    display: block;
  }
  @media screen and (min-width: 768px) {
    & {
      display: none;
    }
  }
`;
