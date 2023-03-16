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
          <span className="data__trabalho">
            <PeopleFill className="data__icon" />
            <Link to={HomeRoute}>Trabalhe conosco</Link>
          </span>
          <span className="data__horarios">
            <span>
              <ClockFill className="data__icon" />
              <p className="data__title">Horários de funcionamento</p>
            </span>
            <ul className="data__list">
              <li className="list__item"></li>
              <li className="list__item"></li>
            </ul>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;