import { styled } from "styled-components";

import { Shop, ArrowRight } from "react-bootstrap-icons";

import { Link } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";

export const Div = styled.div`
  margin-bottom: 12px;
  display: flex;
  text-align: center;
  justify-content: space-between;
`;

export const ContainerTitle = styled.span`
  display: flex;
  text-align: center;
  justify-content: space-between;
  align-items: end;
  padding: 0 0 9px 0;
  gap: 6px;
`;

export const IconShop = styled(Shop)`
  font-size: 2em;
  color: var(--orange-primary);
  @media screen and (max-width: 1440px) {
    font-size: 1.8em;
  }
`;

export const IconArrow = styled(ArrowRight)`
  font-size: 1.7em;
  color: var(--orange-primary);
`;

export const LinkLojas = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--orange-tertiary);
  gap: 11px;
  margin-top: -10px;
`;

export const SpanTitle = styled.span`
  font-size: 1.1em;
  font-weight: 600;
  border-bottom: 1px solid var(--orange-tertiary);
  @media screen and (max-width: 1440px) {
    font-size: 16px;
  }
`;

export const CaroseulLojas = styled(Swiper)`
  border-radius: 12px;
  overflow: hidden;
`;

export const SlideLojas = styled(SwiperSlide)`
  width: 100%;
  height: 380px;
  object-fit: cover;

  @media screen and (max-width: 1440px) {
    height: 280px;
    width: 100%;
  }
`;

export const ImageSlide = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;
