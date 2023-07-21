import Logo_Unico from "../../img/Unico.svg";
import Logo_Two from "../../img/unico_pet.svg";
import Logo_Three from "../../img/Logo_1.png"
import * as C from "./style";

const Segments = () => {
  return (
    <C.ContentBG>
      <C.Container>
        <C.ContentImg>
          <img src={Logo_Two} alt="" />
        </C.ContentImg>
        <C.ContentImg>
          <img src={Logo_Unico} alt="" />
        </C.ContentImg>
        <C.ContentImg>
          <img src={Logo_Three} alt="" />
        </C.ContentImg>
      </C.Container>
    </C.ContentBG>
  );
};

export { Segments };
