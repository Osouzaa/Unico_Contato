import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Platform } from "../pages/platform";
import { Template } from "../components/template/indesx";
import { Integration } from "../pages/integrations";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes location={location}>
        <Route path="/" element={<Platform />} />
        <Route element={<Template />}>
          <Route path="/Integration" element={<Integration/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { RouterApp };
