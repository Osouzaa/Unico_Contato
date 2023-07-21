import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 200px;

  background: #006;

  @media (max-width: 414px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 1em;
  max-width: 210px;

  @media (max-width: 414px) {
    max-width: 100%;
  }

  color: #fff;

  p {
    color: #fff;
    text-align: center;
    font-size: 14px;

    @media (max-width: 414px) {
      font-size: 10px;
    }
  }
`;

export { Container, Content };
