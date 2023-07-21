import styled from "styled-components";

const Container = styled.div`
  background-color: #003;
  display:flex;
  justify-content:center;
  align-items:center;
  padding: 2em 0 0 0;
  height: 700px;

  @media (max-width: 414px) {
      height: 350px; 
      padding: 2em 0 0 0;
    }



  img {
    height: 870px;
    width: 100%;

    @media (max-width: 414px) {
      height: 100%; 
      width: 100%;
    }
  }
`;

export { Container };
