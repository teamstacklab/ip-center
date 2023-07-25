import { styled } from "styled-components";

import { Swiper, SwiperSlide } from 'swiper/react';

export const Main = styled.main`
    margin-top: 103px;
    width: 100%;
`

export const Carousel = styled(Swiper)`
    height: 60vh;
    width: 100%;

    @media screen and (max-width: 1440px) {
        height: auto;
    }
`

export const Slide = styled(SwiperSlide)`
    width: 100%;
    height: 100%;
    @media screen and (max-width: 1440px){
        height: 312px;
        width: 100%;
    }
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 64px 0;
    justify-content: space-evenly;

    @media screen and (max-width: 1300px){
        padding: 64px 0;
    }

    @media screen and (max-width: 1280px){
        padding: 20px 0;

    }
`



export const SectionLojas = styled.section`
    background-color: var(--brown-primary);
    padding: 26px 64px 48px;

    @media screen and (max-width: 1440px) {
        padding: 12px 23px;
    }
` 

export const SectionEventos = styled.section`
        display: flex;
        justify-content: center;
        gap: 44px;
        height: 700px;
        padding-top: 72px;

    @media screen and (max-width: 1440px) {
        gap: 10px;
        padding: 12px 23px 0;
        flex-direction: column-reverse;
        height: auto;
    }
` 
export const SectionCards = styled.section`
    padding: 0;
`
