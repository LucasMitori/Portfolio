import styled from "styled-components";

/****************************************

    Author: Lucas Mitori Oliveira Okumura
    contact: lucas.mitori@hotmail.com
    cel: +55 (11) 9-7749-2121
    Name: Portifólio Design
    Description: Using styled-components to improve main Page.
    ~ *   Header Styles   * ~

            Version: 1.0

****************************************/

export const Header = styled.header`
  width: 300px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--color-navigation);
  z-index: 1001;
  transform: ${({ show }) => (show ? "translateX(0)" : "translateX(-100%)")};
  transition: 0.7s ease-in-out;
  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 768px) {
    & {
      transform: none;
    }
  }
  @media screen and (min-width: 1024px) {
    & {
    }
  }
  @media screen and (min-width: 1200px) {
    & {
    }
    @media screen and (max-width: 1920px) {
      & {
      }
    }
  }
`;

/*------------------------- Skip line -------------------------*/

export const InformationSpace = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 30px;

  & > h2 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-32);
    font-weight: var(--font-weight-700);
    color: var(--color-white-mode);
    margin-top: 20px;
  }
  & > h3 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-20);
    color: var(--color-grey-0);
    font-weight: var(--font-weight-400);
    margin-top: 20px;
  }

  & > img {
    width: 30%;
    height: 10%;
    transform: scale(0.7);
  }
`;

export const ImageDiv = styled.div`
  width: 150px;
  height: 150px;

  & > img {
    width: 100%;
    height: 100%;
    border-radius: var(--radius-half);
    border: 10px solid var(--color-grey-4);
  }

  @media screen and (min-width: 370px) {
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
  }
`;

export const SocialMedias = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  & > a {
    width: 60%;
    height: 60%;
  }

  & > a:hover {
    opacity: 0.5;
  }

  & > a > img {
    width: 100%;
    height: 100%;
  }
`;

export const NavBar = styled.nav`
  width: 100%;
  height: 60%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const NavBarItems = styled.div`
  width: 90%;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  padding-left: 20px;
  align-items: center;

  & > a {
    padding-left: 20px;
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-20);
    color: var(--color-grey-0);
    text-decoration: none;
  }
  & > a:hover {
    color: var(--color-secondary);
  }
`;

export const SpaceBtn = styled.div`
  width: 90%;
  height: 10%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 20px;
`;

export const BrazilBtn = styled.button`
  width: 35%;
  height: 30px;
  border-radius: var(--radius-4);
  background: radial-gradient(
    circle,
    rgba(0, 39, 118, 1) 23%,
    rgba(254, 223, 0, 1) 53%,
    rgba(115, 186, 32, 1) 78%
  );
  border: 2px solid
    ${(currentLanguage) =>
      currentLanguage.currentLanguage === "pt"
        ? "var(--button-color-red)"
        : "transparent"};
`;

export const USABtn = styled.button`
  width: 35%;
  height: 30px;
  border-radius: var(--radius-4);
  background: radial-gradient(
    circle,
    rgba(179, 25, 66, 1) 31%,
    rgba(255, 255, 255, 1) 56%,
    rgba(10, 49, 97, 1) 77%
  );
  border: 2px solid
    ${(currentLanguage) =>
      currentLanguage.currentLanguage === "en"
        ? "var(--button-color-red)"
        : "transparent"};
`;
