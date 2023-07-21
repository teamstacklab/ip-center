import ipe02 from "../../assets/images/ipecenter/ipe02.jpeg"
import ipe09 from "../../assets/images/ipecenter/ipe09.jpeg"

import { Swiper, SwiperSlide } from 'swiper/react';

import {
  ArrowRight,
} from 'react-bootstrap-icons'

import {
  ContainerAgenda, ContainerEventos,
  TitleAgenda, Description, LinkEventos
} from "./Style";

import CalendarAgenda from "../Calendar";
import IconEventos from "../IconEventos/index";

function HomeEventos() {
  return (
    <>
      <ContainerEventos>
        <IconEventos/>
        <div>
          <Description >
            O Shopping Ipê Center conta também com um <b>salão exclusivo de eventos</b>
            onde podem ser realizados aniversários, confraternizações e muito mais!
          </Description>
          <LinkEventos href="#" >
            <span className="link__title">Eternize já o seu momento!</span>
            <ArrowRight />
          </LinkEventos>
        </div>
        <div className="eventos__carrossel">
          <Swiper className="eventos__carousel">
            <SwiperSlide className="eventos__carousel__item">
              <img className="eventos__carousel__image" src={ipe02} alt="Arte do Shopping" />
            </SwiperSlide>
            <SwiperSlide className="eventos__carousel__item">
              <img className="eventos__carousel__image" src={ipe09} alt="Arte do Shopping" />
            </SwiperSlide>
            <SwiperSlide className="eventos__carousel__item">
              <img className="eventos__carousel__image" src={ipe02} alt="Arte do Shopping" />
            </SwiperSlide>
          </Swiper>
        </div>
      </ContainerEventos>
      <ContainerAgenda >
        <TitleAgenda>Agenda</TitleAgenda>
        <CalendarAgenda />
      </ContainerAgenda></>
  )
}

export default HomeEventos