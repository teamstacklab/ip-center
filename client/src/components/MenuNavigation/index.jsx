import Nav from 'react-bootstrap/Nav';
import { styled } from 'styled-components';

// Routes
import { HomeRoute } from "../../pages/Home";
import { LojasRoute } from "../../pages/Lojas";
import { EventosRoute } from "../../pages/Eventos";


import {
    House,
    Shop,
    CalendarWeek,
} from 'react-bootstrap-icons';

const Link = styled.a`
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
            <Link to={HomeRoute}>
                <House className="menu__link__icon" />
                Home
            </Link>
            <Link to={LojasRoute}>
                <Shop className="menu__link__icon" />
                Lojas
            </Link>
            <Link to={EventosRoute}>
                <CalendarWeek className="menu__link__icon" />
                Eventos
            </Link>
        </>
    )
}

export default MenuNavigation