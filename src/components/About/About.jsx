import {
  AboutMain,
  FactCard,
  FactCardInfo,
  FactCardSpace,
  FirstSection,
  MainInformation,
  MainPhoto,
  PersonalInformation,
  SecondSection,
  SkillBarSpace,
  SkillCard,
  ThirdSection,
} from "./styles";
import { MdDoubleArrow } from "react-icons/md";
import { IconContext } from "react-icons";
import { TbMoodHappy } from "react-icons/tb";
import { AiOutlineProject, AiOutlineTeam } from "react-icons/ai";
import { BiHeadphone } from "react-icons/bi";
import ProgressBar from "@ramonak/react-progress-bar";

const AboutInformation = ({ show }) => {
  return (
    <>
      <AboutMain id="section-about">
        <FirstSection>
          <h2>About</h2>
          <p>
            Hello! I'm Lucas Mitori. A future <b>Full Stack Web Developer</b>{" "}
            having specialization in both{" "}
            <b>Back end & Front end development</b>. Currently i have 6 months
            of experience in Web Development, studying now at{" "}
            <b>Kenzie Academy Brazil</b>, graduating in May/23. I have Front end
            Skills in Javascript / ECMAscript (ES6), HTML5, CSS3, Bootstrap,
            React JS. I will start my back end studies in Nov/22.
          </p>

          <PersonalInformation>
            <MainPhoto></MainPhoto>

            <MainInformation>
              <h2>Web Developer (Soon Full Stack Developer)</h2>
              <p>Below there are more personal information about me.</p>
              <ul>
                <li>
                  <IconContext.Provider
                    value={{
                      color: "var(--color-grey-0)",
                      size: "1em",
                    }}
                  >
                    <MdDoubleArrow />
                  </IconContext.Provider>
                  <span>Birthday:</span> 18 Jan 1995
                </li>
                <li>
                  <IconContext.Provider
                    value={{
                      color: "var(--color-grey-0)",
                      size: "1em",
                    }}
                  >
                    <MdDoubleArrow />
                  </IconContext.Provider>
                  <span>Website:</span> www.example.com
                </li>
                <li>
                  <IconContext.Provider
                    value={{
                      color: "var(--color-grey-0)",
                      size: "1em",
                    }}
                  >
                    <MdDoubleArrow />
                  </IconContext.Provider>
                  <span>Phone:</span> +55 (11) 9-7749-2121
                </li>
                <li>
                  <IconContext.Provider
                    value={{
                      color: "var(--color-grey-0)",
                      size: "1em",
                    }}
                  >
                    <MdDoubleArrow />
                  </IconContext.Provider>
                  <span>City:</span> São Paulo, SP - BRAZIL
                </li>
                <li>
                  <IconContext.Provider
                    value={{
                      color: "var(--color-grey-0)",
                      size: "1em",
                    }}
                  >
                    <MdDoubleArrow />
                  </IconContext.Provider>
                  <span>Age:</span> 27 years
                </li>
                <li>
                  <IconContext.Provider
                    value={{
                      color: "var(--color-grey-0)",
                      size: "1em",
                    }}
                  >
                    <MdDoubleArrow />
                  </IconContext.Provider>
                  <span>Degree:</span> Master
                </li>
                <li>
                  <IconContext.Provider
                    value={{
                      color: "var(--color-grey-0)",
                      size: "1em",
                    }}
                  >
                    <MdDoubleArrow />
                  </IconContext.Provider>
                  <span>Email</span>: lucas.mitori@hotmail.com
                </li>
                <li>
                  <IconContext.Provider
                    value={{
                      color: "var(--color-grey-0)",
                      size: "1em",
                    }}
                  >
                    <MdDoubleArrow />
                  </IconContext.Provider>
                  <span>Freelance:</span> Available
                </li>
              </ul>
            </MainInformation>
          </PersonalInformation>
        </FirstSection>
        <SecondSection>
          <h2>Facts</h2>
          <p>
            Below there are some important facts about me and my work, i know
            it's not much, but with time, devotion, passion, creativity and a
            lot of hard work i can increase this facts into a value meaning. I
            hope that you can be one of a happy client or a company that desires
            my work. I'm open for a job opportunity.
          </p>

          <FactCardSpace>
            <FactCard>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "4em",
                }}
              >
                <TbMoodHappy />
              </IconContext.Provider>

              <FactCardInfo>
                <h2>2</h2>
                <h3>Happy Clients</h3>
                <p>with my designs</p>
              </FactCardInfo>
            </FactCard>
            <FactCard>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "4em",
                }}
              >
                <AiOutlineProject />
              </IconContext.Provider>

              <FactCardInfo>
                <h2>10</h2>
                <h3>Projects</h3>
                <p>Created with stylish and inovation</p>
              </FactCardInfo>
            </FactCard>
            <FactCard>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "4em",
                }}
              >
                <BiHeadphone />
              </IconContext.Provider>

              <FactCardInfo>
                <h2>20</h2>
                <h3>Hours of Support</h3>
                <p>helping clients and students</p>
              </FactCardInfo>
            </FactCard>
            <FactCard>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "4em",
                }}
              >
                <AiOutlineTeam />
              </IconContext.Provider>

              <FactCardInfo>
                <h2>1</h2>
                <h3>Team Leading</h3>
                <p>together to conclude hard projects</p>
              </FactCardInfo>
            </FactCard>
          </FactCardSpace>
        </SecondSection>
        <ThirdSection>
          <h2>Skills</h2>
          <p>
            Below there are some skills that i learned from Kenzie Academy and
            from other ways, i'm currently mastering React JS and Angular will
            be the next one. After i graduate in Front End in mid november/22 i
            will be learning Back end and will increase more my skills.
          </p>

          <SkillBarSpace>
            <SkillCard>
              <h2>HTML</h2>
              <ProgressBar
                completed={100}
                maxCompleted={100}
                bgColor="var(--color-primary)"
                labelColor="var(--color-black-mode)"
              />
            </SkillCard>
            <SkillCard>
              <h2>CSS</h2>
              <ProgressBar
                completed={90}
                maxCompleted={100}
                bgColor="var(--color-primary)"
                labelColor="var(--color-black-mode)"
              />
            </SkillCard>
            <SkillCard>
              <h2>Javascript</h2>
              <ProgressBar
                completed={90}
                maxCompleted={100}
                bgColor="var(--color-primary)"
                labelColor="var(--color-black-mode)"
              />
            </SkillCard>
            <SkillCard>
              <h2>Boostrap</h2>
              <ProgressBar
                completed={80}
                maxCompleted={100}
                bgColor="var(--color-primary)"
                labelColor="var(--color-black-mode)"
              />
            </SkillCard>

            <SkillCard>
              <h2>Git e Github</h2>
              <ProgressBar
                completed={90}
                maxCompleted={100}
                bgColor="var(--color-primary)"
                labelColor="var(--color-black-mode)"
              />
            </SkillCard>

            <SkillCard>
              <h2>React JS</h2>
              <ProgressBar
                completed={80}
                maxCompleted={100}
                bgColor="var(--color-primary)"
                labelColor="var(--color-black-mode)"
              />
            </SkillCard>
            <SkillCard>
              <h2>Typescript</h2>
              <ProgressBar
                completed={70}
                maxCompleted={100}
                bgColor="var(--color-primary)"
                labelColor="var(--color-black-mode)"
              />
            </SkillCard>
            <SkillCard>
              <h2>Redux</h2>
              <ProgressBar
                completed={80}
                maxCompleted={100}
                bgColor="var(--color-primary)"
                labelColor="var(--color-black-mode)"
              />
            </SkillCard>
            <SkillCard>
              <h2>APIs RESTful</h2>
              <ProgressBar
                completed={80}
                maxCompleted={100}
                bgColor="var(--color-primary)"
                labelColor="var(--color-black-mode)"
              />
            </SkillCard>
            <SkillCard>
              <h2>Method OOP (brazil POO)</h2>
              <ProgressBar
                completed={80}
                maxCompleted={100}
                bgColor="var(--color-primary)"
                labelColor="var(--color-black-mode)"
              />
            </SkillCard>
          </SkillBarSpace>
        </ThirdSection>
      </AboutMain>
    </>
  );
};

export default AboutInformation;
