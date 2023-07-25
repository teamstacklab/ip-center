import React from "react";
import { Form } from "@/components/Form";

const ComunicadosForm = () => {
  return (
    <React.Fragment>
      <Form>
        <Form.Label>Nome:</Form.Label>
        <Form.Input controlId={"controlId"} placeholder={"Digite o nome"} />
        <Form.Label>Descrição:</Form.Label>
        <Form.Input controlId={"description"} placeholder={"Digite a descrição"} />
        <Form.Submit>Criar comunicado</Form.Submit>
      </Form>
    </React.Fragment>
  );
};

export default ComunicadosForm;
