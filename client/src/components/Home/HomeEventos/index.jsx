import React from "react";
import * as Icons from "react-bootstrap-icons";
import {
  ContainerAgenda,
  ContainerEventos,
  Description,
  LinkEventos,
  ArrowEventos,
  TitleAgenda,
  CarouselContainer,
  ContainerTitle,
} from "./Style";

import { Carousel, Slide } from "@/pages/Home/Style";
import { Title } from "@/components/Title";
import CalendarAgenda from "../../Calendar";
import { ImageSlide } from "../HomeLojas/Style";

import ipe02 from "../../../assets/images/ipecenter/ipe02.jpeg";
import ipe09 from "../../../assets/images/ipecenter/ipe09.jpeg";

const slideEventos = [ipe02, ipe09];

function HomeEventos() {
  return (
    <>
      <ContainerEventos>
        <ContainerTitle>
          <Title icon={<Icons.CalendarWeek />}>ASDF</Title>
        </ContainerTitle>
        <div>
          <Description>
            O Shopping Ipê Center conta também com um{" "}
            <b>salão exclusivo de eventos </b>
            onde podem ser realizados aniversários, confraternizações e muito
            mais!
          </Description>
          <LinkEventos href="#">
            Eternize já o seu momento!
            <ArrowEventos />
          </LinkEventos>
        </div>
        <CarouselContainer>
          <Carousel height={"350px"}>
            {slideEventos.map((imagens) => {
              return (
                <Slide>
                  <ImageSlide src={imagens} alt="Eventos do Shopping" />
                </Slide>
              );
            })}
          </Carousel>
        </CarouselContainer>
      </ContainerEventos>
      <ContainerAgenda>
        <TitleAgenda>Agenda</TitleAgenda>
        <CalendarAgenda />
      </ContainerAgenda>
    </>
  );
}

export default HomeEventos;
