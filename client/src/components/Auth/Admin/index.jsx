import { styled } from "styled-components"

//Rotas
import { MinhasLojasRoute } from '../../../pages/Stores';
import { DemandasRoute } from "../../../pages/Demands";
import { LinkMenu } from "../../MenuNavigation";

import {
    CheckAll
} from 'react-bootstrap-icons';

import { IconShop } from "../User";

const Container = styled.div`
    display: flex;
    align-items: center;
`
const IconCheck = styled(CheckAll)`
    font-size: 1.15em;
`


function Admin() {
    return (
        <Container>
            <LinkMenu to={MinhasLojasRoute}>
                <IconShop />
                MinhasLojas
            </LinkMenu>
            <LinkMenu to={DemandasRoute}>
                <IconCheck />
                Demandas
            </LinkMenu>
        </Container>
    )
}


export default Admin