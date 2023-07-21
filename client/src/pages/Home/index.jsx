import { LojasRoute } from "../Stores";
import { EventosRoute } from "../Events";
import { RegisterRoute } from "../Register";
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

import { Cards, Main, SectionLojas, SectionEventos } from "./Style";

import SlideShoping from "../../components/SlideShopping";
import HomeLojas from "../../components/HomeLojas";
import HomeEventos from "../../components/HomeEventos/index";

const HomeRoute = "/";

const Home = () => {
  return (
    <Main>
      <section id="inicio">
        <SlideShoping />
        <Cards>
          <div className="cards">
            <InfoCard link={LojasRoute}>
              <InfoCard.Title icon={<Icons.Shop />}>Lojas</InfoCard.Title>
              <InfoCard.Body>
                Encontre todos os nossos lojistas e suas informações de contato.
              </InfoCard.Body>
            </InfoCard>
            <InfoCard link={EventosRoute}>
              <InfoCard.Title icon={<Icons.CalendarWeek />}>
                Eventos
              </InfoCard.Title>
              <InfoCard.Body>
                Fique por dentro de todos os eventos que acontecerão aqui.
                Marque já o seu!
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
};

export default Home;
export { HomeRoute };
