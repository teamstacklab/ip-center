import { LinkMenu } from "../../MenuNavigation";
import { styled } from "styled-components";

import { MinhasLojasRoute } from '../../../pages/Stores';

// Icones
import {
    Shop
} from 'react-bootstrap-icons';

export const IconShop = styled(Shop)`
    font-size: 1.15em;
`

function User() {
    return (
        <LinkMenu to={MinhasLojasRoute}>
            <IconShop />
            Minhas<span>Lojas</span>
        </LinkMenu>
    )
}

export default User