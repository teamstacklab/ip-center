import Nav from 'react-bootstrap/Nav';
import { styled } from 'styled-components';

// Routes
import { HomeRoute } from "../../pages/Home";
import { LojasRoute } from "../../pages/Stores";
import { EventosRoute } from "../../pages/Events";


import {
    House,
    Shop,
    CalendarWeek,
} from 'react-bootstrap-icons';

export const LinkMenu = styled.a`
    color: var(--marrom);
    border: none;
    gap: 6px;
    display: flex;
    text-decoration: none;
    padding: 5px 0;
    align-items: center;
    cursor: pointer;
    margin-left: 16px;
    
    @media screen and (min-width: 1279px) {
        margin-right: 1em;
        font-size: 18px;
        &:hover {
            color: var(--marrom-hover-nav);
        }
    }
`


function MenuNavigation() {
    return (
        <>
            <LinkMenu to={HomeRoute}>
                <House className="menu__link__icon" />
                Home
            </LinkMenu>
            <LinkMenu to={LojasRoute}>
                <Shop className="menu__link__icon" />
                Lojas
            </LinkMenu>
            <LinkMenu to={EventosRoute}>
                <CalendarWeek className="menu__link__icon" />
                Eventos
            </LinkMenu>
        </>
    )
}

export default MenuNavigation