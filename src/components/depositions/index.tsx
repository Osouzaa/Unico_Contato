
import { DepositionsData } from "../../utils/depositions";
import { DemoCarousel } from "../carousel";
import * as C from "./style";

const Depositions = () => {
  const isSmallScreen = window.innerWidth < 424;

  return (
    <C.Container>
      {isSmallScreen ? (
        <C.ContainerCarousel>
          <h1> Depoimentos </h1>
          <DemoCarousel />
        </C.ContainerCarousel>
      ) : (
        DepositionsData.map((deposition) => (
          <C.ContentDeposition key={deposition.id}>
            <C.ContentImg>
              <img src={deposition.img} alt="" />
            </C.ContentImg>
            <p>{deposition.text}</p>
          </C.ContentDeposition>
        ))
      )}
    </C.Container>
  );
};

export { Depositions };
