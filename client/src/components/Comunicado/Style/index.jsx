import { styled } from "styled-components";
import * as Box from "@/components/Box";

export const Container = styled(Box.Flex)`
  align-items: flex-start;
  flex-direction: column;
  background-color: var(--orange-tertiary);
  border-radius: 10px;
  border: 1px solid var(--orange-tertiary-hover);
  padding: 18px 14px;
  color: var(--brown-primary);
  transition: all 300ms;
  &:hover {
    scale: 102%;
    box-shadow: 0 0 20px var(--shadow-secondary);
  }
`;

export const Name = styled.h1`
  margin: 0 !important;
  font-weight: 600;
  font-size: 1.7em;
`;

export const Description = styled.p`
  font-size: 1em;
`;
