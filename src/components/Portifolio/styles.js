import styled, { keyframes } from "styled-components";

/****************************************

    Author: Lucas Mitori Oliveira Okumura
    contact: lucas.mitori@hotmail.com
    cel: +55 (11) 9-7749-2121
    Name: Portifólio Design
    Description: Using styled-components to improve main Page.
    ~ *   Portifolio Styles   * ~

            Version: 1.0

****************************************/

/*-----------------------
~*  Keyframes *~
-------------------------*/

const SwingTop = keyframes`
0% {
    -webkit-transform: translateZ(-800px) rotateY(90deg);
            transform: translateZ(-800px) rotateY(90deg);
    opacity: 0;
  }
  54% {
    -webkit-transform: translateZ(-160px) rotateY(87deg);
            transform: translateZ(-160px) rotateY(87deg);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateZ(0) rotateY(0);
            transform: translateZ(0) rotateY(0);
  }
`;

const RollBlurLeft = keyframes`
0% {
    -webkit-transform: translateX(-1000px) rotate(-720deg);
            transform: translateX(-1000px) rotate(-720deg);
    -webkit-filter: blur(50px);
            filter: blur(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) rotate(0deg);
            transform: translateX(0) rotate(0deg);
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
`;

export const PortifolioMain = styled.main`
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: flex-start;
  background-color: var(--color-grey-4);
  border-bottom: 5px solid black;
  padding: 0vh 5vw;
  & > h2 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-28);
    color: var(--color-grey-0);
  }

  & > p {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-16);
    color: var(--color-white-mode);
    line-height: var(--font-line-height-24);
    font-weight: var(--font-weight-300);
  }

  & > p > b {
    color: var(--color-secondary);
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 768px) {
    margin-left: 300px;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;

/*-----------------------
~* First Section Design *~
-------------------------*/

export const ProjectSection = styled.section`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;

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
  @media screen and (min-width: 1400px) {
    flex-flow: row wrap;
    justify-content: space-evenly;
  }

  @media screen and (max-width: 1920px) {
  }
`;

export const ProjectCards = styled.div`
  width: 100%;
  height: 30vh;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-start;
  border: 2px solid var(--color-primary);
  margin-bottom: 20px;

  animation-name: ${(props) => {
    if (props.animationValueProject01 === true) {
      return SwingTop;
    }
  }};
  animation-duration: 1s;

  & > img {
    width: 100%;
    height: 100%;
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
    width: 80%;
  }
  @media screen and (min-width: 1400px) {
    width: 20vw;
    height: 20vh;
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const MenuCard = styled.a`
  text-decoration: none;
  display: none;
  position: absolute;
  top: 80%;
  width: 100%;
  height: 20%;
  background-color: var(--color-navigation);

  & > h2 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-20);
    color: var(--color-primary);
    padding-right: 10px;
  }

  ${ProjectCards}:hover & {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;
