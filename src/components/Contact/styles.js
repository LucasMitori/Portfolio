import styled, { keyframes } from "styled-components";

/****************************************

    Author: Lucas Mitori Oliveira Okumura
    contact: lucas.mitori@hotmail.com
    cel: +55 (11) 9-7749-2121
    Name: Portifólio Design
    Description: Using styled-components to improve main Page.
    ~ *   Contact Styles   * ~

            Version: 1.0

****************************************/

/*-----------------------
~*  Keyframes *~
-------------------------*/

const BounceIn = keyframes`
0% {
    -webkit-transform: translateY(-500px);
            transform: translateY(-500px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateY(-65px);
            transform: translateY(-65px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateY(-28px);
            transform: translateY(-28px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
`;

const MoveLeft = keyframes`
0% {
  transform: translateX(-10rem);

}

100% {
  transform: translateX(0);
}
`;

const MoveRight = keyframes`
0% {
  transform: translateX(10rem);

}

100% {
  transform: translateX(0);
}
`;

export const ContactMain = styled.main`
  height: 140vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: flex-start;
  background-color: var(--color-grey-4);
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
  @media screen and (min-width: 1400px) {
    height: 100vh;
  }
  @media screen and (max-width: 1920px) {
  }
`;

/*-----------------------
~* First Section Design *~
-------------------------*/

export const ContactSection = styled.section`
  width: 100%;
  height: 110vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;

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
    flex-flow: row nowrap;
    height: 80vh;
  }

  @media screen and (max-width: 1920px) {
  }
`;

export const ArticleInformation = styled.article`
  width: 100%;
  height: 20vh;
  display: flex;
  flex-flow: row nowrap;
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
    flex-flow: column nowrap;
    width: 50%;
    height: 80vh;
    align-items: flex-start;
  }

  @media screen and (max-width: 1920px) {
  }
`;

export const ArticleCard = styled.div`
  min-width: 70vw;
  background-color: var(--color-navigation);
  height: 15vh;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-right: 20px;
  padding: 10px;
  border: 1px solid var(--color-primary);
  border-radius: var(--radius-8);

  animation-name: ${(props) => {
    if (props.animationValueContact === true) {
      return MoveRight;
    }
  }};

  animation-duration: 2s;

  & > svg {
    margin-left: 20px;
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
    min-width: 40vw;
  }
  @media screen and (min-width: 1024px) {
    min-width: 25vw;
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1400px) {
    width: 25vw;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 1920px) {
  }
`;

export const ArticleCardText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-left: 20px;

  & > h2 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-24);
    color: var(--color-grey-0);
  }
  & > h4 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-16);
    color: var(--color-grey-0);
  }
`;

export const FormSpace = styled.aside`
  width: 100%;
  height: 80vh;
  display: flex;
  background-color: var(--blur-effect-01);
  border: 2px solid var(--color-secondary);
  border-radius: var(--radius-4);
  margin-top: 20px;

  animation-name: ${(props) => {
    if (props.animationValueContact === true) {
      return BounceIn;
    }
  }};

  animation-duration: 2s;

  & > form {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: flex-start;
  }

  & > form > label {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-16);
    color: var(--color-primary);
  }

  & > form > input {
    width: 100%;
    height: 40px;
    border: 1px solid var(--color-grey-5);
    background-color: var(--color-grey-0);
    border-radius: var(--radius-4);
    padding-left: 20px;
  }

  & > form > input:focus {
    outline: none;
    border: 2px solid var(--color-shadow-box-03);
  }

  & > form > textarea {
    width: 100%;
    height: 40%;
    padding: 20px;
    resize: none;
  }

  & > form > textarea:focus {
    outline: none;
    border: 2px solid var(--color-shadow-box-03);
  }

  & > form > button {
    width: 100%;
    height: 40px;
    border: 1px solid var(--color-primary);
    background-color: var(--color-quinternary);
    color: var(--color-grey-0);
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-16);
    text-transform: uppercase;
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
  @media screen and (min-width: 1400px) {
    width: 50%;
    height: 80vh;
    margin: 0;
  }

  @media screen and (max-width: 1920px) {
  }
`;
