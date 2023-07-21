import { Outlet } from "react-router-dom";
import { Header } from "../header";


const Template = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export { Template };
