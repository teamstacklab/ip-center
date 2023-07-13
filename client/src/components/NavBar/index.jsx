import React from "react";
import * as Icons from "react-bootstrap-icons";
import { NavLink, useNavigate } from "react-router-dom";
import BSNavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { HomeRoute } from "@/pages/Home";
import { LojasRoute, MinhasLojasRoute } from "@/pages/Stores";
import { LoginRoute } from "@/pages/Login";
import { EventosRoute } from "@/pages/Events";
import { RegisterRoute } from "@/pages/Register";
import { DemandasRoute } from "@/pages/Demands";
import Logo from "@/assets/images/logo.svg";
import "./CSS/mobile.css";
import "./CSS/desktop.css";

const NavBar = () => {
  const accessToken = JSON.parse(sessionStorage.getItem("access_token"));
  const user = JSON.parse(sessionStorage.getItem("user"));

  const [state, setState] = React.useState({ accessToken, user });

  const navigate = useNavigate();

  const logOut = () => {
    if (accessToken !== null) {
      sessionStorage.clear();
      navigate(HomeRoute);
      setState({ accessToken: null, user: null });
    }
  };

  const AuthActions = () => {
    if (accessToken !== null) {
      return (
        <div className="menu__actions">
          <Icons.Person className="menu__link__icon" />
          <p className="m-0 p-0 actions__text">{user.name}</p>
          <button
            className="actions__btn actions__register menu__link px-3 py-0 text-decoration-none"
            onClick={logOut}
          >
            Logout
          </button>
        </div>
      );
    } else {
      return (
        <div className="menu__actions">
          <p className="m-0 p-0 actions__text">É Lojista?</p>
          <div className="actions__container">
            <NavLink
              to={LoginRoute}
              className="actions__btn actions__login menu__link px-3 py-0 text-decoration-none"
            >
              Entrar
            </NavLink>
            <NavLink
              to={RegisterRoute}
              className="actions__btn actions__register menu__link px-3 py-0 text-decoration-none"
            >
              Registrar
            </NavLink>
          </div>
        </div>
      );
    }
  };

  const AdminActions = () => {
    if (accessToken !== null) {
      if (user?.isAdmin) {
        return (
          <React.Fragment>
            <NavLink
              to={MinhasLojasRoute}
              className="menu__link px-3 py-2 w-100 d-flex align-items-center text-decoration-none"
            >
              <Icons.Shop className="menu__link__icon" />
              MinhasLojas
            </NavLink>
            <NavLink
              to={DemandasRoute}
              className="menu__link px-3 py-2 w-100 d-flex align-items-center text-decoration-none"
            >
              <Icons.CheckAll className="menu__link__icon" />
              Demandas
            </NavLink>
          </React.Fragment>
        );
      } else {
        return (
          <NavLink
            to={MinhasLojasRoute}
            className="menu__link px-3 py-2 w-100 d-flex align-items-center text-decoration-none"
          >
            <Icons.Shop className="menu__link__icon" />
            MinhasLojas
          </NavLink>
        );
      }
    }
  };

  return (
    <React.Fragment>
      <header className="top-bars position-fixed w-100">
        <div className="header-bar">
          <div className="header-bar__social">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://api.whatsapp.com/send/?phone=%2B5588993808414&text&type=phone_number&app_absent=0"
              className="social__link whatsapp__link"
            >
              <Icons.Whatsapp className="social__icon Icons.Whatsapp__icon" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/ipe_center/"
              className="social__link insta__link"
            >
              <Icons.Instagram className="social__icon insta__icon" />
            </a>
          </div>
          <div className="header-bar__greeting">
            <p className="greeting__text">
              Seja bem vindo ao shopping Ipê Center! Navegue pelas nossas lojas,
              eventos e tudo mais!
            </p>
          </div>
          <NavLink to={RegisterRoute} className="header-bar__trabalhe">
            Trabalhe conosco
            <Icons.ArrowRight className="trabalhe__icon" />
          </NavLink>
        </div>
        <BSNavBar className="nav-bar w-100 m-0 py-0" expand="lg">
          <div className="nav-bar-container m-0 p-0 px-3 align-items-center w-100">
            <BSNavBar.Brand className="nav-bar__logo-container m-0 p-0">
              <NavLink to={HomeRoute}>
                <img
                  className="nav-bar__logo"
                  src={Logo}
                  alt="Logo Ipe Center"
                />
              </NavLink>
            </BSNavBar.Brand>
            <BSNavBar.Toggle
              className="ms-auto menu__button border-0 px-2 py-2"
              aria-controls="menuList"
            />
          </div>
          <BSNavBar.Collapse className="menu p-0 m-0">
            <Nav className="menu__links me-auto d-flex">
              <NavLink
                to={HomeRoute}
                className="menu__link menu__link--nav px-3 py-2 w-100 d-flex align-items-center text-decoration-none"
              >
                <Icons.HouseDoor className="menu__link__icon" />
                Home
              </NavLink>
              <NavLink
                to={LojasRoute}
                className="menu__link menu__link--nav px-3 py-2 w-100 d-flex align-items-center text-decoration-none"
              >
                <Icons.Shop className="menu__link__icon" />
                Lojas
              </NavLink>
              <NavLink
                to={EventosRoute}
                className="menu__link menu__link--nav px-3 py-2 w-100 d-flex align-items-center text-decoration-none"
              >
                <Icons.CalendarWeek className="menu__link__icon" />
                Eventos
              </NavLink>
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
