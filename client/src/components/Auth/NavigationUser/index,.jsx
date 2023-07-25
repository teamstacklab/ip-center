import { styled } from 'styled-components';

// Icones
import {
    Person,
} from 'react-bootstrap-icons';

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
`

const User = styled.p`
    line-height: 1.2em;
    margin-right: 1em;
    font-size: 18px;
    color: var(--marrom);
    font-weight: 500;
`

const Icon = styled(Person)`
    font-size: 2.3em;
`

function NavigationUser(user) {
    return (
        <Div>
            <Icon />
            <User>{user}</User>
        </Div>
    )
}

export default NavigationUser