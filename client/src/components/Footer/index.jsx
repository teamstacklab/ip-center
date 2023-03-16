import React from "react";
import './index.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Whatsapp, Instagram } from "react-bootstrap-icons";

// Routes
import { HomeRoute } from "../../pages/Home";
import { LojasRoute } from "../../pages/Lojas";
import { EventosRoute } from "../../pages/Eventos";

// Router
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer>
      <div className="social">
        <div className="social__logo">
          <img src="" alt="Logo Ipê Center" />
        </div>
        <div className="social__item">
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
    </footer>
  );
};

export default Footer;