import styled from "styled-components";

const ContainerGeral = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 414px) {
    flex-direction: column;
  }
`;

const Container = styled.div`
  background: #003;
  height: 450px;

  @media (max-width: 414px) {
    height: 480px;
  }
`;

const Title = styled.h1`
  text-align: center;
  color: #ffff;
  padding: 0.7em;
`;

const ContainerDiv = styled.form`
  display: flex;
  justify-content: space-around;
`;

const ContentInputs = styled.div`
  display: flex;
  @media (max-width: 414px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  gap: 1em;
  input {
    width: 300px;
    height: 45px;
    border-radius: 8px;
    border: 1px solid grey;
    padding-left: 1em;
    outline: none;

    @media (max-width: 414px) {
      width: 350px;
    }

    &.E-mail {
      width: 500px;
      @media (max-width: 414px) {
        width: 350px;
      }
    }
  }
`;

const ContentMessage = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.7em;

  @media (max-width: 414px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  input {
    width: 815px;
    height: 180px;
    border-radius: 8px;
    border: 1px solid grey;
    padding-left: 1em;
    text-align: start;
    outline: none;

    @media (max-width: 414px) {
      width: 350px;
    }
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const buttonMenssage = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  button {
    margin-top: 2em;
    padding: 0.8em 2em;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 12px;
    /* From https://css.glass */
    background: rgba(40, 28, 115, 0.78);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(40, 28, 115, 0.46);
  }
`;

export {
  Container,
  Title,
  ContainerGeral,
  ContainerDiv,
  ContentInputs,
  ContentMessage,
  buttonMenssage,
  Form,
};
