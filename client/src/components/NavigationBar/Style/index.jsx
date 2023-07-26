import { styled } from "styled-components"
import NavegationBar from 'react-bootstrap/Navbar';
import { Button } from "../../Button";
import NavReact from 'react-bootstrap/Nav';


export const Header = styled.header`
    z-index: 999;
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    @media screen and (min-width: 1279px) {
        width: 100%;
    }
`
export const NavBar = styled(NavegationBar)`
    background-color: var(--orange-light);
    z-index: 999;
    box-shadow: 0 0 8px var(--shadow-primary);
    @media screen and (min-width: 1279px) {
        width: 100%;
        padding: 0 72px;
    }
`

export const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const LogOut = styled(Button)`
    box-shadow: 3px 3px 10px var(--shadow-primary-2);
    background: var(--orange-primary);
    border: none;
    font-weight: 600;
    color: var(--brown-primary);
`
export const Nav = styled(NavReact)`
    @media screen and (min-width: 1279px) {
        display: flex;
        align-items: center;
    }
`