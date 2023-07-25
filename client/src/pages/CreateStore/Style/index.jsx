import { styled } from "styled-components";
import { Form as DefaultForm } from "@/components/Form";

export const Form = styled(DefaultForm)`
  background-color: transparent !important;
`;

Form.Div = styled(DefaultForm.Div)`
  gap: ${(props) => (props.$column ? "0" : "64px")};
  @media screen and (max-width: 1280px) {
    gap: ${(props) => (props.$column ? "0" : "32px")};
  }
  @media screen and (max-width: 768px) {
    gap: 0 !important;
  }
`;

Form.Input = styled(DefaultForm.Input)`
  background-color: var(--orange-tertiary) !important;
`;

Form.Select = styled(DefaultForm.Select)`
  background-color: var(--orange-tertiary) !important;
`;

Form.Textarea = styled(DefaultForm.Textarea)`
  background-color: var(--orange-tertiary) !important;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 26px;
`;

Container.Button = styled.div`
  width: 150px;
  margin-left: auto;
`;