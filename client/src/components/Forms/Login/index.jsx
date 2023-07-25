import React from "react";
import { Form } from "@/components/Form";

export const LoginForm = () => {
  return (
    <React.Fragment>
      <Form>
        <Form.Label>Username:</Form.Label>
        <Form.Input controlId={"username"} placeholder={"Digite seu username"} />
        <Form.Label>Senha:</Form.Label>
        <Form.Input
          controlId={"password"}
          placeholder={"Digite sua senha"}
          type={"password"}
        />
        <Form.Submit>Entrar</Form.Submit>
      </Form>
    </React.Fragment>
  );
};
