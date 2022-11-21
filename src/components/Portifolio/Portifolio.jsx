import {
  MenuCard,
  PortifolioMain,
  ProjectCards,
  ProjectSection,
} from "./styles";

import { GoLink } from "react-icons/go";
import { IconContext } from "react-icons";
import Project01 from "../../assets/img/project01.png";
import Project02 from "../../assets/img/project02.png";
import Project03 from "../../assets/img/project03.png";
import Project04 from "../../assets/img/project04.png";
import Project05 from "../../assets/img/project05.png";
import Project06 from "../../assets/img/project06.png";
import "../../utils/i18n";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useEffect } from "react";

const PortifolioInformation = () => {
  const { t } = useTranslation();

  const [animationValueProject01, setAnimationValueProject01] = useState();

  useEffect(() => {
    const observerFirst = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting === true) {
          setAnimationValueProject01(entry.isIntersecting);
        } else {
          setAnimationValueProject01(entry.isIntersecting);
        }
      });
    });

    observerFirst.observe(document.getElementById("projectCard"));
  }, []);

  return (
    <>
      <PortifolioMain id="section-portifolio">
        <h2>Portfolio</h2>
        <p>
          {t(
            "Below there are some of my latest projects going from basic vanilla to my most recent and experienced design with React JS. I will be updating this list periodically. I decided to show here in my portfolio different ways of producing and creating to show my progression and experience. I hope you like it."
          )}
        </p>
        <ProjectSection>
          <ProjectCards
            id="projectCard"
            animationValueProject01={animationValueProject01}
          >
            <img src={Project01} alt="Project Kenzie hub" />
            <MenuCard href="https://react-entrega-kenzie-hub-lucasmitori.vercel.app/login">
              <h2>Kenzie Hub</h2>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "2em",
                }}
              >
                <GoLink />
              </IconContext.Provider>
            </MenuCard>
          </ProjectCards>
          <ProjectCards
            id="projectCard"
            animationValueProject01={animationValueProject01}
          >
            <img src={Project02} alt="Project Rick and Morty" />
            <MenuCard href="https://rick-and-morty-db-lucasmitori.vercel.app/welcome">
              <h2>Rick and Morty Database</h2>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "2em",
                }}
              >
                <GoLink />
              </IconContext.Provider>
            </MenuCard>
          </ProjectCards>
          <ProjectCards
            id="projectCard"
            animationValueProject01={animationValueProject01}
          >
            <img src={Project03} alt="Project Manula" />
            <MenuCard href="https://manula-project.vercel.app/">
              <h2>Manula - Company</h2>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "2em",
                }}
              >
                <GoLink />
              </IconContext.Provider>
            </MenuCard>
          </ProjectCards>
          <ProjectCards
            id="projectCard"
            animationValueProject01={animationValueProject01}
          >
            <img src={Project04} alt="Project Hamburgueria" />
            <MenuCard href="https://hamburgueria-kenzie-vert.vercel.app/">
              <h2>Burguer Kenzie</h2>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "2em",
                }}
              >
                <GoLink />
              </IconContext.Provider>
            </MenuCard>
          </ProjectCards>
          <ProjectCards
            id="projectCard"
            animationValueProject01={animationValueProject01}
          >
            <img src={Project05} alt="Project Nu Kenzie" />
            <MenuCard href="https://react-entrega-s1-nu-kenzie-lucasmitori.vercel.app/">
              <h2>Nu Kenzie</h2>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "2em",
                }}
              >
                <GoLink />
              </IconContext.Provider>
            </MenuCard>
          </ProjectCards>
          <ProjectCards
            id="projectCard"
            animationValueProject01={animationValueProject01}
          >
            <img src={Project06} alt="Project Market Pokemon" />
            <MenuCard href="https://pokemon-market-drab.vercel.app/">
              <h2>Pokemon Market</h2>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "2em",
                }}
              >
                <GoLink />
              </IconContext.Provider>
            </MenuCard>
          </ProjectCards>
        </ProjectSection>
      </PortifolioMain>
    </>
  );
};

export default PortifolioInformation;
