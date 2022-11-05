import {
  ArticleInformation,
  FirstArticle,
  ResumeMain,
  ResumeSection,
  SecondArticle,
} from "./style";

import { GrCertificate } from "react-icons/gr";
import { IconContext } from "react-icons";
import "../../utils/i18n";
import { useTranslation } from "react-i18next";

const ResumeInformation = () => {
  const { t } = useTranslation();

  return (
    <>
      <ResumeMain id="section-resume">
        <h2>{t("Resume")}</h2>
        <p>
          {t(
            "Here down below there is my career and studying progression, I have other experecies for example I passed through International Relations, currently formed now with degree of Financial Management worked in the area for aproximately 3 years. My goals now and future plans are for the tech area, growing up in both Back-end and Front-end, with hopes that in a near future I will be financially free and have a lot of experiencies in the area."
          )}
        </p>

        <ResumeSection>
          <FirstArticle>
            <h2>{t("Summary")}</h2>
            <ArticleInformation>
              <h3>Lucas Mitori Oliveira Okumura</h3>
              <p>
                <i>
                  {t(
                    "I live now in Brazil, I'm passionate about programming, knowledge and creating new enviroments for users in different ways, despite having little time since I started learning about programming I'm fascinated for more tools, frameworks, softwares to learn and use in my work and personal projects."
                  )}
                </i>
              </p>

              <ol>
                <li>Alto de Pinheiros, São Paulo - SP</li>
                <li>+55 (11) 9-7749-2121</li>
                <li>lucas.mitori@hotmail.com</li>
                <li>linktree: https://linktr.ee/lucasmitori</li>
              </ol>
            </ArticleInformation>
            <h2>{t("Education")}</h2>
            <ArticleInformation>
              <h3>{t("Degree in Full Stack Developer")}</h3>
              <h4>2022 - 2023</h4>
              <h5>Kenzie Academy Brasil</h5>
              <p>
                {t(
                  "Certificate in Front-end (HTML5, CSS3, Javascript, Git and Github, POO, usage of API's, React, Redux) and Back-end (NodeJS Express, Typescript, SQL, API RESTful, Python, Django, ORM, MongoDB, Amazon AWS, Migrations)"
                )}
              </p>
            </ArticleInformation>
            <ArticleInformation>
              <h3>{t("Degree in Financial Management")}</h3>
              <h4>2017 - 2019</h4>
              <h5>FICS - Campos Salles - Lapa</h5>
              <p>
                {t(
                  "Certificate in Financial Management with 3 years experiencie in the area, knownledge wih Excel, financial documents, economic control in a company."
                )}
              </p>
            </ArticleInformation>
          </FirstArticle>
          <SecondArticle>
            <h2>{t("Professional Experience")}</h2>
            <ArticleInformation>
              <h3>{t("Coach")}</h3>
              <h4>2022 - {t("Now")}</h4>
              <h5>Kenzie Academy Brasil</h5>
              <p>
                {t(
                  "Actual Freelancer Work, hired (PJ) from Kenzie Academy. Main activities is help and gives support to another students with the modules and topics. Help the instructors with the gradings,correcting their activities and showing what they did wrong and if te students need more help with other problems, it is possible to make 1x1 explaining and helping with their studies."
                )}
              </p>
            </ArticleInformation>
            <ArticleInformation>
              <h3>Former Financial Management</h3>
              <h4>2021 - 2022</h4>
              <h5>AHZ EVENTOS - eirelli</h5>
              <p>
                {t(
                  "Preparation of financial reports; direct assistance in all sectors of the company and organization of the Conta Azul software; accounts payable and receivable; elaboration of Income Statement and Cash Flow by excel; strategic and financial planning."
                )}
              </p>
            </ArticleInformation>

            <h2>{t("Certificates")}</h2>
            <ArticleInformation>
              <h3>{t("Current Certificates")}</h3>
              <p>
                {t(
                  "Below there is a link for all my certificates in programmer area, done with Bootcamps, courses in other companies such as Udemy, Alura and Bradesco."
                )}
              </p>

              <a href="https://bit.ly/3M54lhd" rel="noopener">
                {t("Link for Certificates")}{" "}
                <IconContext.Provider
                  value={{
                    color: "var(--color-grey-0)",
                    size: "1em",
                  }}
                >
                  <GrCertificate />
                </IconContext.Provider>
              </a>
            </ArticleInformation>
          </SecondArticle>
        </ResumeSection>
      </ResumeMain>
    </>
  );
};

export default ResumeInformation;
