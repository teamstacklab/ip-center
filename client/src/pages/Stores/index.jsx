import React from "react";
import * as Icons from "react-bootstrap-icons";
import { Title } from "@/components/Title";
import * as Box from "@/components/Box";

const LojasRoute = "/lojas";
const MinhasLojasRoute = "/lojas/minhas";

const Lojas = (props) => {
  return (
    <Box.Section>
      <Title icon={<Icons.Shop />}>Lojas</Title>
      <Box.Grid>
      </Box.Grid>
    </Box.Section>
  );
};

export default Lojas;
export { LojasRoute, MinhasLojasRoute };
