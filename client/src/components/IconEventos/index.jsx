import { styled } from "styled-components";
import { Title } from "@/components/Title";
import * as Icons from "react-bootstrap-icons";

const Container = styled.div`
  margin-bottom: 12px;
`;

function IconEventos() {
  return (
    <Container>
      <Title
        fw={600}
        color={"var(--brown-primary)"}
        icon={<Icons.CalendarWeek />}
      >
        Eventos
      </Title>
    </Container>
  );
}

export default IconEventos;
