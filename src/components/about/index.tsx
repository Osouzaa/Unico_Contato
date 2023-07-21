import * as C from "./style";
import SobrePng from "../../img/Sobre.svg";

const Sobre = () => {
  return (
    <>
      <C.Container>
        <img src={SobrePng} alt="" />
      </C.Container>
    </>
  );
};

export { Sobre };
