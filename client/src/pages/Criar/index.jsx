import React from "react";

import "./CSS/mobile.css"
import "./CSS/desktop.css"

import {
    Plus,
} from 'react-bootstrap-icons'

const AdminRoute = '/criar';

const Criar = () => {
    return (
        <section className="loja">
            <form action="#" method="post" className="formulario">
                <div className="loja--description">
                    <div className="loja--description__title">
                        <Plus className="title__icon" />
                        <h1 className="title__titulo" id="" >Criar loja</h1>
                    </div>
                    <button type="submit" className="formulario--button">
                        <span className="button__title">Criar</span>
                        <Plus className="button__icon" />
                    </button>
                </div>
                <fieldset className="formulario__loja">
                    <div className="loja--formulario">
                        <fieldset className="formulario--loja">
                            <p className="formulario__title">Nome da loja:</p>
                            <input type="text" id="" className="formulario__inputs" placeholder="Nome da loja" />
                        </fieldset>
                        <fieldset className="formulario--loja">
                            <p className="formulario__title">Slogan:</p>
                            <input type="text" id="" className="formulario__inputs" placeholder="Slogan" />
                        </fieldset>
                        <fieldset className="formulario--loja">
                            <p className="formulario__title">Localização:</p>
                            <input type="text" id="" className="formulario__inputs" placeholder="Localização" />
                        </fieldset>
                        <fieldset className="formulario--loja">
                            <p className="formulario__title">Imagens:</p>
                            <label htmlFor="file" className="formulario--loja__file">
                                <Plus className="file__icon" />
                            </label>
                            <input type="file" id="file" className="formulario__inputs--file" accept=".png, .jpg, .jpeg" />
                        </fieldset>
                    </div>
                    <div className="loja--formulario">
                        <fieldset className="formulario--loja">
                            <p className="formulario__title">Categoria:</p>
                            <input type="text" id="" className="formulario__inputs" placeholder="Categorias" />
                        </fieldset>
                        <fieldset className="formulario--loja">
                            <p className="formulario__title">Produto e/ou serviços:</p>
                            <input type="text" id="" className="formulario__inputs" placeholder="Produto e/ou serviços" />
                        </fieldset>
                        <fieldset className="formulario--loja">
                            <p className="formulario__title">Descrição:</p>
                            <input type="text" id="" className="formulario__inputs" placeholder="Descrição" />
                        </fieldset>
                        <fieldset className="formulario--loja">
                            <p className="formulario__title">Outras informações:</p>
                            <textarea className="formulario__inputs fomulario__text" id="" rows="5" placeholder="Outras informações">
                            </textarea>
                        </fieldset>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};


export default Criar;
export { AdminRoute };