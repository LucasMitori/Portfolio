import { useState } from "react";
import HeaderSpace from "./components/Header/Header";
import GeneralProvider from "./contexts/GeneralContext";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <GeneralProvider>
        <HeaderSpace show={show} setShow={setShow} />
        <MainPage show={show} setShow={setShow} />
      </GeneralProvider>
    </>
  );
}

export default App;
