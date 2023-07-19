import { styled } from "styled-components"

// Icons
import {
    PeopleFill,
    ClockFill,
    GeoAltFill
} from "react-bootstrap-icons";

// Routes
import { HomeRoute } from "../../pages/Home";
import { Link } from "react-router-dom";

const ContainerFooter = styled.div`
    font-size: 18px;
    display: flex;
    flex-direction: column;
    gap: 1em;
    
    @media screen and (max-width: 1440px) {
        font-size: 14px;
    }
`

const Copy = styled.p`
    color: var(--orange-tertiary);
    margin-bottom: 1em;
`

const Div = styled.div`
    display: flex;
    align-items: center;
    gap: 13px;
    color: var(--orange-tertiary);
    font-size: 1rem;
`

const People = styled(PeopleFill)`
    font-size: 1.5rem !important;
    color: var(--orange-primary);
`

const Clock = styled(ClockFill)`
    font-size: 1.5rem !important;
    color: var(--orange-primary);
`

const Geo = styled(GeoAltFill)`
    font-size: 1.5rem !important;
    color: var(--orange-primary);
`

const LinkInfor = styled(Link)`
    text-decoration: none;
    color: var(--orange-tertiary);
    font-size: 1rem;
    border-bottom: 1px solid var(--orange-tertiary);
`

const LinkLocal = styled.

function InforFooter() {
    return (
        <ContainerFooter >
            <Copy><b>&copy;{new Date().getFullYear()}</b> - Shopping Ipê Center. Todos os direitos reservados.</Copy>
            <Div>
                <People />
                <LinkInfor
                    to={HomeRoute}>Trabalhe conosco
                </LinkInfor>
            </Div>
            <div>
                <Div>
                    <Clock />
                    <p>Horários de funcionamento</p>
                </Div>
                <ul className="data__list">
                    <li >De segunda a quarta: <span className="item-negrito">das <span className="item-negrito--hora">08:00h</span> às <span className="item-negrito--hora">20:00h</span></span></li>
                    <li >Da quita ao domingo: <span className="item-negrito">das <span className="item-negrito--hora">08:00h</span> às <span className="item-negrito--hora">22:00h</span></span></li>
                </ul>
            </div>
            <Div>
                <Geo />
                <a
                    href="https://goo.gl/maps/bPfXHM9skhhMYRJg9"
                    target="_blank"
                >Rua Santo Antônio, No. 60 <br />Araripe, Ceará
                </a>
            </Div>
            <p className="info__sloga">Shopping Ipê Center, o shopping da sua família!</p>
        </ContainerFooter>
    )
}

export default InforFooter