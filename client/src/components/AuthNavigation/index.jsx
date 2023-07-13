import '../../assets/styles/config.css'

// Routes
import { LoginRoute } from "../../pages/Login";
import { RegisterRoute } from "../../pages/Register";
import { styled } from "styled-components";
import { Button } from "../Button";

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 8px 16px;
    gap: 16px;
    background-color: var(--cor-begue);
    border-radius: 12px;
`

const Text = styled.p`
    width: max-content;
    font-size: 15px;
    font-weight: 600;
    color: var(--marrom);
    @media screen and (min-width: 1279px) {
        font-size: 18px;
    }
`

const Div = styled.div`
    display: flex;
    gap: 1em;
`

const Link = styled(Button)`
    text-decoration: none;
    background: ${props => props.$background ? 'var(--cor-texto)' :
        'var(--cor-icone)'};
    font-size: 15px;
    font-weight: 700;
    color: var(--marrom);
    box-shadow: 3px 3px 10px var(--shadow-2);
    cursor: pointer;
`

function AuthNavigation() {
    return (
        <Container>
            <Text>É Lojista?</Text>
            <Div>
                <Link $background to={LoginRoute}>
                    Entrar
                </Link>
                <Link to={RegisterRoute}>
                    Registrar
                </Link>
            </Div>
        </Container>
    )
}

export default AuthNavigation