import { styled } from "styled-components";
import BSForm from "react-bootstrap/Form";
import BSButton from "react-bootstrap/esm/Button";
import * as Icons from "react-bootstrap-icons";

export const Form = styled(BSForm)`
  padding: 16px;
  border-radius: 12px;
  width: 100%;
  font-size: 1rem;
  background: var(--orange-tertiary);
  @media screen and (max-width: 425px) {
    padding: 0;
  }
`;

Form.Input = styled(BSForm.Control)`
  min-height: 40px;
  height: 40px;
  border: 2px solid transparent;
  margin-bottom: 8px !important;
  background: var(--white);
  border-radius: 4px !important;
  box-shadow: 0 0 8px var(--shadow-secondary) !important;
  &:focus {
    border: 2px solid var(--orange-primary);
  }
`;

Form.Select = styled(BSForm.Select)`
  height: 40px;
  border-radius: 4px !important;
  border: 2px solid transparent;
  margin-bottom: 8px !important;
  background-color: var(--white);
  box-shadow: 0 0 8px var(--shadow-secondary) !important;
  &:focus {
    border: 2px solid var(--orange-primary);
  }
`;

Form.Textarea = styled(Form.Input).attrs(() => ({ as: "textarea" }))`
  height: 100% !important;
  padding: 8px;
  outline: none;
  @media screen and (max-width: 768px) {
    height: 150px !important;
  }
`;

Form.Option = styled.option`
  color: "#000";
`;

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
  @media screen and (max-width: 768px) {
    flex-direction: column !important;
  }
`;

Form.Submit = ({ children, ...props }) => {
  const Button = styled(BSButton)`
    margin-top: ${(props) => props.top || "22px"};
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
    <Button type="submit" {...props}>
      {children}
      <IconContainer>
        <Icons.Check2Circle />
      </IconContainer>
    </Button>
  );
};
