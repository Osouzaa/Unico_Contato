import { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requer um carregador
import { Carousel } from "react-responsive-carousel";
import * as C from "./style";

import Pessoa1 from "../../img/Pessoa1.svg";
import Pessoa2 from "../../img/Pessoa2.svg";
import Pessoa3 from "../../img/Pessoa3.svg";

class DemoCarousel extends Component {
  render() {
    return (
      <>
        {" "}
        <Carousel
          showIndicators={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          showThumbs={false}
          swipeable={false}
          stopOnHover={false}
          showArrows={false}
          centerMode={true}
          showStatus={false}
        >
          <C.Container>
            <img src={Pessoa1} />
            <p>
              {" "}
              SR.DONO DA EDUCA MAIS BRASIL , CRIADOR DA CONTA ENOR ...{" "}
              <span>Ver Mais</span>
            </p>
          </C.Container>
          <C.Container>
            <img src={Pessoa2} />
            <p>
              {" "}
              SR.DONO DA EDUCA MAIS BRASIL , CRIADOR DA CONTA ENOR ...{" "}
              <span>Ver Mais</span>
            </p>
          </C.Container>
          <C.Container>
            <img src={Pessoa3} />
            <p>
              {" "}
              SR.DONO DA EDUCA MAIS BRASIL , CRIADOR DA CONTA ENOR ...{" "}
              <span>Ver Mais</span>
            </p>
          </C.Container>
        </Carousel>
      </>
    );
  }
}

export { DemoCarousel };
