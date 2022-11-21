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
import { useState } from "react";
import { useEffect } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { GeneralContext } from "../../contexts/GeneralContext";
import { useContext } from "react";

const ContactInformation = () => {
  const { t } = useTranslation();

  const { SubmitFunction } = useContext(GeneralContext);

  const [animationValueContact, setAnimationValueContact] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting === true) {
          setAnimationValueContact(entry.isIntersecting);
        } else {
          setAnimationValueContact(entry.isIntersecting);
        }
      });
    });

    observer.observe(document.getElementById("contactCard"));
  }, []);

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    name: yup.string().required("Nome obrigatório"),
    subject: yup.string().required("Assunto obrigatório"),
    message: yup.string().required("Mensagem obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

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
            <ArticleCard
              id="contactCard"
              animationValueContact={animationValueContact}
            >
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
                <h4>São Paulo SP, BR - CEP:05458001</h4>
              </ArticleCardText>
            </ArticleCard>
            <ArticleCard
              id="contactCard"
              animationValueContact={animationValueContact}
            >
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
            <ArticleCard
              id="contactCard"
              animationValueContact={animationValueContact}
            >
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

          <FormSpace
            id="contactCard"
            animationValueContact={animationValueContact}
          >
            <form onSubmit={handleSubmit(SubmitFunction)}>
              <label htmlFor="">{t("Your Name")}</label>
              <input
                type="text"
                placeholder="Type your Name"
                {...register("name")}
              />
              <p>{errors.name?.message}</p>
              <label htmlFor="">{t("Your Email")}</label>
              <input
                type="email"
                placeholder="Type your Email"
                {...register("email")}
              />
              <p>{errors.email?.message}</p>
              <label htmlFor="">{t("Subject")}</label>
              <input
                type="text"
                placeholder="Type your Subject"
                {...register("subject")}
              />
              <p>{errors.subject?.message}</p>
              <label htmlFor="">{t("Message")}</label>
              <textarea {...register("message")}></textarea>
              <p>{errors.message?.message}</p>
              <button type="submit">{t("Send Message")}</button>
            </form>
          </FormSpace>
        </ContactSection>
      </ContactMain>
    </>
  );
};

export default ContactInformation;
