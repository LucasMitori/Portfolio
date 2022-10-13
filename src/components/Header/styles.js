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
  height: 80vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  padding-top: 30px;

  & > h2 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-32);
    font-weight: var(--font-weight-700);
    color: var(--color-white-mode);
    margin-top: 20px;
  }
`;

export const ImageDiv = styled.div`
  width: 170px;
  height: 170px;

  & > img {
    width: 100%;
    height: 100%;
    border-radius: var(--radius-half);
    border: 10px solid var(--color-grey-4);
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
