import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Arte1 from '../../assets/images/arte1.png';
import Arte2 from '../../assets/images/arte2.jpg';

import './index.css';
import {
  Shop,
  CalendarWeek,
  PeopleFill,
  ArrowRight
} from 'react-bootstrap-icons'

const HomeRoute = '/';

const Home = () => {
  return (
    <main>
      <section id="inicio">
        <div className="carousel-inicio--container">
          <Carousel className="carousel-inicio" variant="dark">
            <Carousel.Item className="carousel-inicio__item">
              <img className="carousel-inicio__image" src={Arte1} alt="Arte do Shopping" />
            </Carousel.Item>
            <Carousel.Item className="carousel-inicio__item">
              <img className="carousel-inicio__image" src={Arte1} alt="Arte do Shopping" />
            </Carousel.Item>
            <Carousel.Item className="carousel-inicio__item">
              <img className="carousel-inicio__image" src={Arte1} alt="Arte do Shopping" />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="cards">
          <div className="cards__card">
            <div className="card__box">
              <Shop className="card__icon shop__icon" />
            </div>
            <p className="card__description">Lojas</p>
          </div>
          <div className="cards__card">
            <div className="card__box">
              <CalendarWeek className="card__icon calendar__icon" />
            </div>
            <p className="card__description">Eventos</p>
          </div>
          <div className="cards__card">
            <div className="card__box">
              <PeopleFill className="card__icon people__icon" />
            </div>
            <p className="card__description">Trabalhe Conosco</p>
          </div>
        </div>
      </section>
      <section id="lojas">
        <div className="lojas--container">
          <div className="lojas__title--container">
            <Shop className="lojas__title--icon" />
            <h2 className="lojas__title">Lojas</h2>
          </div>
          <a href="#" className="container__link" alt="Veja todas">
            <span className="link__titulo">Veja todas</span>
            <ArrowRight />
          </a>
        </div>
        <div className="lojas__carrossel--container">
          <Carousel className="lojas__carousel">
            <Carousel.Item className="lojas__carousel__item">
              <img className="lojas__carousel__image" src={Arte2} alt="Arte do Shopping" />
            </Carousel.Item>
            <Carousel.Item className="lojas__carousel__item">
              <img className="lojas__carousel__image" src={Arte2} alt="Arte do Shopping" />
            </Carousel.Item>
            <Carousel.Item className="lojas__carousel__item">
              <img className="lojas__carousel__image" src={Arte2} alt="Arte do Shopping" />
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
      <section id="eventos">
        <div className="eventos__container">
          <CalendarWeek className="container__calendario"/>
          <h2 className="container__title">Eventos</h2>
        </div>
        <div className="eventos__descricao">
          <p className="descricao__text">
          O Shopping Ipê Center conta também com um <span className="text__bold">salão exclusivo de eventos</span> onde podem ser realizados aniversários, confraternizações e muito mais!
          </p>
        </div>
        <div className="eventos__carrossel">
          <Carousel className="eventos__carousel">
            <Carousel.Item className="eventos__carousel__item">
              <img className="eventos__carousel__image" src={Arte2} alt="Arte do Shopping" />
            </Carousel.Item>
            <Carousel.Item className="eventos__carousel__item">
              <img className="eventos__carousel__image" src={Arte2} alt="Arte do Shopping" />
            </Carousel.Item>
            <Carousel.Item className="eventos__carousel__item">
              <img className="eventos__carousel__image" src={Arte2} alt="Arte do Shopping" />
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </main>
  );
}

export default Home;
export { HomeRoute };