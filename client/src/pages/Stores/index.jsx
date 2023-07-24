import React from "react";
import * as Icons from "react-bootstrap-icons";
import { Title } from "@/components/Title";
import * as Box from "@/components/Box";
import { SectionBox } from "../../components/Box/Style";

const LojasRoute = "/lojas";
const MinhasLojasRoute = "/lojas/minhas";

const Lojas = (props) => {
  return (
    <SectionBox>
      <Title icon={<Icons.Shop />}>Lojas</Title>
      <Box.Grid>
      </Box.Grid>
    </SectionBox>
  );
};

export default Lojas;
export { LojasRoute, MinhasLojasRoute };
