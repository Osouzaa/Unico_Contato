import * as C from "./style";

const Footer = () => {
  return (
    <C.Container>
      <C.Content>
        <span> Endereço </span>
        <p> Rua Noberto Mayer 1019 Eldorado - Contagem/MG Cep: 32.315-100</p>
      </C.Content>
      <C.Content>
        <span> Suporte </span>
        <p> Segunda a sexta de 08:00 às 18:00 - Sábado de 09:00 às 13:00</p>
      </C.Content>
      <C.Content>
        <span> Telefone para Contato</span>
        <p>(31)98203-3719</p>
      </C.Content>
    </C.Container>
  );
};

export { Footer };
