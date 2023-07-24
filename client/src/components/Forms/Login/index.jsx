import React from "react";
import { Form } from "@/components/Form";

export const LoginForm = () => {
  return (
    <React.Fragment>
      <Form>
        <Form.Label>Username:</Form.Label>
        <Form.Input name={"username"} placeholder={"Digite seu username"} />
        <Form.Label>Senha:</Form.Label>
        <Form.Input
          name={"password"}
          placeholder={"Digite sua senha"}
          type={"password"}
        />
        <Form.Submit>Pedir registro</Form.Submit>
      </Form>
    </React.Fragment>
  );
};
