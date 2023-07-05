import React from "react";
import "./CSS/mobile.css";
import "./CSS/desktop.css";
import {
  ArrowRight,
  Whatsapp,
} from 'react-bootstrap-icons'
import { Link } from "react-router-dom";
import { LojasRoute } from "../../pages/Lojas";


export default function LojaCard(props) {
  const cardDescription = (text, chars) => {
    if (text.length >= chars) {
      return text.slice(0, chars) + '...';
    } else {
      return text;
    }
  }
  return (
    <div className="estabelecimento__card">
      <img src={props.images[0]} alt={props.images[0]} className="card-imagem" />
      <h2 className="card-title">{props.name}</h2>
      <p className="card-description">{cardDescription(props.description, 100)}</p>
      <div className="card-buttons">
        <Link to={`${LojasRoute}/${props.id}`} className="card-btn--ver">
          <span className="card-btn__title">Ver loja</span>
          <ArrowRight className="card-btn--ver__icon" />
        </Link>
        <a target='_blank' rel="noreferrer" href={`https://api.whatsapp.com/send/?phone=%2B55${props.whatsapp}&text&type=phone_number&app_absent=0`} className="card-btn--whatsapp">
          <Whatsapp className="card-btn--whatsapp__icon" />
        </a>
      </div>
    </div>
  );
};