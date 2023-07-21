import styled from "styled-components";

const ContainerGeral = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  background: #003;
  height: 400px;
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
  gap: 1em;
  input {
    width: 300px;
    height: 45px;
    border-radius: 8px;
    border: 1px solid grey;
    padding-left: 1em;
    outline: none;

    &.E-mail {
      width: 500px;
    }
  }
`;

const ContentMessage = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.7em;

  input {
    width: 815px;
    height: 180px;
    border-radius: 8px;
    border: 1px solid grey;
    padding-left: 1em;
    text-align: start;
    outline: none;
  }
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
};
