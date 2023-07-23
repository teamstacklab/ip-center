import { LojasRoute } from "../Stores";
import { EventosRoute } from "../Events";
import { RegisterRoute } from "../Register";
import * as Icons from "react-bootstrap-icons";
import { Info as InfoCard } from "../../components/Cards/Info";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Cards, Main, SectionLojas, SectionEventos, SectionCards } from "./Style";

import SlideShoping from "../../components/Home/SlideShopping";
import HomeLojas from "../../components/Home/HomeLojas";
import HomeEventos from "../../components/Home/HomeEventos/index";

const HomeRoute = "/";

const Home = () => {
  return (
    <Main>
      <SectionCards>
        <SlideShoping />
        <Cards>
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
        </Cards>
      </SectionCards>
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
