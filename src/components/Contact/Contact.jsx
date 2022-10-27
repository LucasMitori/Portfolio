import { IconContext } from "react-icons";
import { HiOutlineLocationMarker, HiPhone } from "react-icons/hi";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import {
  ArticleCard,
  ArticleCardText,
  ArticleInformation,
  ContactMain,
  ContactSection,
  FormSpace,
} from "./styles";
import "../../utils/i18n";
import { useTranslation } from "react-i18next";

const ContactInformation = () => {
  const { t } = useTranslation();

  return (
    <>
      <ContactMain id="section-contact">
        <h2>{t("Contact")}</h2>
        <p>
          {t(
            "Below there is some ways to contact me for interviews or new projects that you desire. I hope you liked everything of what have you seen so far in"
          )}{" "}
          <b>{t("my portifolio")}</b>.{" "}
          {t("Any suggestions or critics are welcomed!")}
        </p>

        <ContactSection>
          <ArticleInformation>
            <ArticleCard>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "3em",
                }}
              >
                <HiOutlineLocationMarker />
              </IconContext.Provider>
              <ArticleCardText>
                <h2>{t("Location")}:</h2>
                <h4>Alto de Pinheiros, São Paulo SP - CEP:05458001</h4>
              </ArticleCardText>
            </ArticleCard>
            <ArticleCard>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "3em",
                }}
              >
                <MdOutlineMarkEmailRead />
              </IconContext.Provider>
              <ArticleCardText>
                <h2>Email:</h2>
                <h4>lucas.mitori@hotmail.com</h4>
              </ArticleCardText>
            </ArticleCard>
            <ArticleCard>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "3em",
                }}
              >
                <HiPhone />
              </IconContext.Provider>
              <ArticleCardText>
                <h2>{t("Call")}:</h2>
                <h4>+55 (11) 9-7749-2121</h4>
              </ArticleCardText>
            </ArticleCard>
          </ArticleInformation>

          <FormSpace>
            <form>
              <label htmlFor="">{t("Your Name")}</label>
              <input type="text" placeholder="Type your Name" required />
              <label htmlFor="">{t("Your Email")}</label>
              <input type="email" placeholder="Type your Email" required />
              <label htmlFor="">{t("Subject")}</label>
              <input type="text" placeholder="Type your Subject" required />
              <label htmlFor="">{t("Message")}</label>
              <textarea></textarea>
              <button type="submit">{t("Send Message")}</button>
            </form>
          </FormSpace>
        </ContactSection>
      </ContactMain>
    </>
  );
};

export default ContactInformation;
