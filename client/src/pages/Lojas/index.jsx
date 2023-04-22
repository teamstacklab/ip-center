import React from "react";
import "./CSS/mobile.css";
import "./CSS/desktop.css";
import CardLoja from "../../components/CardLoja"
import { Plus, Shop } from 'react-bootstrap-icons'

const LojasRoute = '/lojas';
const MinhasLojasRoute = '/lojas/minhas';

const Lojas = (props) => {
  const accessToken = JSON.parse(sessionStorage.getItem('access_token'));
  const user = JSON.parse(sessionStorage.getItem('user'));

  const [lojas, setLojas] = React.useState([]);

  return (
    <section className="home-lojas">
      <div className="lojas__navegation">
        <div className="navegation-lojas">
          <Shop className="navegation-lojas__icons" />
          <span className="navegation-lojas__title">Lojas</span>
        </div>
        <div className="navegation-actions">
        </div>
      </div>
      <div className="lojas__estabelecimento">
        <div className="estabelecimento__container">
          {lojas.map(loja => {
            return (
              <CardLoja {...loja} />
            );
          })}
        </div>
      </div>
    </section>
  );
};


export default Lojas;
export { LojasRoute, MinhasLojasRoute };