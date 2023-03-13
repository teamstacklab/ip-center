import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Arte1 from '../../assets/images/arte1.png';
import './index.css';
import {
  Shop,
  CalendarWeek,
  PeopleFill
} from 'react-bootstrap-icons'

const Home = () => {
  return (
    <main>
      <section id="inicio">
        <div className="carousel--container">
          <Carousel variant="dark">
            <Carousel.Item>
              <img src={Arte1} alt="Arte do Shopping" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={Arte1} alt="Arte do Shopping" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={Arte1} alt="Arte do Shopping" />
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
      <section className="lojas">
        <div className="loja__container">
          <div className="container__titulo">
            <img src="./imagem/lojas.svg" className="titulo__icone" alt="Lojas" />
            <h2 className="titulo__texto">Lojas</h2>
          </div>
          <a href="#" className="container__link" alt="Veja todas">
            <span className="link__titulo">Veja todas</span>
            <img src="./imagem/seta.svg" className="link__imagem" />
          </a>
        </div>
        <div className="lojas__carrossel">
          <div id="carouselExample" className="carousel slide carrossel__lojas">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="./riomar-recife.jpg" className="d-block w-100 " id="lojas__imagem" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;