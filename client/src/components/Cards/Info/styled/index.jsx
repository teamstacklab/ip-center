import { styled } from "styled-components";
import Title from "@/components/Title";
import { Button } from "@/components/Button";
import { Link } from "react-router-dom";
import * as Icons from "react-bootstrap-icons";

export const InfoBox = styled.div`
  text-decoration: none;
  display: flex;
  gap: 16px;
  flex-direction: column;
  font-size: 1rem;
  width: 432px;
  height: 234px;
  border-radius: 12px;
  padding: 24px 22px;
  background: var(--green-primary);
  color: var(--white) !important;
  box-shadow: 1px 2px 25px var(--shadow-primary);
  @media screen and (max-width: 1440px) {
    font-size: 0.9rem;
    width: calc(432px - 50px);
    height: calc(234px - 20px);
  }
  @media screen and (max-width: 1280px) {
    box-shadow: none;
    width: fit-content;
    height: fit-content;
    padding: 0;
    align-items: center;
    background: transparent;
  }
`;

export const InfoBody = styled.p`
  font-size: 1.2em;
  line-height: 30px;
  margin-bottom: auto;
  @media screen and (max-width: 1280px) {
    display: none !important;
  }
`;

export const InfoIcon = styled(Icons.ArrowRight)`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`;

export const InfoTitleBox = styled(Link)`
  text-decoration: none;
  width: fit-content;
`;

export const InfoTitle = styled(Title)`
  text-decoration: none !important;
  color: var(--white) !important;
  @media screen and (max-width: 1280px) {
    color: var(--brown-primary) !important;
    flex-direction: column;
    align-items: center;
  }
`;

export const InfoTitleIcon = styled(Title.Icon)`
  color: var(--orange-primary);
  @media screen and (max-width: 1280px) {
    padding: 26px;
    border-radius: 8px;
    font-size: 2.5em;
    box-shadow: 2px 2px 15px var(--shadow-primary);
    background-color: var(--green-primary);
    &:hover {
      background: var(--green-primary-hover);
    }
  }
`;

export const InfoTitleText = styled(Title.Text)`
  font-weight: 600;
  @media screen and (max-width: 1280px) {
    font-size: 1.75em;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 150px;
    min-height: 50px;
  }
  @media screen and (max-width: 768px) {
    width: calc(150px - 1.75em * 2);
  }
`;

export const InfoButton = styled(Button)`
  margin-left: auto;
  @media screen and (max-width: 1280px) {
    display: none;
  }
`;
