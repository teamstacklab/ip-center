
import { LojasRoute } from '../Stores';
import { EventosRoute } from '../Events'
import { RegisterRoute } from '../Register'
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './CSS/mobile.css';
import './CSS/desktop.css';

import {
  Shop,
  CalendarWeek,
  PeopleFill,
  ArrowRight,
} from 'react-bootstrap-icons'

import {
  Cards, Main, SectionLojas, SectionEventos
} from "./Style";

import SlideShoping from "../../components/SlideShopping";
import HomeLojas from "../../components/HomeLojas";
import HomeEventos from "../../components/HomeEventos/index";


const HomeRoute = '/';

const Home = () => {

  return (
    <Main>
      <section id="inicio">
        <SlideShoping />
        <Cards>
          <div className="cards__card">
            <Link className="card__box" to={LojasRoute}>
              <Shop className="card__icon shop__icon" />
              <p className="card__description-desktop">Lojas</p>
            </Link>
            <div className="card__sobre">
              <p className="sobre__text">Encontre todos os nossos lojistas e suas informações de contato.</p>
              <Link to={LojasRoute} className="sobre__button">
                Saiba mais
                <ArrowRight className="button__icon" />
              </Link>
            </div>
            <p className="card__description">Lojas</p>
          </div>
          <div className="cards__card">
            <Link className="card__box" to={EventosRoute}>
              <CalendarWeek className="card__icon calendar__icon" />
              <p className="card__description-desktop">Eventos</p>
            </Link>
            <div className="card__sobre">
              <p className="sobre__text">Fique por dentro de todos os eventos que acontecerão aqui. Marque já o seu!</p>
              <Link to={EventosRoute} className="sobre__button">
                Saiba mais
                <ArrowRight className="button__icon" />
              </Link>
            </div>
            <p className="card__description">Eventos</p>
          </div>
          <div className="cards__card">
            <Link className="card__box" to={RegisterRoute}>
              <PeopleFill className="card__icon people__icon" />
              <p className="card__description-desktop">Trabalhe Conosco</p>
            </Link>
            <div className="card__sobre">
              <p className="sobre__text">Seja um de nossos lojistas. Será um prazer trabalhar com você!</p>
              <Link to={RegisterRoute} className="sobre__button">
                Saiba mais
                <ArrowRight className="button__icon" />
              </Link>
            </div>
            <p className="card__description">Trabalhe<br />Conosco</p>
          </div>
        </Cards>
      </section>
      <SectionLojas>
        <HomeLojas />
      </SectionLojas>
      <SectionEventos>
        <HomeEventos />
      </SectionEventos>
    </Main>
  );
}

export default Home;
export { HomeRoute };