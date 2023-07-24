import { styled } from "styled-components"

// Icons
import {
    PeopleFill,
    ClockFill,
    GeoAltFill
} from "react-bootstrap-icons";


import { Link } from "react-router-dom";

export const ContainerFooter = styled.div`
    font-size: 18px;
    display: flex;
    flex-direction: column;
    gap: 1em;
    
    @media screen and (max-width: 1440px) {
        font-size: 14px;
    }
`

export const Copy = styled.p`
    color: var(--orange-tertiary);
    margin-bottom: 1em;
`

export const Div = styled.div`
    display: flex;
    align-items: center;
    gap: 13px;
    color: var(--orange-tertiary);
    font-size: 1rem;
`

export const People = styled(PeopleFill)`
    font-size: 1.5rem !important;
    color: var(--orange-primary);
`

export const Clock = styled(ClockFill)`
    font-size: 1.5rem !important;
    color: var(--orange-primary);
`

export const Geo = styled(GeoAltFill)`
    font-size: 1.5rem !important;
    color: var(--orange-primary);
`

export const LinkLocal = styled(Link)`
    text-decoration: none;
    color: var(--orange-tertiary);
    font-size: 1rem;
    transition: color  .2s;

    &:hover {
        color: var(--orange-tertiary-hover);
    }
`

export const LinkInfo = styled(LinkLocal)`
    border-bottom: 1px solid var(--orange-tertiary);
    transition: color  .2s;
    &:hover {
        color: var(--orange-tertiary-hover);
    }
`

export const List = styled.ul`
    font-size: 1rem;
    color: var(--orange-tertiary);
    &>li>span {
        color: var(--orange-secondary);
    }

`

export const Hour = styled.span`
    font-weight: 600;
`
