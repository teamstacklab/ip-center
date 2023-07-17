import React from "react";

//Styled
import { Div, Header, LogOut, Nav, NavBar } from "./Style/index";

// Routes
import { HomeRoute } from "../../pages/Home";

// Router
import { Link, useNavigate } from "react-router-dom";


import Bar from '../Bar'
import LogoHeader from "../LogoHeader";
import MenuNavigation from "../MenuNavigation";
import Navigation from "../Auth/Navigation"
import Admin from "../Auth/Admin";
import NavigationUser from "../Auth/NavigationUser/index,";
import User from "../Auth/User";



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
      //NavigationUser(User.name)
      return (
        <Div>
          <NavigationUser />
          <LogOut as='button' onClick={logOut}>LogOut</LogOut>
        </Div>
      )
    } else {
      return (
        <Navigation />
      )
    }
  }

  const AdminActions = () => {
    if (accessToken !== null) {
      if (user?.isAdmin) {
        return (
          <Admin />
        )
      } else {
        return (
          < User />
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