import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import Typical from "react-typical";
import AboutInformation from "../../components/About/About";
import ContactInformation from "../../components/Contact/Contact";
import PortifolioInformation from "../../components/Portifolio/Portifolio";
import ResumeInformation from "../../components/Resume/Resume";
import {
  HomeSection,
  NavBarMenuBtn,
  ServicesSection,
  TypingEffect,
} from "./styles";
import "../../utils/i18n";
import { useTranslation } from "react-i18next";

const MainPage = ({ show, setShow }) => {
  function openMenu() {
    setShow((current) => !current);
  }

  const { t } = useTranslation();
  return (
    <>
      <NavBarMenuBtn onClick={() => openMenu()}>
        <IconContext.Provider
          value={{
            color: "var(--color-grey-0)",
          }}
        >
          <GiHamburgerMenu />
        </IconContext.Provider>
      </NavBarMenuBtn>
      <HomeSection id="section-home" show={show}>
        <h1>Lucas Mitori</h1>
        <TypingEffect>
          <h2>
            {t("I'm a")}{" "}
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "Developer",
                5000,
                "Programmer",
                5000,
                "Freelancer",
                5000,
                "Student",
                5000,
              ]}
            />
          </h2>
        </TypingEffect>
      </HomeSection>
      <AboutInformation />

      <ResumeInformation />
      <PortifolioInformation />
      <ContactInformation />
    </>
  );
};

export default MainPage;
