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

export const Section = styled(Box.Section)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: calc(2 * 2vw);
  @media screen and (max-width: 1280px) {
    gap: calc(1.5 * 2vw);
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    padding: 0.5rem 1.3rem;
    height: auto;
  }
`;

export const Icon = styled(InfoCircle)`
  font-size: 1.75rem;
`;
