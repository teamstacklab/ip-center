import LogoImagem from '../../assets/images/logo.svg';
import { styled } from "styled-components";
import { NavBar } from '../NavigationBar/Style';

const ContainerLogo = styled.div`
    display: flex;
    width: 100%;
`
const Logo = styled.img`
    width: 80px;
    height: 80px;
    @media screen and (max-width: 1279px) {
        height: 3.35em;
        padding: 0;
    }
`

const Button = styled(NavBar.Toggle)`
    border: none;
    box-shadow: none !important;
    border: 0;
    outline: 0;
    margin-left: auto;

    &:focus { 
        background-color: var(--shadow-primary-2);
        box-shadow: none !important;
        border: 0;
        outline: 0;
    }
`


function LogoHeader() {
    return (
        <ContainerLogo>
            <Logo
            src={LogoImagem}
            alt='Logo do Ipê Center'
            />
        <Button aria-controls="menuList" />
        </ContainerLogo>
    )
}



export default LogoHeader