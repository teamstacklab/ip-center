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
    z-index: 100;
`

const WhatsappIcon = styled(IconWhatsapp)`
    font-size: 2em;
    @media screen and (max-width: 1440px) {
    font-size: 1.7em;

    }
`

const InstagramIcon = styled(IconInstagram)`
    font-size: 2em;
    @media screen and (max-width: 1440px) {
    font-size: 1.7em;

    }
`

function MenuFooter() {
    return (
        <Container >
            <LogoFooter src={Logo} />
            <Div>
                <Link
                    href={"#"}
                >
                    <WhatsappIcon />
                </Link>
                <Link
                    href={"#"}
                >
                    <InstagramIcon />
                </Link>
            </Div>
        </Container>
    )
}

export default MenuFooter