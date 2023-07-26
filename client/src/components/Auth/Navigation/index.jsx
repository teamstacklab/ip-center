// Routes
import { LoginRoute } from "../../../pages/Login";
import { RegisterRoute } from "../../../pages/Register";
import { styled } from "styled-components";
import { Button } from "../../Button";

const Container = styled.div`
  border: 1px solid var(--orange-light-hover);
  display: flex;
  align-items: center;
  padding: 8px 16px;
  gap: 16px;
  background-color: var(--orange-tertiary);
  border-radius: 12px;

  @media screen and (max-width: 1279px) {
    margin-left: 16px;
  }
  @media screen and (max-width: 1279px) {
    margin: 0 8px;
  }
`;

const Text = styled.p`
  width: max-content;
  font-size: 15px;
  font-weight: 500;
  color: var(--brown-primary);
  font-size: 18px;
  @media screen and (max-width: 1279px) {
  }
`;

const Div = styled.div`
  display: flex;
  gap: 1em;
`;

const Link = styled(Button)`
  text-decoration: none;
  background: ${(props) =>
    props.$background ? "var(--orange-secondary)" : "var(--orange-primary)"};
  font-size: 15px;
  font-weight: 700;
  color: var(--brown-primary);
  box-shadow: 2px 2px 10px var(--shadow-secondary);
  cursor: pointer;
`;

function Navigation() {
  return (
    <Container>
      <Text>É Lojista?</Text>
      <Div>
        <Link $background to={LoginRoute}>
          Entrar
        </Link>
        <Link to={RegisterRoute}>Registrar</Link>
      </Div>
    </Container>
  );
}

export default Navigation;
