import React from "react";
import Logo from '../../assets/images/logo.svg';
import './index.css';
import NavBar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

// Icones
import {
  Whatsapp,
  Instagram,
  List,
  ArrowRight
} from 'react-bootstrap-icons'

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
        <a className="header-bar__trabalhe" href="#">
          Trabalhe conosco <ArrowRight className="trabalhe__icon" />
        </a>
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
              <Nav.Link className="menu__link px-3 py-2 w-100 d-flex" href="#">Home</Nav.Link>
              <Nav.Link className="menu__link px-3 py-2 w-100 d-flex" href="#">Lojas</Nav.Link>
              <Nav.Link className="menu__link px-3 py-2 w-100 d-flex" href="#">Eventos</Nav.Link>
            </Nav>
          </NavBar.Collapse>
        </Container>
      </NavBar>

    </React.Fragment>
  );
};

export default NavigationBar;