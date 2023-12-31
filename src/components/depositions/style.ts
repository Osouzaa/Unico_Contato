import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(214, 228, 241, 0.8);
  height: 700px;

  @media (max-width: 2560px) {
    justify-content: space-evenly;
  }
`;

const ContentDeposition = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  margin: 2em 3em;
  p {
    margin-top: 1em;
    max-width: 200px;
    color: #006;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

const ContentImg = styled.div`
  width: 280px;
  height: 340px;
  border-radius: 40px;
  background: #003;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 100%;
    height: 100%;

    
  }
`;

const ContainerCarousel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  h1 {
    color: #009;
    margin: 1em;
  }
`;

export { Container, ContentDeposition, ContentImg, ContainerCarousel };
