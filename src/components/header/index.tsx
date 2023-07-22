import Logo from "../../img/Logo_Unico.png";
import * as C from "./style";
import { useLocation } from "react-router-dom";
import { useState } from "react"; // Importe o hook 'useState' para lidar com o estado do botão.

const Header = () => {
  const location = useLocation();

  // Adicione um estado para controlar a exibição da barra lateral.
  const [showSidebar, setShowSidebar] = useState(false);

  // Função para alternar a exibição da barra lateral.
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  // Verifique se a largura da tela é igual a 414px para decidir se exibe o botão ou a lista.
  const isSmallScreen = window.innerWidth < 420;

  return (
    <C.Header>
      <C.ContentImg>
        <img src={Logo} alt="Logo da empresa Grupo Único" />
      </C.ContentImg>
      {isSmallScreen ? ( // Verifique se é uma tela pequena (414px) para mostrar o botão.
        <>
          <div onClick={toggleSidebar}>
            <C.Span> &#9776;</C.Span>
          </div>
          {showSidebar && (
            <C.ContentListBar >
              <ul>
                <li className={location.pathname === "/" ? "active" : ""}>
                  Plataforma
                </li>
                <li
                  className={
                    location.pathname === "/Integration" ? "active" : ""
                  }
                >
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
            </C.ContentListBar>
          )}
        </>
      ) : (
        
        <C.ContentList>
          <ul>
            <li className={location.pathname === "/" ? "active" : ""}>
              {" "}
              Plataforma{" "}
            </li>
            <li
              className={location.pathname === "/Integration" ? "active" : ""}
            >
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
      )}
    </C.Header>
  );
};

export { Header };
