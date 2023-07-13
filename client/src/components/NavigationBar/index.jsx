import React from "react";
import Nav from 'react-bootstrap/Nav';

// CSS
import "./CSS/mobile.css";
import "./CSS/desktop.css";

//Styled
import { Header, NavBar } from "./Style/index";

// Routes
import { HomeRoute } from "../../pages/Home";
import { MinhasLojasRoute } from "../../pages/Lojas";
import { DemandasRoute } from "../../pages/Demandas";

// Router
import { Link, useNavigate } from "react-router-dom";

// Icones
import {
  Shop,
  CheckAll
} from 'react-bootstrap-icons';

import Bar from '../Bar'
import LogoHeader from "../LogoHeader";
import MenuNavigation from "../MenuNavigation";
import AuthNavigation from "../AuthNavigation";
import AuthNavigationUser from "../AuthNavigationUser/index,";


const NavigationBar = () => {
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
        <AuthNavigation/>
      )
    } else {
      return (
        <AuthNavigationUser/>
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
      <Header>
        <Bar />
        <NavBar expand="lg">
          <LogoHeader />
          <NavBar.Collapse className="menu" id="menuList">
            <Nav className="me-auto d-flex">
              <MenuNavigation/>
              <AdminActions />
            </Nav>
            {/*Área login*/}
            <AuthActions />
          </NavBar.Collapse>
        </NavBar>
      </Header>
    </React.Fragment>
  );
};

export default NavigationBar;