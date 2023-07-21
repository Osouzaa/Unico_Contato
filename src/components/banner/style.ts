import styled from "styled-components";

const Container = styled.div`
  background-color: #003;

  img {
    height: 750px;
    width: 100%;

    @media (max-width: 414px) {
      height: 400px;
      width: 100%;
    }
  }
`;

export { Container };
