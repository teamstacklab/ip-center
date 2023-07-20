import React from "react";

/*Fotos Ipê Center*/
import ipe02 from "../../assets/images/ipecenter/ipe02.jpeg";
import ipe05 from "../../assets/images/ipecenter/ipe05.jpeg";
import ipe08 from "../../assets/images/ipecenter/ipe08.jpeg";
import ipe09 from "../../assets/images/ipecenter/ipe09.jpeg";
import artepc from "../../assets/images/arte.png";

/*Fotos da lojas*/
import imperio from "../../assets/images/lojas/imperio.jpg";
import HotDog from "../../assets/images/lojas/hotdog.jpg";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { CalendarAgenda } from "../../components/Calendar";

import { LojasRoute } from "../Stores";
import { EventosRoute } from "../Events";
import { RegisterRoute } from "../Register";
import { Link } from "react-router-dom";
import * as Icons from "react-bootstrap-icons";
import { Info as InfoCard } from "../../components/Cards/Info";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./CSS/mobile.css";
import "./CSS/desktop.css";

import {
  Shop,
  CalendarWeek,
  PeopleFill,
  ArrowRight,
} from "react-bootstrap-icons";

const HomeRoute = "/";

const Home = () => {
  const slides = [ipe02, ipe09, ipe08];

  /*Para Computador*/
  const slides2 = [artepc];

  return (
    <main className="content-box">
      <section id="inicio">
        <div className="carousel-inicio--container">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation={true}
            pagination={{ clickable: true }}
            className="carousel-inicio"
          >
            {slides.map((slide) => {
              return (
                <SwiperSlide className="carousel-inicio__item">
                  <picture>
                    <source media="(min-width: 1440px)" srcSet={slides2} />
                    <img
                      className="carousel-inicio__image"
                      src={slide}
                      alt="Arte do Shopping"
                    />
                  </picture>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="cards">
          {/* Componente Card equivalente a div abaixo */}
          <InfoCard link={LojasRoute}>
            <InfoCard.Title icon={<Icons.Shop />}>Lojas</InfoCard.Title>
            <InfoCard.Body>
              Encontre todos os nossos lojistas e suas informações de contato.
            </InfoCard.Body>
          </InfoCard>
          {/* Componente Card equivalente a div abaixo */}
          <InfoCard link={EventosRoute}>
            <InfoCard.Title icon={<Icons.CalendarWeek />}>
              Eventos
            </InfoCard.Title>
            <InfoCard.Body>
              Fique por dentro de todos os eventos que acontecerão aqui. Marque
              já o seu!
            </InfoCard.Body>
          </InfoCard>
          <InfoCard link={RegisterRoute}>
            <InfoCard.Title icon={<Icons.PeopleFill />}>
              Trabalhe Conosco
            </InfoCard.Title>
            <InfoCard.Body>
              Seja um de nossos lojistas. Será um prazer trabalhar com você!
            </InfoCard.Body>
          </InfoCard>
        </div>
      </section>
      <section id="lojas">
        <div className="lojas--container">
          <div className="lojas__title--container">
            <Shop className="lojas__title--icon" />
            <h2 className="lojas__title">Lojas</h2>
          </div>
          <Link to={LojasRoute} className="container__link" alt="Veja todas">
            <span className="link__titulo">Veja todas</span>
            <ArrowRight />
          </Link>
        </div>
        <div className="lojas__carrossel--container">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              1280: {
                slidesPerView: 3,
              },
            }}
            slidesPerView={1}
            spaceBetween={32}
            className="lojas__carousel"
          >
            <SwiperSlide className="lojas__carousel__item">
              <img
                className="lojas__carousel__image"
                src={imperio}
                alt="Arte do Shopping"
              />
            </SwiperSlide>
            <SwiperSlide className="lojas__carousel__item">
              <img
                className="lojas__carousel__image"
                src={HotDog}
                alt="Arte do Shopping"
              />
            </SwiperSlide>
            <SwiperSlide className="lojas__carousel__item">
              <img
                className="lojas__carousel__image"
                src={imperio}
                alt="Arte do Shopping"
              />
            </SwiperSlide>
            <SwiperSlide className="lojas__carousel__item">
              <img
                className="lojas__carousel__image"
                src={HotDog}
                alt="Arte do Shopping"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section id="eventos">
        <div className="eventos-left">
          <div className="eventos__container">
            <CalendarWeek className="container__calendario" />
            <h2 className="container__title">Eventos</h2>
          </div>
          <div className="eventos__descricao">
            <p className="descricao__text">
              O Shopping Ipê Center conta também com um{" "}
              <span className="text__bold">salão exclusivo de eventos</span>{" "}
              onde podem ser realizados aniversários, confraternizações e muito
              mais!
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B5588993808414&text&type=phone_number&app_absent=0"
              className="descricao__link"
            >
              <span className="link__title">Eternize já o seu momento!</span>
              <ArrowRight />
            </a>
          </div>
          <div className="eventos__carrossel">
            <Swiper className="eventos__carousel">
              <SwiperSlide className="eventos__carousel__item">
                <img
                  className="eventos__carousel__image"
                  src={ipe02}
                  alt="Arte do Shopping"
                />
              </SwiperSlide>
              <SwiperSlide className="eventos__carousel__item">
                <img
                  className="eventos__carousel__image"
                  src={ipe09}
                  alt="Arte do Shopping"
                />
              </SwiperSlide>
              <SwiperSlide className="eventos__carousel__item">
                <img
                  className="eventos__carousel__image"
                  src={ipe05}
                  alt="Arte do Shopping"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="agenda">
          <div className="agenda__title">
            <h2 className="title__agenda">Agenda</h2>
          </div>
          <div className="agenda__calendario eventos-right">
            <CalendarAgenda />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
export { HomeRoute };
