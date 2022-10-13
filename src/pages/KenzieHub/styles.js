import { Link } from "react-router-dom";
import styled from "styled-components";

/****************************************

    Author: Lucas Mitori Oliveira Okumura
    contact: lucas.mitori@hotmail.com
    cel: +55 (11) 9-7749-2121
    Name: Portifólio Design
    Description: Using styled-components to improve main Page.
    ~ *   Portifolio Styles   * ~

            Version: 1.0

****************************************/

export const SpecProject = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: flex-start;
  background-color: var(--color-grey-4);
  border-bottom: 5px solid black;
  margin-left: 300px;
  padding: 5vh 10%;
`;

/*-----------------------
~* First Section Design *~
-------------------------*/

export const ProjectSection = styled.section`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

export const ProjectCards = styled.div`
  width: 20vw;
  height: 26vh;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-start;
  background-color: royalblue;

  & > img {
    width: 100%;
    height: 100%;
  }
`;

export const MenuCard = styled(Link)`
  text-decoration: none;
  display: none;
  position: absolute;
  top: 80%;
  width: 100%;
  height: 20%;
  background-color: var(--color-navigation);

  & > h2 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-28);
    color: var(--color-primary);
    padding-right: 20px;
  }

  ${ProjectCards}:hover & {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
