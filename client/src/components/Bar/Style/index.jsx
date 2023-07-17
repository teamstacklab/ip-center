import { styled } from "styled-components"
import '../../../assets/styles/config.css'

// Icones
import {
    Whatsapp,
    Instagram,
    ArrowRight,
} from 'react-bootstrap-icons';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 36px;
    padding: 0 20px;
    background-color: var(--verde);
    width: 100%;
`

export const Div = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`

export const Link = styled.a`
    display: flex;
    align-items: center;
    font-size: 0.95em;
    color: var(--cor-texto);
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
`

export const Arrow = styled(ArrowRight)`
    font-size: 1.3em;
    margin-left: 4px;
`
export const IconWhatsapp = styled(Whatsapp)`
    font-size: 1.35em;
    color: var(--cor-texto);
`

export const IconInstagram = styled(Instagram)`
    font-size: 1.35em;
    color: var(--cor-texto);
`

export const Text = styled.p`
    margin: 0;
    font-size: 16px;
    color: var(--cor-texto);
    font-weight: 500;
    display: block;
    @media screen and (max-width: 1279px) {
        display: none;
    }
`