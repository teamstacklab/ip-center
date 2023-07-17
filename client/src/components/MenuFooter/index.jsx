import { styled } from "styled-components";
import("../../assets/styles/config.css");

import Logo from "../../assets/images/logo-alternativa.svg"
import { IconInstagram, IconWhatsapp } from "../Bar/Style";


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--brown-primary);
`
const LogoFooter = styled.img`
    height: 109px;
    width: 120px;
    position: relative;
    margin-right: auto;
`

const Div = styled.div`
    display: flex;
    gap: 20px;
`

const Link = styled.a`
    cursor: pointer;
`

function MenuFooter() {
    return (
        <Container >
            <LogoFooter src={Logo} />
            <Div>
                <IconWhatsapp
                    href="https://api.whatsapp.com/send/?phone=%2B5588993808414&text&type=phone_number&app_absent=0"
                    className="link__icon"
                />
                <IconInstagram
                    className="link__icon"
                    href="https://www.instagram.com/ipe_center/"
                />
            </Div>
        </Container>
    )
}

export default MenuFooter