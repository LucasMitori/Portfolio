import { Navigate, Route, Routes } from "react-router-dom";
import KenzieHub from "../pages/KenzieHub/KenzieHub";
import MainPage from "../pages/MainPage/MainPage";

const RoutesMain = () => (
  <Routes>
    {/* <Route index element={<MainPage />} /> */}
    {/* <Route path="/kenzieHub" element={<KenzieHub />} /> */}
    {/* <Route path="*" element={<Navigate to="/" />} /> */}
  </Routes>
);

export default RoutesMain;
