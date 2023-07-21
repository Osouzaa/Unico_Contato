import * as C from "./style";

const Register = () => {
  return (
    <C.Container>
      <div>
        <C.Title>Cadastro</C.Title>
      </div>
      <form>
        <C.ContainerDiv>
          <C.ContentInputs>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="E-mail" className="E-mail" />
          </C.ContentInputs>
        </C.ContainerDiv>
        <C.ContentMessage>
          <input type="text" placeholder="Mensagem" />
        </C.ContentMessage>
      </form>
      <C.buttonMenssage>
        {" "}
        <button>Enviar Mensagem</button>
      </C.buttonMenssage>
    </C.Container>
  );
};

export { Register };
