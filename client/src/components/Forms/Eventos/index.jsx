import React from "react";


import "./CSS/mobile.css"
import "./CSS/desktop.css"

import {
    Plus,
} from 'react-bootstrap-icons'

import { IMaskInput } from "react-imask";

const EventosForm = () => {
    return (
        <section  className="eventos">
            <div className="eventos__title">
                <Plus className="title__icone"/>
                <span className="title__texto">Novo Evento</span>
            </div>
            <form action="" method="post" className="eventos__formulario">
                <fieldset className="formulario--eventos">
                    <p className="formulario--eventos__title">Nome:</p>
                    <input type="text" className="formulario--eventos__input" placeholder="Nome do evento"/>
                </fieldset>
                <fieldset className="formulario--eventos">
                    <p className="formulario--eventos__title">Data de início:</p>
                    <IMaskInput id="" className="formulario--eventos__input" placeholder="Data de início" mask="00/00/0000"/>
                </fieldset>
                <fieldset className="formulario--eventos">
                    <p className="formulario--eventos__title">Data de término:</p>
                    <IMaskInput id="" className="formulario--eventos__input" placeholder="Data de término" mask="00/00/0000"/>
                </fieldset>
                <button type="submit" className="eventos__formulario--button">
                    <span className="formulario--button__text">Criar</span>
                    <Plus className="formulario--button__icon"/>
                </button>
            </form>
        </section>
    );
};

export default EventosForm;