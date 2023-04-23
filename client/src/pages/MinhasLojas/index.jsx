import React from "react";
import "./CSS/mobile.css";
import "./CSS/desktop.css";
import { Plus, Shop } from 'react-bootstrap-icons'

import Button from 'react-bootstrap/Button'

import QueryActions from "../../components/QueryActions";
import { Link } from "react-router-dom";
import { CriarLojaRoute } from "../CriarLoja";

const MinhasLojasRoute = '/lojas/minhas';

const MinhasLojas = (props) => {
  const accessToken = JSON.parse(sessionStorage.getItem('access_token'));
  const user = JSON.parse(sessionStorage.getItem('user'));

  const [lojas, setLojas] = React.useState([]);

  React.useEffect(() => {

    if (accessToken !== null) {
      api.get(`${ApiLojas.all}/${user.id}`)
        .then((res) => {
          setLojas(res.data)
        })
        .catch(err => console.log(err))
    }
    if (user.isAdmin) {
      api.get(ApiLojas.all)
        .then((res) => {
          setLojas(res.data);
        })
        .catch(err => console.log(err))
    }
  }, [])

  return (
    <section className="home-lojas">
      <div className="lojas__navegation">
        <div className="navegation-lojas">
          <Shop className="navegation-lojas__icons" />
          <span className="navegation-lojas__title">{props.individual ? "Minhas" : null} Lojas</span>
          <Link to={CriarLojaRoute} className="btn navigation__button">Criar <Plus size={26} /></Link>
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


export default MinhasLojas;
export { MinhasLojasRoute };