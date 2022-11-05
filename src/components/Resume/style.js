import styled from "styled-components";

/****************************************

    Author: Lucas Mitori Oliveira Okumura
    contact: lucas.mitori@hotmail.com
    cel: +55 (11) 9-7749-2121
    Name: Portifólio Design
    Description: Using styled-components to improve main Page.
    ~ *   Resume Styles   * ~

            Version: 1.0

****************************************/

export const ResumeMain = styled.main`
  height: 300vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: flex-start;
  background-color: var(--color-grey-4);
  border-bottom: 5px solid black;
  padding: 0vh 5vw;

  & > h2 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-32);
    font-weight: var(--font-weight-700);
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

  @media screen and (min-width: 360px) {
    height: 240vh;

    & > h2 {
      margin-top: 30px;
    }

    & > p {
      margin-top: 20px;
    }
  }
  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
    height: 200vh;
  }
  @media screen and (min-width: 768px) {
    margin-left: 300px;
    height: 200vh;
  }
  @media screen and (min-width: 912px) {
    margin-left: 300px;
    height: 160vh;
  }
  @media screen and (min-width: 1024px) {
    height: 160vh;
  }
  @media screen and (min-width: 1200px) {
    height: 160;
  }
  @media screen and (min-width: 1400px) {
    height: 100vh;
  }

  @media screen and (min-width: 1920px) {
    height: 110vh;
    padding: 4vh 5vw 0 5vw;

    & > h2 {
      padding-bottom: 20px;
    }
  }
`;

/*-----------------------
~* Section Design *~
-------------------------*/

export const ResumeSection = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;
  padding-top: 30px;

  @media screen and (min-width: 360px) {
    justify-content: space-evenly;
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
    flex-flow: row nowrap;
    justify-content: space-evenly;
    height: 120vh;
  }

  @media screen and (min-width: 1920px) {
    padding-top: 0;
  }
`;

export const FirstArticle = styled.article`
  height: 125vh;
  width: 90%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
  margin-bottom: 30px;
  background-color: var(--color-grey-3);
  border-radius: var(--radius-8);
  box-shadow: 0px 0px 15px 5px var(--color-primary);

  & > h2 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-32);
    color: var(--color-grey-0);
    margin-bottom: 20px;
  }

  @media screen and (min-width: 360px) {
    overflow: auto;
    height: 42%;
  }
  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
    height: 80vh;
  }
  @media screen and (min-width: 768px) {
    height: 125vh;
  }
  @media screen and (min-width: 1024px) {
    height: 100vh;
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1400px) {
    width: 43%;
    height: 80vh;
  }
  @media screen and (min-width: 1920px) {
    height: 80vh;
  }
`;

export const ArticleInformation = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;

  & > h3 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-20);
    color: var(--color-primary);
    margin-bottom: 20px;
    font-weight: var(--font-weight-500);
  }

  & > h4 {
    width: 120px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-16);
    color: var(--color-grey-0);
    margin: 0px 0px 20px 20px;
    font-weight: var(--font-weight-300);
    background-color: var(--blur-effect-01);
    border-radius: var(--radius-4);
  }

  & > h5 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-18);
    color: var(--color-grey-0);
    margin-bottom: 20px;
    font-weight: var(--font-weight-500);
  }
  & > p {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-16);
    font-weight: var(--font-weight-300);
    color: var(--color-grey-0);
    line-height: var(--font-line-height-20);
    margin-bottom: 30px;
  }

  & > p > i {
    font-style: italic;
  }

  & > a {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-14);
    font-weight: var(--font-weight-300);
    color: var(--color-tertiary);
    line-height: var(--font-line-height-20);
    text-decoration: none;
  }

  & > ol {
    list-style: disc;
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;
  }

  & > ol > li {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-16);
    font-weight: var(--font-weight-300);
    color: var(--color-grey-0);
    line-height: var(--font-line-height-24);
    margin-bottom: 10px;
  }
`;

export const SecondArticle = styled.article`
  height: 120vh;
  width: 90%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
  margin-bottom: 30px;
  background-color: var(--color-grey-3);
  border-radius: var(--radius-8);
  box-shadow: 0px 0px 15px 5px var(--color-primary);

  & > h2 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-32);
    color: var(--color-grey-0);
    margin-bottom: 20px;
  }

  @media screen and (min-width: 360px) {
    overflow: auto;
    height: 42%;
  }
  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
    height: 80vh;
  }
  @media screen and (min-width: 768px) {
    height: 120vh;
  }
  @media screen and (min-width: 1024px) {
    height: 120vh;
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1400px) {
    width: 43%;
    height: 80vh;
  }
  @media screen and (min-width: 1920px) {
    height: 80vh;
  }
`;
