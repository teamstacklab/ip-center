import { styled } from "styled-components";
import NavReact from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

//Rotas
import { HomeRoute } from "../../pages/Home";
import { LojasRoute } from "../../pages/Stores";
import { EventosRoute } from "../../pages/Events";

const Nav = styled(NavReact)`
    position: relative;
    top: -72px;
    display: inline-flex;
    justify-content: left;
    margin-left: 175px;
    gap: 30px;
    @media screen and (max-width: 1440px) {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        position: static;
        margin: 0;
        padding: 0;
    }

    @media screen and (max-width: 340px) {
        gap: 0;
    }
`

const LinkFooter = styled(Link)`
    text-decoration: none;
    font-size: 1.2em;
    color: var(--orange-tertiary);
    transition: color  .2s;

    &:hover {
        color: var(--orange-tertiary-hover);
    }

    @media screen and (max-width: 1440px) {
        text-decoration: none;
        background: var(--brown-secondary);
        font-weight: 400;
        padding: 4px 10px;
        border-radius: 8px;
        font-size: 1rem;

    }
`

function NavFooter() {
    return (
        <Nav >
            {/* Aqui vem os links das rotas do site */}
            <LinkFooter to={HomeRoute} >
                Início
            </LinkFooter>
            <LinkFooter to={LojasRoute} >
                Lojas
            </LinkFooter>
            <LinkFooter to={EventosRoute} >
                Eventos
            </LinkFooter>
        </Nav>
    )
}

export default NavFooter