import React from "react"

import "./CSS/mobile.css"
import "./CSS/desktop.css"

import {
  CheckLg,
  X
} from 'react-bootstrap-icons'
import api from "../../api"
import { ApiDemandas } from "../../api/routes";
import { useParams } from 'react-router-dom'

const Demanda = (props) => {
  const autorizar = () => {
    api.post(`${ApiDemandas.authorizate}/${props.id}`).then((res) => {
      console.log(res)
    }).catch(err => console.log(err))
  }
  const deletar = () => {
    api.post(`${ApiDemandas.delete}/${props.id}`).then((res) => {
      console.log(res)
    }).catch(err => console.log(err))
  }
  return (
    <section className="demandas--resgistro">
      <div className="demandas__dados">
        <h2 className="dados__title">{props.loja}</h2>
        <span className="dados__infor">
          <h3 className="infor__title">Lojista:</h3>
          <p className="infor__name">{props.name}</p>
        </span>
        <span className="dados__infor">
          <h3 className="infor__title infor__title--cpf ">Cpf:</h3>
          <p className="infor__name">{props.cpf}</p>
        </span>
        <span className="dados__infor">
          <h3 className="infor__title">Efetuado em:</h3>
          <p className="infor__name">{props.createdAt}</p>
        </span>
      </div>
      <div className="demandas__action">
        <h3 className="action__title">Autorizar?</h3>
        <div className="action__button">
          <button onClick={autorizar} className="button--action button--action--aceitar">
            <CheckLg className="button--action__icon" />
          </button>
          <button onClick={deletar} className="button--action button--action--recusar" >
            <X className="button--action__icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Demanda;