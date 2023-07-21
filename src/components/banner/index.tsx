import banner from "../../img/Intro.svg"
import * as C from "./style";

const Banner = () => {
    return (
        <C.Container>   
            <img src={banner} alt="" />
        </C.Container>
    )
}

export { Banner}