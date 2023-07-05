import React from "react";

import "./CSS/mobile.css"
import "./CSS/desktop.css"

import {
    Plus,
} from 'react-bootstrap-icons'



const ComunicadosForm = () => {
    return (
        <section className="comunicados">
            <div className="comunicados__title">
                <Plus className="title__icon" />
                <span className="title__text">Novo Comunicado</span>
            </div>
            <form action="" method="post" className="comunicados__formulario">
                <fieldset className="formulario--comunicados">
                    <p className="formulario--comunicados__title">Nome:</p>
                    <input type="text" className="formulario--comunicados__input" placeholder="Nome do comunicado" />
                </fieldset>
                <fieldset className="formulario--comunicados">
                    <p className="formulario--comunicados__title">Descrição:</p>
                    <textarea id="" rows="5" className="formulario--comunicados__input" placeholder="Descrição"></textarea>
                </fieldset>
                <button type="submit" className="comunicados__formulario--button">
                    <span className="formulario--button__text">Criar</span>
                    <Plus className="formulario--button__icon" />
                </button>
            </form>
        </section>
    );
};

export default ComunicadosForm;