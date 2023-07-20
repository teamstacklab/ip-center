import React from "react";
import "./CSS/mobile.css";
import "./CSS/desktop.css";
import * as Icons from "react-bootstrap-icons"
import { Title } from "@/components/Title";

const LojasRoute = '/lojas';
const MinhasLojasRoute = '/lojas/minhas';

const Lojas = (props) => {
  return (
    <section className="home-lojas">
      <Title icon={<Icons.Shop/>}>Lojas</Title>
      <div className="lojas__estabelecimento">
        <div className="estabelecimento__container">

        </div>
      </div>
    </section>
  );
};


export default Lojas;
export { LojasRoute, MinhasLojasRoute };