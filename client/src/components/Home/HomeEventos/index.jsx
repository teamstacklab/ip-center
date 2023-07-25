import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import {
  ContainerAgenda,
  ContainerEventos,
  TitleAgenda,
  Description,
  LinkEventos,
  CarouselEventos,
  Slide,
  ArrowEventos,
} from "./Style";

import CalendarAgenda from "../../Calendar";
import IconEventos from "../../Icon/IconEventos";
import { ImageSlide } from "../HomeLojas/Style";

import ipe02 from "../../../assets/images/ipecenter/ipe02.jpeg";
import ipe09 from "../../../assets/images/ipecenter/ipe09.jpeg";

const slideEventos = [ipe02, ipe09];

function HomeEventos() {
  return (
    <>
      <ContainerEventos>
        <IconEventos />
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
        <CarouselEventos
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation={false}
          pagination={{ clickable: true }}
        >
          {slideEventos.map((imagens) => {
            return (
              <Slide>
                <ImageSlide src={imagens} alt="Eventos do Shopping" />
              </Slide>
            );
          })}
        </CarouselEventos>
      </ContainerEventos>
      <ContainerAgenda>
        <TitleAgenda>Agenda</TitleAgenda>
        <CalendarAgenda />
      </ContainerAgenda>
    </>
  );
}

export default HomeEventos;
