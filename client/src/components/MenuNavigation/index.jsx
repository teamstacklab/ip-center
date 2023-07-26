import { styled } from "styled-components";
import { Link } from "react-router-dom";

// Routes
import { HomeRoute } from "../../pages/Home";
import { LojasRoute } from "../../pages/Stores";
import { EventosRoute } from "../../pages/Events";

import { CalendarWeek, HouseDoor } from "react-bootstrap-icons";
import { IconShop } from "../Auth/User";

export const LinkMenu = styled(Link)`
  color: var(--brown-primary);
  border: none;
  gap: 6px;
  display: flex;
  text-decoration: none;
  align-items: center;
  margin-left: 16px;
  margin-right: 1em;
  font-size: 18px;
  cursor: pointer;
  padding: 5px;

  @media screen and (max-width: 1279px) {
    padding: 5px 0;
  }
`;

export const IconHouse = styled(HouseDoor)`
  font-size: 1.15em;
`;

export const IconCalendar = styled(CalendarWeek)`
  font-size: 1.15em;
`;

function MenuNavigation() {
  return (
    <>
      <LinkMenu to={HomeRoute}>
        <IconHouse />
        Home
      </LinkMenu>
      <LinkMenu to={LojasRoute}>
        <IconShop />
        Lojas
      </LinkMenu>
      <LinkMenu to={EventosRoute}>
        <IconCalendar />
        Eventos
      </LinkMenu>
    </>
  );
}

export default MenuNavigation;
