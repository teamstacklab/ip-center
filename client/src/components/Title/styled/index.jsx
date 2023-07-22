import { styled } from "styled-components";

export const TitleBox = styled.span`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 6px;
  font-size: 1rem;
  width: fit-content;
  color: ${(props) => props.color || "var(--black)"};
  @media screen and (max-width: 1440px) {
    font-size: 0.85rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

export const TitleText = styled.h1`
  margin-bottom: -2px;
  font-size: 2em;
  font-weight: ${props => props.fw || 500};
  margin: 0 !important;
  padding: 0 !important;
`;

export const TitleIcon = styled.div`
  color: ${(props) => props.iconColor|| "inherit"};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  margin-bottom: 3px;
`;
