import * as Box from "@/components/Box";
import { Button as Btn } from "@/components/Button";
import { styled } from "styled-components";

export const Container = styled(Box.Flex)`
  width: 100%;
  height: fit-content;
  gap: 12px;
  overflow: hidden;
  border-radius: 12px !important;
  background-color: var(--orange-tertiary);
  box-shadow: 0 0 6px var(--shadow-primary);
  font-size: 1rem;
  transition: all 300ms;
  &:hover {
    box-shadow: 0 0 20px var(--shadow-primary);
  }
  @media screen and (max-width: 1280px) {
    width: calc(320px - 36px);
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    gap: calc(12px - 0.25 * 12px);
  }
`;

Container.Image = styled(Box.Flex)`
  box-shadow: none !important;
  border-radius: 0 !important;
  height: 230px;
`;

Container.Buttons = styled(Box.Flex)`
  margin-top: auto;
  flex-direction: row !important;
  width: 100%;
  height: fit-content;
  border-radius: 0 !important;
  box-shadow: none;
`;

Container.Content = styled(Box.Flex)`
  gap: 12px;
  padding: 16px;
  width: 100%;
  border-radius: 0 !important;
  box-shadow: none;
  @media screen and (max-width: 1280px) {
    padding: calc(16px - 0.25 * 16px);
  }
`;

export const Image = styled.img`
  object-fit: cover !important;
  width: 100% !important;
  height: 100% !important;
`;

export const Title = styled.h1`
  font-size: 1.7em;
  font-weight: 600;
`;

export const Description = styled.p`
  font-size: 0.95em;
  line-height: 1.2em;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow: scroll;
  }
`;

export const Button = styled(Btn)`
  width: ${(props) => props.width || "50%"};
  ${(props) =>
    props.variant == "green"
      ? `
      background: var(--green-primary);
      color: var(--orange-primary) !important;
      &:hover {
        background: var(--green-primary-hover);
      }
      `
      : `
      background: var(--orange-primary);
      color: var(--brown-primary) !important;
  `};
  height: 42px;
  box-shadow: none;
  font-size: 0.9em;
  @media screen and (max-width: 768px) {
    height: 38px;
  }
`;

Button.Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4em;
`;
