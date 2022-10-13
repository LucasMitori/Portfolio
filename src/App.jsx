import { useState } from "react";
import HeaderSpace from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import Routes from "./routes";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* <Routes /> */}
      <HeaderSpace show={show} setShow={setShow} />
      <MainPage show={show} setShow={setShow} />
    </>
  );
}

export default App;
