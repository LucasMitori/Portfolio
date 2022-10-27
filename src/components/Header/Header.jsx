import {
  BrazilBtn,
  Header,
  ImageDiv,
  InformationSpace,
  NavBar,
  NavBarItems,
  SocialMedias,
  SpaceBtn,
  USABtn,
} from "./styles";
import Lucas from "../../assets/personal/admin.png";
import FacebookIcon from "../../assets/icons/icon-facebook.svg";
import GitHubIcon from "../../assets/icons/icon-github.svg";
import InstagramIcon from "../../assets/icons/icon-instagram.svg";
import LinkedinIcon from "../../assets/icons/icon-linkedin.svg";
import PinterestIcon from "../../assets/icons/icon-pinterest.svg";
import { IconContext } from "react-icons";
import { TiHomeOutline } from "react-icons/ti";
import "../../utils/i18n";
import { useTranslation } from "react-i18next";

/* Icons Imports */

import reactLogo from "../../assets/logo/reactLogo.png";
import { GoPerson } from "react-icons/go";
import { IoIosPaper } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { GiBrazilFlag } from "react-icons/gi";
import { FaFlagUsa } from "react-icons/fa";
import { MdDesignServices, MdContactMail } from "react-icons/md";

/* Scrollable Anchor Utilities */

import AnchorLink from "react-anchor-link-smooth-scroll";
import { useContext } from "react";
import { GeneralContext } from "../../contexts/GeneralContext";

const HeaderSpace = ({ show, setShow }) => {
  const { currentLanguage, setCurrentLanguage } = useContext(GeneralContext);

  const { t, i18n } = useTranslation();

  const changeLanguage = (value) => {
    i18n
      .changeLanguage(value)
      .then(() => {
        setCurrentLanguage(value);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header show={show}>
        <InformationSpace>
          <ImageDiv>
            <img src={Lucas} alt="personal" />
          </ImageDiv>

          <h2>Lucas Mitori</h2>

          <SocialMedias>
            <a href="https://www.facebook.com/LucasMitori" rel="noopener">
              <img src={FacebookIcon} alt="icon Facebook" />
            </a>
            <a href="https://github.com/LucasMitori" rel="noopener">
              <img src={GitHubIcon} alt="icon Facebook" />
            </a>
            <a href="https://www.instagram.com/lucasokumura/" rel="noopener">
              <img src={InstagramIcon} alt="icon Facebook" />
            </a>
            <a
              href="https://www.linkedin.com/in/lucas-okumura-2446a478/"
              rel="noopener"
            >
              <img src={LinkedinIcon} alt="icon Facebook" />
            </a>
            <a href="https://br.pinterest.com/lucasmokumura/" rel="noopener">
              <img src={PinterestIcon} alt="icon Facebook" />
            </a>
          </SocialMedias>

          <NavBar>
            <NavBarItems>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "1.8em",
                }}
              >
                <TiHomeOutline />
              </IconContext.Provider>
              <AnchorLink offset={Infinity} href="#section-home">
                {t("Home")}
              </AnchorLink>
            </NavBarItems>

            <NavBarItems>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "1.5em",
                }}
              >
                <GoPerson />
              </IconContext.Provider>
              <AnchorLink href="#section-about">{t("About")}</AnchorLink>
            </NavBarItems>
            <NavBarItems>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "1.5em",
                }}
              >
                <IoIosPaper />
              </IconContext.Provider>
              <AnchorLink href="#section-resume">{t("Resume")}</AnchorLink>
            </NavBarItems>
            <NavBarItems>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "1.5em",
                }}
              >
                <CgWebsite />
              </IconContext.Provider>
              <AnchorLink href="#section-portifolio">
                {t("Portifolio")}
              </AnchorLink>
            </NavBarItems>
            {/* <NavBarItems>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "1.5em",
                }}
              >
                <MdDesignServices />
              </IconContext.Provider>
              <AnchorLink href="#section-services">Services</AnchorLink>
            </NavBarItems> */}
            <NavBarItems>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "1.5em",
                }}
              >
                <MdContactMail />
              </IconContext.Provider>
              <AnchorLink href="#section-contact">{t("Contact")}</AnchorLink>
            </NavBarItems>
          </NavBar>

          <h3>{t("Change the language")}:</h3>

          <SpaceBtn>
            <BrazilBtn
              onClick={() => changeLanguage("pt")}
              currentLanguage={currentLanguage}
            >
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "2em",
                }}
              >
                <GiBrazilFlag />
              </IconContext.Provider>
            </BrazilBtn>

            <USABtn
              onClick={() => changeLanguage("en")}
              currentLanguage={currentLanguage}
            >
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "1em",
                }}
              >
                <FaFlagUsa />
              </IconContext.Provider>
            </USABtn>
          </SpaceBtn>

          <img src={reactLogo} alt="React Logo" />
        </InformationSpace>
      </Header>
    </>
  );
};

export default HeaderSpace;
