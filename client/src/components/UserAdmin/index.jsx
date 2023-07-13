import { styled } from "styled-components"

//Rotas
import { MinhasLojasRoute } from '../../pages/Stores';
import { DemandasRoute } from "../../pages/Demands";
import { LinkMenu } from "../MenuNavigation";

import {
    Shop,
    CheckAll
} from 'react-bootstrap-icons';

const Container = styled.div`
    display: flex;
    align-items: center;
`


function UserAdmin() {
    return (
        <Container>
            <LinkMenu to={MinhasLojasRoute}>
                <Shop className="menu__link__icon" />MinhasLojas
            </LinkMenu>
            <LinkMenu to={DemandasRoute}>
                <CheckAll className="menu__link__icon" />Demandas
            </LinkMenu>
        </Container>
    )
}


export default UserAdmin