//Styled
import { Arrow, Container, Div, InstagramIcon, Link, Text, WhatsappIcon } from "./Style";
import { RegisterRoute } from "../../pages/Register";

function Bar() {
    return (
        <Container>
            <Div>
                <a 
                target='_blank' 
                rel="noopener noreferrer" 
                href="https://api.whatsapp.com/send/?phone=%2B5588993808414&text&type=phone_number&app_absent=0">
                    <WhatsappIcon />
                </a>
                <a 
                target='_blank' 
                rel="noopener noreferrer" 
                href="https://www.instagram.com/ipe_center/">
                    <InstagramIcon />
                </a>
            </Div>
                <Text>
                    Seja bem vindo ao shopping Ipê Center! Navegue pelas nossas lojas, eventos e tudo mais!
                </Text>
            <Link to={RegisterRoute}>
                Trabalhe conosco 
                <Arrow/>
            </Link>
        </Container>
    )
};


export default Bar