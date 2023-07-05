import React from "react";

import {
  Plus,
} from 'react-bootstrap-icons'

import "./CSS/mobile.css"
import "./CSS/desktop.css"


const CriarLojaRoute = '/lojas/criar';

const CriarLoja = () => {
  return (
    <section className="loja">
      <form method="post" className="formulario">
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
              <input onChange={(e) => setName(e.target.value)} type="text" id="nome" className="formulario__inputs" placeholder="Nome da loja" />
            </fieldset>
            <fieldset className="formulario--loja">
              <p className="formulario__title">Slogan:</p>
              <input onChange={(e) => setSlogan(e.target.value)} type="text" id="slogan" className="formulario__inputs" placeholder="Slogan" />
            </fieldset>
            <fieldset className="formulario--loja">
              <p className="formulario__title">Localização:</p>
              <input onChange={(e) => setLocation(e.target.value)} type="text" id="location" className="formulario__inputs" placeholder="Localização" />
            </fieldset>
            <fieldset className="formulario--loja">
              <p className="formulario__title">Imagens:</p>
              <input onChange={(e) => setImages(e.target.value)} type="text" id="images" placeholder="Coloque os links separados por espaços" className="formulario__inputs" />
            </fieldset>
            <fieldset className="formulario--loja">
              <p className="formulario__title">Whatsapp:</p>
              <input onChange={(e) => setWhatsapp(e.target.value)} type="text" id="images" placeholder="Coloque os links separados por espaços" className="formulario__inputs" />
            </fieldset>
            <fieldset className="formulario--loja">
              <p className="formulario__title">Instagram:</p>
              <input onChange={(e) => setInstagram(e.target.value)} type="text" id="images" placeholder="Coloque os links separados por espaços" className="formulario__inputs" />
            </fieldset>
          </div>
          <div className="loja--formulario">
            <fieldset className="formulario--loja">
              <p className="formulario__title">Logo:</p>
              <input onChange={(e) => setLogo(e.target.value)} type="text" id="logo" className="formulario__inputs" placeholder="Categorias" />
            </fieldset>
            <fieldset className="formulario--loja">
              <p className="formulario__title">Categoria:</p>
              <select onChange={(e) => setCategory(e.target.value)} className='formulario__inputs' id="categoria-filter">
                {categorias.map(categoria => {
                  return <option className="categoria" value={categoria.id}>{categoria.name}</option>
                })}
              </select>
            </fieldset>
            <fieldset className="formulario--loja">
              <p className="formulario__title">Produto e/ou serviços:</p>
              <input onChange={(e) => setServices(e.target.value)} type="text" id="services" className="formulario__inputs" placeholder="Produto e/ou serviços" />
            </fieldset>
            <fieldset className="formulario--loja">
              <p className="formulario__title">Descrição:</p>
              <input onChange={(e) => setDescription(e.target.value)} type="text" id="description" className="formulario__inputs" placeholder="Descrição" />
            </fieldset>
            <fieldset className="formulario--loja">
              <p className="formulario__title">Outras informações:</p>
              <textarea onChange={(e) => setAdditionalInfo(e.target.value)} className="formulario__inputs fomulario__text" id="" rows="5" placeholder="Outras informações">
              </textarea>
            </fieldset>
          </div>
        </fieldset>
      </form>
    </section>
  );
};


export default CriarLoja;
export { CriarLojaRoute };