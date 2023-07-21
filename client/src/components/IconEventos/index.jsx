import { styled } from "styled-components";

import {
    CalendarWeek,
} from 'react-bootstrap-icons'

import { TitleLojas, ContainerTitle } from "../HomeLojas/Style";

const ContainerIcon = styled(ContainerTitle)`
    margin-top: 10px;
    display: flex;
    gap: 7px;
    justify-content: start;
`

const IconCalendar = styled(CalendarWeek)`
    font-size: 2em;
    color: var(--brown-tertiaty);
    @media screen and (max-width: 1440px) {
        font-size: 1.8em;
    }
`

function IconEventos() {
    return (
        <ContainerIcon>
            <IconCalendar />
            <TitleLojas $evento>Eventos</TitleLojas>
        </ContainerIcon>
    )
}

export default IconEventos