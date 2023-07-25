import { styled } from "styled-components";


export const Container =  styled.div`
    display: flex;
`

export const ContainerLojas = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`

export const Lojas = styled.div`
    padding: 8px;
    width: 100%;
    display: grid;
    justify-items: center;
    align-content: center;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 32px 20px;
    padding-top: 2em;
    
    @media screen and (max-width: 1440px) {
        width: 100%;
        padding-top: 18px;
        gap: 10px;
        display: grid;
    }
`