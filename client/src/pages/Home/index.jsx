import { LojasRoute } from "../Stores";
import { EventosRoute } from "../Events";
import { RegisterRoute } from "../Register";
import * as Icons from "react-bootstrap-icons";
import { Info as InfoCard } from "@/components/Cards/Info";
import { Cards, Main, Stores, Events } from "./Style";
import HomeLojas from "@/components/Home/HomeLojas";
import SlideShoping from "@/components/Home/SlideShopping";
import HomeEventos from "@/components/Home/HomeEventos";

const HomeRoute = "/";

const Home = () => {
  return (
    <Main>
      <SlideShoping />
      <Cards>
        <InfoCard link={LojasRoute}>
          <InfoCard.Title icon={<Icons.Shop />}>Lojas</InfoCard.Title>
          <InfoCard.Body>
            Encontre todos os nossos lojistas e suas informações de contato.
          </InfoCard.Body>
        </InfoCard>
        <InfoCard link={EventosRoute}>
          <InfoCard.Title icon={<Icons.CalendarWeek />}>Eventos</InfoCard.Title>
          <InfoCard.Body>
            Fique por dentro de todos os eventos que acontecerão aqui. Marque já
            o seu!
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
      <Stores>
        <HomeLojas />
      </Stores>
      <Events>
        <HomeEventos />
      </Events>
    </Main>
  );
};

export default Home;
export { HomeRoute };
