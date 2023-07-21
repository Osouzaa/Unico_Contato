import { DepositionsData } from "../../utils/depositions";
import * as C from "./style";

const Depositions = () => {
  return (
    <C.Container>
      {/* Utilizar o método map para renderizar os depoimentos */}
      {DepositionsData.map((deposition) => (
        <C.ContentDeposition key={deposition.id}>
          <C.ContentImg>
            <img src={deposition.img} alt="" />
          </C.ContentImg>
          <p>{deposition.text}</p>
        </C.ContentDeposition>
      ))}
    </C.Container>
  );
};

export { Depositions };
