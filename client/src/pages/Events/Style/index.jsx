import { styled } from "styled-components";
import * as Box from "@/components/Box";
import CalendarAgenda from "../../../components/Calendar";
import { InfoCircle } from "react-bootstrap-icons";

export const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Calendar = styled(CalendarAgenda)`
  height: 600px;
  width: 100%;
  @media screen and (max-width: 1280px) {
    height: calc(500px - 40px);
  }
`;

export const ComunidadosItem = styled.span`
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 6px;
    margin-bottom: 18px;
`

export const Icon = styled(InfoCircle)`
  font-size: 1.75rem;
`;
