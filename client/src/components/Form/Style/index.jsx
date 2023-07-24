import { styled } from "styled-components";
import BSForm from "react-bootstrap/Form";
import BSButton from "react-bootstrap/esm/Button";
import * as Icons from "react-bootstrap-icons";

export const Form = styled(BSForm)`
  padding: 16px;
  border-radius: 12px;
  width: 100%;
  font-size: 1rem;
  background-color: var(--orange-tertiary);
`;

Form.Input = ({ name, ...props }) => {
  const Input = styled(BSForm.Control)`
    height: 40px;
    background: var(--white) !important;
    box-shadow: 0 0 8px var(--shadow-secondary) !important;
    border: 2px solid transparent;
    margin-bottom: 8px !important;
    &:focus {
      border: 2px solid var(--orange-primary);
    }
  `;

  return <Input controlId={name} {...props} />;
};

Form.Label = styled(BSForm.Label)`
  font-size: 1em;
  font-weight: 600;
  margin-bottom: 4px !important;
  color: var(--brown-primary);
`;

Form.Div = styled.div`
  display: flex;
  width: 100%;
  ${(props) =>
    props.$column
      ? `
    flex-direction: column;
    gap: 0;
  `
      : `
    flex-direction: row;
    gap: 8px;
  `};
`;

Form.Submit = ({ children }) => {
  const Button = styled(BSButton)`
    margin-top: 16px;
    height: 40px;
    width: 100%;
    font-size: 1em;
    gap: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--green-primary);
    color: var(--orange-primary) !important;
    box-shadow: 0 0 10px var(--shadow-primary);
    border: 0;
    &:is(:hover, :active) {
      background: var(--green-primary-hover) !important;
    }
  `;
  const IconContainer = styled.div`
    font-size: 1.25em;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <Button type="submit">
      {children}
      <IconContainer>
        <Icons.Check2Circle />
      </IconContainer>
    </Button>
  );
};
