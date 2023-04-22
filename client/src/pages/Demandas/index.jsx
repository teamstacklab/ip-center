import React from "react";

import './CSS/mobile.css';
import './CSS/desktop.css';

import Demanda from "../../components/Demanda";

import {
  CheckAll
} from 'react-bootstrap-icons'

import api from "../../api";
import { ApiDemandas } from "../../api/routes";

const DemandasRoute = '/demandas';

const Demandas = () => {
  const [demandas, setDemandas] = React.useState([]);
  const accessToken = JSON.parse(sessionStorage.getItem('access_token'));
  const user = JSON.parse(sessionStorage.getItem('user'));

  console.log(user, accessToken)

  React.useEffect(() => {
    
    if (accessToken !== null) {
      if (user.isAdmin) {
        api.get(ApiDemandas.all).then((res) => {
          console.log(res.data)
          setDemandas(res.data)
        }).catch(err => console.log(err))
      }
    }
  }, [])

  return (
    <section className="demandas">
      <div className="demandas__title">
        <CheckAll className="title__icon" />
        <h1 className="title__text">Demandas de Registro</h1>
      </div>
      <div className="demandas__cards">
        {demandas.map(demanda => {
          return <Demanda {...demanda} />
        })}
      </div>
    </section>
  );
};


export default Demandas;
export { DemandasRoute };