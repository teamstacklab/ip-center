import { styled } from "styled-components";
import * as Box from "@/components/Box";

export const Container = styled(Box.Flex)`
  align-items: flex-start;
  flex-direction: column;
  background-color: var(--orange-tertiary);
  border-radius: 10px;
  border: 1px solid var(--orange-tertiary-hover);
  padding: 16px 12px;
  color: var(--brown-primary);
`;

export const Name = styled.h1`
  font-size: 1.75em;
`;

export const Description = styled.p`
  font-size: 1em;
`;