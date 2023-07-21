// Routes
import { HomeRoute } from "../../pages/Home";

import {
  Clock,
  ContainerFooter,
  Copy,
  Div,
  Geo,
  Hour,
  LinkInfo,
  LinkLocal,
  List,
  People,
} from "./Style/index";

function InforFooter() {
  return (
    <ContainerFooter>
      <Copy>
        <b>&copy;{new Date().getFullYear()}</b> - Shopping Ipê Center. Todos os
        direitos reservados.
      </Copy>
      <Div>
        <People />
        <LinkInfo to={HomeRoute}>Trabalhe conosco</LinkInfo>
      </Div>
      <div>
        <Div>
          <Clock />
          <p>Horários de funcionamento</p>
        </Div>
        <List>
          <li>
            De segunda a quarta:
            <span>
              {" "}
              das
              <Hour> 08:00h</Hour> às
              <Hour> 20:00h</Hour>
            </span>
          </li>
          <li>
            Da quinta ao domingo:
            <span>
              {" "}
              das
              <Hour> 08:00h</Hour> às
              <Hour> 22:00h</Hour>
            </span>
          </li>
        </List>
      </div>
      <Div>
        <Geo />
        <LinkLocal href="https://goo.gl/maps/bPfXHM9skhhMYRJg9" target="_blank">
          Rua Santo Antônio, No. 60 <br />
          Araripe, Ceará
        </LinkLocal>
      </Div>
    </ContainerFooter>
  );
}

export default InforFooter;
