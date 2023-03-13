import React from "react";
import Logo from '../../assets/images/logo.svg';
import './index.css';
import NavBar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

// Routes
import { HomeRoute } from "../../pages/Home";
import { LojasRoute } from "../../pages/Lojas";
import { EventosRoute } from "../../pages/Eventos";

// Router
import { Link } from "react-router-dom";

// Icones
import {
  Whatsapp,
  Instagram,
  ArrowRight,
  House,
  Shop,
  CalendarWeek
} from 'react-bootstrap-icons';

const NavigationBar = () => {
  return (
    <React.Fragment>
      <header className="header-bar">
        <div className="header-bar__social">
          <a href="#" className="social__link whatsapp__link">
            <Whatsapp className="social__icon whatsapp__icon" />
          </a>
          <a href="#" className="social__link insta__link">
            <Instagram className="social__icon insta__icon" />
          </a>
        </div>
        <Link to={HomeRoute} className='header-bar__trabalhe'>
          Trabalhe conosco <ArrowRight className="trabalhe__icon" />
        </Link>
      </header>

      <NavBar className="nav-bar m-0 p-0" expand="lg">
        <Container className="p-0 m-0">
          <Container className="nav-bar--container m-0 p-0 px-3 align-items-center w-100">
            <NavBar.Brand className="nav-bar__logo--container m-0 p-0" href="#home">
              <img className="nav-bar__logo" src={Logo} alt="Logo Ipe Center" />
            </NavBar.Brand>
            <NavBar.Toggle className="menu__button border-0 px-2 py-2" aria-controls="menuList" />
          </Container>
          <NavBar.Collapse className="menu p-0 m-0" id="menuList">
            <Nav className="menu__links me-auto d-flex">
              {/* Aqui vem os links das rotas do site */}
              <Link to={HomeRoute} className="menu__link px-3 py-2 w-100 d-flex align-items-center text-decoration-none">
                <House className="menu__link__icon" />Home
              </Link>
              <Link to={LojasRoute} className="menu__link px-3 py-2 w-100 d-flex align-items-center text-decoration-none">
                <Shop className="menu__link__icon" />Lojas
              </Link>
              <Link to={EventosRoute} className="menu__link px-3 py-2 w-100 d-flex align-items-center text-decoration-none">
                <CalendarWeek className="menu__link__icon" />Eventos
              </Link>
            </Nav>
          </NavBar.Collapse>
        </Container>
      </NavBar>

    </React.Fragment>
  );
};

export default NavigationBar;