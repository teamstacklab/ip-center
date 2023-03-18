import React from "react";
import './index.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from "../../assets/images/logo-alternativa.svg"

// Icons
import {
  Whatsapp,
  Instagram,
  PeopleFill,
  ClockFill,
  GeoAltFill
} from "react-bootstrap-icons";

// Routes
import { HomeRoute } from "../../pages/Home";
import { LojasRoute } from "../../pages/Lojas";
import { EventosRoute } from "../../pages/Eventos";

// Router
import { Link, Route } from "react-router-dom";


const Footer = () => {
  return (
    <footer>
      <div className="social">
        <div className="social__logo">
          <img src={logo} className="logo__imagem" alt="Logo Ipê Center" />
        </div>
        <div className="social__items">
          <a href="#" className="item__link">
            <Whatsapp className="link__icon" />
          </a>
          <a href="#" className="item__link">
            <Instagram className="link__icon" />
          </a>
        </div>
      </div>
      <Nav className="footer-bar">
        {/* Aqui vem os links das rotas do site */}
        <Link to={HomeRoute} className="footer__link">
          Início
        </Link>
        <Link to={LojasRoute} className="footer__link">
          Lojas
        </Link>
        <Link to={EventosRoute} className="footer__link">
          Eventos
        </Link>
      </Nav>
      <hr className="footer__separator" />
      <div className="footer__info">
        <p className="info__meta">&copy;023 - Shopping Ipê Center. Todos os direitos reservados.</p>
        <div className="info__data">
          <div className="data__trabalho">
            <PeopleFill className="data__icon" />
            <Link className="data__link" to={HomeRoute}>Trabalhe conosco</Link>
          </div>
          <div className="data__horarios">
            <div className="data__elementos-horarios">
              <ClockFill className="data__icon" />
              <p className="data__title">Horários de funcionamento</p>
            </div>
            <ul className="data__list">
              <li className="list__item">De segunda a quarta: <span className="item-negrito">das <span className="item-negrito--hora">08:00h</span> às <span className="item-negrito--hora">20:00h</span></span></li>
              <li className="list__item">Da quita ao domingo: <span className="item-negrito">das <span className="item-negrito--hora">08:00h</span> às <span className="item-negrito--hora">22:00h</span></span></li>
            </ul>
          </div>
          <div className="data__endereco">
            <GeoAltFill className="data__icon"/>
            <a href="#" className="data__text">Rua Santo Antônio, No. 60 <br />Araripe, Ceará</a>
          </div>
        </div>
        <div className="data__maps">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.5623520380977!2d-40.13716997079871!3d-7.21236426918099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x79f5ace6a6c6549%3A0xdb7a397a650e8f34!2sR.%20Santo%20Ant%C3%B4nio%2C%20346%20-%20Araripe%2C%20CE%2C%2063170-000!5e0!3m2!1spt-BR!2sbr!4v1679164487566!5m2!1spt-BR!2sbr" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;