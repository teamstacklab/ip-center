import React from "react";
import './index.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

// Routes
import { HomeRoute } from "../../pages/Home";
import { LojasRoute } from "../../pages/Lojas";
import { EventosRoute } from "../../pages/Eventos";


const Footer = () => {
  return (
    <Nav>
      <Nav.Item>
        <Nav.Link>Renan</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Footer;