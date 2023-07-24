import { styled } from "styled-components";

import * as Box from "@/components/Box";
import CalendarAgenda from "../../../components/Calendar";
import { InfoCircle } from "react-bootstrap-icons";

export const Div = styled.div`
    width: 600px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media screen and (max-width: 1440px) {
        width: auto;
    }
`

export const Calendar = styled(CalendarAgenda)`
    height: 500px;
    width: 100%;
    margin-bottom: 24px;
    @media screen and (max-width: 1440px){
        height: 380px;
    }
`

export const Comunidados = styled.span`
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 6px;
    margin-bottom: 18px;
`

export const Icon = styled(InfoCircle)`
    font-size: 1.75rem;
`