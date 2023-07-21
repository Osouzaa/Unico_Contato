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
  }
`;

const ContentBG = styled.div`
  background-color: rgba(214, 228, 241, 0.8);
  height: 195px;
`;

export { Container, ContentImg, ContentBG };
