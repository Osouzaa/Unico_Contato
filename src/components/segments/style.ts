import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  
`;

const ContentImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    position: absolute;

    @media (max-width: 414px) {
      height: 80px;
      width: 80px;
    }
  }
`;

const ContentBG = styled.div`
  background-color: rgba(214, 228, 241, 0.8);
  height: 195px;

  @media (max-width: 414px) {
      height: 80px; 
    }
`;

export { Container, ContentImg, ContentBG };
