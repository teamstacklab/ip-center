import { styled } from "styled-components";
import("../../../assets/styles/config.css");

export const ContainerFooter = styled.footer`
    padding: 0 39px 30px;
    width: 100%;
    background: var(--brown-primary);
`
export const Separetor = styled.hr`
    height: 3px;
    background-color: var(--orange-tertiary);
    margin: -30px 0 20px;
    position: relative;

    @media screen and (max-width: 1440px) {
        margin: 9px 0 20px;
    }
`

export const ContainerMap = styled.div`    
    &>iframe {
        border-radius: 24px;
        width: 508px;
        height: 304px;
    }
    @media screen and (max-width: 1440px) {
        padding-top: 16px;

        &>iframe {
            width: 100%;
    }
    }

`

export const SectionFooter = styled.section`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 1440px) {
        display: block;
    }
`

export const Sloga = styled.p`
    text-align: left;
    font-weight: 600;
    color: var(--orange-tertiary);
    position: absolute;
    margin-top: 280px;
    
    @media screen and (max-width: 1440px) {
        position: static;
        margin-top: 20px;
        text-align: center;
        
    }
`

