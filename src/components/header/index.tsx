import Logo from "../../img/Logo_Unico.png";
import * as C from "./style";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <C.Header>
      <C.ContentImg>
        <img src={Logo} alt="Logo da empresa Grupo Único" />
      </C.ContentImg>
      <C.ContentList>
        <ul>
          <li className={location.pathname === "/" ? "active" : ""}>
            {" "}
            Plataforma{" "}
          </li>
          <li className={location.pathname === "/Integration" ? "active" : ""}>
            {" "}
            Integrações{" "}
          </li>
          <li className={location.pathname === "/Plans" ? "active" : ""}>
            {" "}
            Planos{" "}
          </li>
          <li className={location.pathname === "/News" ? "active" : ""}>
            {" "}
            Novidades{" "}
          </li>
          <li className={location.pathname === "/About" ? "active" : ""}>
            {" "}
            Sobre Nós{" "}
          </li>
        </ul>
      </C.ContentList>
    </C.Header>
  );
};

export { Header };
