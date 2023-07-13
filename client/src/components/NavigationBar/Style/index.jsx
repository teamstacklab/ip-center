import { styled } from "styled-components"
import NavegationBar from 'react-bootstrap/Navbar';


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
    background-color: var(--cor-menu);
    z-index: 999;
    box-shadow: 0 0 8px var(--shadow);
    @media screen and (min-width: 1279px) {
        width: 100%;
        padding: 0 72px;
    }
    
`

