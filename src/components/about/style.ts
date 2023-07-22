import styled from "styled-components";

const Container = styled.div`
  background-color: #003;
  display:flex;
  justify-content:center;
  align-items:center;
  padding: 1em 0 0 0;
  height: 800px;

  @media (max-width: 414px) {
      height: 300px; 
      padding: 2em 0 0 0;
    }



  img {
    height: 900px;
    width: 100%;
    margin-top: 15em;
   

    @media (max-width: 414px) {
      height: 100%; 
      width: 400px;
      margin-top: 0;
    }
  }
`;

export { Container };
