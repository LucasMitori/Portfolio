import emailjs from "@emailjs/browser";
import { createContext, useState } from "react";
import { ToastError, ToastMessage } from "../components/Toast/toast";

export const GeneralContext = createContext();

const GeneralProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState("pt");

  /*-------------------- Skip line --------------------*/

  async function SubmitFunction(data) {
    const templateParams = {
      from_name: data.name,
      message: data.message,
      email: data.email,
    };

    emailjs
      .send(
        "service_vjasrhp",
        "template_83sakw3",
        templateParams,
        "BwXWctA1WZJmzYuvQ"
      )
      .then((res) => {
        // console.log(res);
        // console.log("Email enviado", res.status, res.text);
      })
      .catch((err) => console.log(err));
  }

  /*-------------------- Skip line --------------------*/

  return (
    <GeneralContext.Provider
      value={{
        setCurrentLanguage,
        SubmitFunction,
        currentLanguage,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralProvider;
