import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 200px;

  background: #006;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 1em;
  max-width: 210px;

  color: #fff;

  p {
    color: #fff;
    text-align: center;
    font-size: 14px;
  }
`;

export { Container, Content };
