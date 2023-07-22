import { styled } from "styled-components";
import * as Box from "@/components/Box";
import { Button as Btn } from "@/components/Button";

export const Container = styled(Box.Flex)`
  gap: 0;
  border-radius: 10px;
  box-shadow: 0 0 10px var(--shadow-secondary);
  border: 1px solid var(--orange-secondary-hover);
  align-items: center;
  padding: 16px;
  background: var(--orange-tertiary);
  @media screen and (max-width: 768px) {
    gap: 16px;
    flex-direction: column;
    align-items: center;
  }
`;

Container.Content = styled(Box.Flex)`
  align-items: flex-start;
`;

Container.Actions = styled(Box.Flex)`
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

Container.Buttons = styled(Container.Actions)`
  
`;

export const Bold = styled.b`
  font-weight: 600;
`;

export const Marked = styled.span`
  width: fit-content;
  padding: 1px 6px;
  background: ${(props) =>
    props.$secondary
      ? "var(--orange-secondary)"
      : props.$tertiary
      ? "var(--brown-tertiary)"
      : "var(--orange-primary)"};

  border-radius: 4px;
  margin: 0 2px;
`;

export const Button = styled(Btn)`
  box-shadow: none;
  height: 42px;
  font-size: 2em;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Store = styled.h1`
  font-size: 1.65em;
  font-weight: 600;
  margin-bottom: 4px;
  @media screen and (max-width: 768px){
    text-align: center;
    width: 100%;
    margin-bottom: 12px;
  }
`;

export const Info = styled.p`
  font-size: 1.1em;
  font-weight: 500;
`;

export const Sub = styled.h2`
  font-size: 1.2em;
  font-weight: 600;
`;
