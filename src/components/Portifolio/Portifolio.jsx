import {
  MenuCard,
  PortifolioMain,
  ProjectCards,
  ProjectSection,
} from "./styles";

import { GoLink } from "react-icons/go";
import { IconContext } from "react-icons";
import Project01 from "../../assets/img/project01.png";

const PortifolioInformation = () => {
  return (
    <>
      <PortifolioMain id="section-portifolio">
        <h2>Portifolio</h2>
        <p>
          Below there are some of my latest projects going from basic vanilla to
          my most recent and experienced design with React JS. I will be
          updating this list periodically. I decided to show here in my
          portfolio different ways of producing and creating to show my
          progression and experience. I hope you like it.
        </p>
        <ProjectSection>
          <ProjectCards>
            <img src={Project01} alt="" />
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
          <ProjectCards>
            <img src={Project01} alt="" />
            <MenuCard>
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
          <ProjectCards>
            <img src={Project01} alt="" />
            <MenuCard>
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
          <ProjectCards>
            <img src={Project01} alt="" />
            <MenuCard>
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
          <ProjectCards>
            <img src={Project01} alt="" />
            <MenuCard>
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
          <ProjectCards>
            <img src={Project01} alt="" />
            <MenuCard>
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
        </ProjectSection>
      </PortifolioMain>
    </>
  );
};

export default PortifolioInformation;
