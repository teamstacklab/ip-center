import React from "react";
import * as Icons from "react-bootstrap-icons";
import { Title } from "@/components/Title";
import * as Box from "@/components/Box";
import { SectionBox } from "../../components/Box/Style";
import Loja from "../Store";

const LojasRoute = "/lojas";
const MinhasLojasRoute = "/lojas/minhas";

const card = {
  id: 1,
  name: "Renan Store",
  images: ["https://i.imgur.com/JtnSmuG.jpeg"],
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas hic dolorum eius magni non impedit similique laborum.",
  whatsapp: "88981179878",
};

const cards = [card, card, card, card, card, card, card];

const Lojas = (props) => {
  return (
    <SectionBox>
      <Title icon={<Icons.Shop />}>Lojas</Title>
      <Box.Grid>
        {cards.map((card) => {
          return <Loja key={card.id} {...card} />;
        })}
      </Box.Grid>
    </SectionBox>
  );
};

export default Lojas;
export { LojasRoute, MinhasLojasRoute };
