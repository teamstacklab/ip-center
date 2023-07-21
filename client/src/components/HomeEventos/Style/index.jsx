import { styled } from "styled-components";

import { TitleLojas, ContainerTitle } from "../../../components/HomeLojas/Style";

export const ContainerAgenda = styled.div`
    padding: 0;
    background: var(--white);
    height: 520px;
    @media screen and (max-width: 1440px) {
        margin-top: 18px;
    }
`

export const TitleAgenda = styled(TitleLojas)`
    display: none;
    @media screen and (max-width: 1440px){
        display: block;
        margin: 0 0 12px 2px;
        font-weight: 700;
        color: var(--brown-primary);
    }
`

export const ContainerEventos = styled.div`
    height: 520px;
    order: 2;
    position: relative;
    top: 0;

    @media screen and (max-width: 1440px) {
        height: auto;
    }
`

export const Description = styled.p`
    font-size: 19px;
    margin-bottom: 26px;
    margin: 0;
    width: 474px;
    
    @media screen and (max-width: 1440px) {
        width: auto;
        font-weight: 500;
        color: var(--brown-tertiaty);
    }
`

export const LinkEventos = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: 7px;
    color: var(--brown-tertiaty);
    font-weight: 600;
    font-size: 18px;
    margin: 20px 0 29px;
    @media screen and (max-width: 1440px) {
        display: none;
    }
`