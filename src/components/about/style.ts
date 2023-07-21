import styled from "styled-components";

const Container = styled.div`
  background-color: #003;
  padding: 2em 0 0 0;
  height: 700px;

  @media (max-width: 414px) {
      height: 300px; 
      padding: 2em 0 0 0;
    }



  img {
    height: 870px;
    width: 100%;

    @media (max-width: 414px) {
      height: 350px; 
      width: 115%;
    }
  }
`;

export { Container };
