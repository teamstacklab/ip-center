import React from "react";

// CSS
import "./CSS/mobile.css";
import "./CSS/desktop.css";

//Styled
import { Div, Header, LogOut, Nav, NavBar } from "./Style/index";

// Routes
import { HomeRoute } from "../../pages/Home";
import { MinhasLojasRoute } from '../../pages/Stores';

// Router
import { Link, useNavigate } from "react-router-dom";

// Icones
import {
  Shop
} from 'react-bootstrap-icons';

import Bar from '../Bar'
import LogoHeader from "../LogoHeader";
import MenuNavigation from "../MenuNavigation";
import AuthNavigation from "../AuthNavigation";
import AuthNavigationUser from "../AuthNavigationUser/index,";
import UserAdmin from "../UserAdmin";



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
      AuthNavigationUser(User.name)
      return (
        <Div>
          <AuthNavigationUser />
          <LogOut as='button'>LogOut</LogOut>
        </Div>
      )
    } else {
      return (
        <AuthNavigation />
      )
    }
  }

  const AdminActions = () => {
    if (accessToken !== null) {
      if (user?.isAdmin) {
        return (
          <UserAdmin />
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
            <Nav >
              <MenuNavigation />
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