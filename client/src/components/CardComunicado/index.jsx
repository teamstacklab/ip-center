import React from "react";
import './CSS/mobile.css';
import './CSS/desktop.css';

const CardComunicado = (props) => {
  return (
    <div className="infor-comunicados__card">
      <h3 className="card__title" id="">{props.name}</h3>
      <p className="card__descreption">{props.description}</p>
    </div>
  );
}

export default CardComunicado;