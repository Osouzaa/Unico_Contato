import * as C from "./style";

const Register = () => {
  return (
    <C.Container>
      <div>
        <C.Title>Cadastro</C.Title>
      </div>
      <C.Form>
        <C.ContainerDiv>
          <C.ContentInputs>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="E-mail" className="E-mail" />
          </C.ContentInputs>
        </C.ContainerDiv>
        <C.ContentMessage>
          <input type="text" placeholder="Mensagem" />
        </C.ContentMessage>
      </C.Form>
      <C.buttonMenssage>
        {" "}
        <button>Enviar Mensagem</button>
      </C.buttonMenssage>
    </C.Container>
  );
};

export { Register };
