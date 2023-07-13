import React from "react";
import Logo from '../../assets/images/logo.svg';
import BSNavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// CSS
import "./CSS/mobile.css";
import "./CSS/desktop.css";

// Routes
import { HomeRoute } from "../../pages/Home";
import { LojasRoute, MinhasLojasRoute } from "../../pages/Stores";
import { LoginRoute } from "../../pages/Login";
import { EventosRoute } from "../../pages/Events";
import { RegisterRoute } from "../../pages/Register";
import { DemandasRoute } from "../../pages/Demands";

// Router
import { Link, useNavigate } from "react-router-dom";

// Icones
import {
  Whatsapp,
  Instagram,
  ArrowRight,
  House,
  Shop,
  CalendarWeek,
  Person,
  CheckAll
} from 'react-bootstrap-icons';

const NavBar = () => {
  const accessToken = JSON.parse(sessionStorage.getItem('access_token'));
  const user = JSON.parse(sessionStorage.getItem('user'));

  const [state, setState] = React.useState({ accessToken, user });

  const navigate = useNavigate();

  const logOut = () => {
    if (accessToken !== null) {
      sessionStorage.clear()
      navigate(HomeRoute);
      setState({ accessToken: null, user: null })
    }
  }

  const AuthActions = () => {
    if (accessToken !== null) {
      return (
        <div className="menu__actions">
          <Person className="menu__link__icon" />
          <p className="m-0 p-0 actions__text">{user.name}</p>
          <button className="actions__btn actions__register menu__link px-3 py-0 text-decoration-none" onClick={logOut}>Logout</button>
        </div>
      )
    } else {
      return (
        <div className="menu__actions">
          <p className="m-0 p-0 actions__text">É Lojista?</p>
          <div className="actions__container">
            <Link to={LoginRoute} className="actions__btn actions__login menu__link px-3 py-0 text-decoration-none">
              Entrar
            </Link>
            <Link to={RegisterRoute} className="actions__btn actions__register menu__link px-3 py-0 text-decoration-none">
              Registrar
            </Link>
          </div>
        </div>
      )
    }
  }

  const AdminActions = () => {
    if (accessToken !== null) {
      if (user?.isAdmin) {
        return (
          <React.Fragment>
            <Link to={MinhasLojasRoute} className="menu__link px-3 py-2 w-100 d-flex align-items-center text-decoration-none">
              <Shop className="menu__link__icon" />MinhasLojas
            </Link>
            <Link to={DemandasRoute} className="menu__link px-3 py-2 w-100 d-flex align-items-center text-decoration-none">
              <CheckAll className="menu__link__icon" />Demandas
            </Link>
          </React.Fragment>
        )
      } else {
        return (
          <Link to={MinhasLojasRoute} className="menu__link px-3 py-2 w-100 d-flex align-items-center text-decoration-none">
            <Shop className="menu__link__icon" />MinhasLojas
          </Link>
        );
      }
    }
  }

  return (
    <React.Fragment>
      <header className="top-bars position-fixed w-100">
        <div className="header-bar">
          <div className="header-bar__social">
            <a target='_blank' rel="noopener noreferrer" href="https://api.whatsapp.com/send/?phone=%2B5588993808414&text&type=phone_number&app_absent=0" className="social__link whatsapp__link">
              <Whatsapp className="social__icon whatsapp__icon" />
            </a>
            <a target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/ipe_center/" className="social__link insta__link">
              <Instagram className="social__icon insta__icon" />
            </a>
          </div>
          <div className="header-bar__greeting">
            <p className="greeting__text">Seja bem vindo ao shopping Ipê Center! Navegue pelas nossas lojas, eventos e tudo mais!</p>
          </div>
          <Link to={RegisterRoute} className='header-bar__trabalhe'>
            Trabalhe conosco <ArrowRight className="trabalhe__icon" />
          </Link>
        </div>
        <BSNavBar className="nav-bar w-100 m-0 py-0" expand="lg">
          <div className="nav-bar-container m-0 p-0 px-3 align-items-center w-100">
            <BSNavBar.Brand className="nav-bar__logo-container m-0 p-0" href="#home">
              <img className="nav-bar__logo" src={Logo} alt="Logo Ipe Center" />
            </BSNavBar.Brand>
            <BSNavBar.Toggle className="ms-auto menu__button border-0 px-2 py-2" aria-controls="menuList" />
          </div>
          <BSNavBar.Collapse className="menu p-0 m-0" id="menuList">
            <Nav className="menu__links me-auto d-flex">
              {/* Aqui vem os links das rotas do site */}
              <Link to={HomeRoute} className="menu__link menu__link--nav px-3 py-2 w-100 d-flex align-items-center text-decoration-none">
                <House className="menu__link__icon" />Home
              </Link>
              <Link to={LojasRoute} className="menu__link menu__link--nav px-3 py-2 w-100 d-flex align-items-center text-decoration-none">
                <Shop className="menu__link__icon" />Lojas
              </Link>
              <Link to={EventosRoute} className="menu__link menu__link--nav px-3 py-2 w-100 d-flex align-items-center text-decoration-none">
                <CalendarWeek className="menu__link__icon" />Eventos
              </Link>
              <AdminActions />
            </Nav>
            {/*Área login*/}
            <AuthActions />
          </BSNavBar.Collapse>
        </BSNavBar>
      </header>
    </React.Fragment>
  );
};

export default NavBar;