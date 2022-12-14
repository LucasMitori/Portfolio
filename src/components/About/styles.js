import styled, { keyframes } from "styled-components";
import PersonalImage from "../../assets/personal/image04.jpeg";
import { motion } from "framer-motion";

/****************************************

    Author: Lucas Mitori Oliveira Okumura
    contact: lucas.mitori@hotmail.com
    cel: +55 (11) 9-7749-2121
    Name: Portifólio Design
    Description: Using styled-components to improve main Page.
    ~ *   About Styles   * ~

            Version: 1.0

****************************************/

/*-----------------------
~*  Keyframes *~
-------------------------*/

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

export const AboutMain = styled.main`
  height: 220vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: flex-start;
  background-color: var(--color-grey-4);
  border-bottom: 5px solid black;
  padding: 0vh 5vw;
  box-shadow: 0px 0px 15px 10px var(--color-primary);

  @media screen and (min-width: 360px) {
    height: 250vh;
  }
  @media screen and (min-width: 480px) {
    height: 170vh;
  }
  @media screen and (min-width: 481px) {
    height: 200vh;
  }
  @media screen and (min-width: 600px) {
    height: 200vh;
  }
  @media screen and (min-width: 768px) {
    margin-left: 300px;
    height: 220vh;
  }
  @media screen and (min-width: 1024px) {
    margin-left: 300px;
    height: 180vh;
  }
  @media screen and (min-width: 1320px) {
    margin-left: 300px;
    height: 180vh;
  }
  @media screen and (min-width: 1500px) {
    margin-left: 300px;
    height: 180vh;
  }
`;

/*-----------------------
~* First Section Design *~
-------------------------*/

export const FirstSection = styled.section`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 30px;
  animation-name: ${(props) => {
    if (props.animationValue === true) {
      return MoveLeft;
    }
  }};
  animation-duration: 2s;

  & > h2 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-32);
    color: var(--color-grey-0);
    margin-bottom: 20px;
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

  @media screen and (min-width: 360px) {
    margin: 0;
    height: 95vh;
  }
  @media screen and (min-width: 480px) {
    margin-top: 30px;
  }
  @media screen and (min-width: 600px) {
    margin-top: 30px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 30px;
  }
  @media screen and (min-width: 1024px) {
    height: 100vh;
    margin-top: 30px;
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const PersonalInformation = styled(motion.div)`
  width: 100%;
  height: 65%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 5vh;
  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
    margin: 20px 0px;
    height: 70%;
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const MainPhoto = styled.div`
  display: none;
  min-width: 18vw;
  height: 100%;
  background: url(${PersonalImage});
  background-position: center;
  background-size: cover;
  border: 3px solid var(--color-primary);

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
    display: block;
    margin-right: 20px;
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const MainInformation = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 30px;

  & > h2 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-28);
    color: var(--color-grey-0);
    margin-bottom: 2vh;
    width: 100%;
  }

  & > p {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-16);
    color: var(--color-white-mode);
    line-height: var(--font-line-height-24);
    font-weight: var(--font-weight-300);
    margin-bottom: 3vh;
  }

  & > ul {
    width: 100%;
    height: 60%;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    align-items: flex-start;
    overflow: auto;
  }

  & > ul > li {
    height: 25%;
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-16);
    color: var(--color-white-mode);
    font-weight: var(--font-weight-300);
  }

  & > ul > li > svg {
    margin-right: 10px;
    align-self: center;
  }

  & > ul > li > span {
    color: var(--color-tertiary);
    align-self: center;
    margin-right: 10px;
  }

  @media screen and (min-width: 360px) {
    & > ul li {
      margin-right: 15px;
    }
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

/*-----------------------
~* Second Section Design *~
-------------------------*/

export const SecondSection = styled.section`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-top: 30px;
  animation-name: ${(props) => {
    if (props.animationValue2 === true) {
      return MoveRight;
    }
  }};
  animation-duration: 3s;

  & > h2 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-32);
    color: var(--color-grey-0);
    margin: 0 0 2vh 0;
  }

  & > p {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-16);
    color: var(--color-white-mode);
    line-height: var(--font-line-height-24);
    font-weight: var(--font-weight-300);
    margin-bottom: 3vh;
  }
  @media screen and (min-width: 360px) {
    margin-top: 10px;
  }
  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
  @media screen and (min-width: 1024px) {
    & > h2 {
      margin: 0;
    }
  }
  @media screen and (min-width: 1200px) {
    margin: 0;
  }
  @media screen and (min-width: 1920px) {
  }
`;

export const FactCardSpace = styled.section`
  width: 100%;
  height: 40%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;
  background-color: var(--blur-effect-01);
  border: 1px solid var(--color-primary);
  border-radius: var(--radius-8);

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    & > h2 {
      margin: 0;
    }
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
    justify-content: space-evenly;
  }
`;

export const FactCard = styled.section`
  min-width: 200px;
  height: 80%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const FactCardInfo = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;

  & > h2 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-32);
    font-weight: var(--font-weight-700);
    color: var(--color-primary);
    margin-bottom: 10px;
  }

  & > h3 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-18);
    font-weight: var(--font-weight-400);
    color: var(--color-grey-0);
    margin-bottom: 7px;
  }

  & > p {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-14);
    font-weight: var(--font-weight-300);
    color: var(--color-grey-0);
  }
`;

/*-----------------------
~* Third Section Design *~
-------------------------*/

export const ThirdSection = styled.section`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-top: 10px;
  animation-name: ${(props) => {
    if (props.animationValue3 === true) {
      return MoveLeft;
    }
  }};
  animation-duration: 2s;

  & > h2 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-32);
    color: var(--color-grey-0);
    margin-bottom: 1vh;
  }

  & > p {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-16);
    color: var(--color-white-mode);
    line-height: var(--font-line-height-24);
    font-weight: var(--font-weight-300);
    margin-bottom: 3vh;
  }

  @media screen and (min-width: 360px) {
    height: 80vh;
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

export const SkillBarSpace = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: flex-start;

  @media screen and (min-width: 360px) {
    height: 60%;
    overflow: auto;
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

export const SkillCard = styled.div`
  width: 48%;
  height: 20%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: flex-start;

  & > h2 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-16);
    color: var(--color-grey-0);
  }

  & > div {
    width: 100%;
    height: 20%;
  }

  @media screen and (min-width: 360px) {
    width: 46%;
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
