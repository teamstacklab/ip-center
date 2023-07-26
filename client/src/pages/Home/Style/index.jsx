import React from "react";
import { styled } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import * as Box from "@/components/Box";

import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Main = styled(Box.Main)`
  width: 100%;
  margin-top: var(--nav-top-desktop);
  @media screen and (max-width: 1280px) {
    margin-top: var(--nav-top-mobile);
  }
`;

const SwiperContainer = styled.div`
  width: 100%;
  .swiper {
    width: ${props => props.width || "100%"};
    height: ${props => props.height || "65vh"};
    overflow: hidden;
    @media screen and (max-width: 768px) {
      height: ${props => `calc(${props.height} / 1.15)` || "42vh"};
    }
  }
`;

export const Carousel = ({ children, height, width, ...props}) => {
  return (
    <React.Fragment>
      <SwiperContainer height={height} width={width}>
        <Swiper
          className="swiper"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation={true}
          pagination={{ clickable: true }}
          {...props}
        >
          {children}
        </Swiper>
      </SwiperContainer>
    </React.Fragment>
  );
};

export const Slide = SwiperSlide;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Image = ({ srcLg, srcMb }) => {
  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={srcLg} />
      <Img src={srcMb} alt="Artes do Shopping" />
    </picture>
  );
};

export const Cards = styled(Box.Flex)`
  box-shadow: inset 0 0 30px var(--shadow-secondary);
  justify-content: space-evenly;
  padding: 64px 0;
  flex-direction: row !important;

  @media screen and (max-width: 1280px) {
    padding: 42px 0 calc(42px / 2);
  }
`;

export const Stores = styled.section`
  background-color: var(--brown-primary);
  padding: 24px 64px 48px;

  @media screen and (max-width: 1440px) {
    padding: 16px 16px 46px;
  }
`;

export const Events = styled.section`
  display: flex;
  justify-content: center;
  gap: 44px;
  height: 700px;
  padding-top: 72px;

  @media screen and (max-width: 1440px) {
    gap: 10px;
    padding: 12px 23px 0;
    flex-direction: column-reverse;
    height: auto;
  }
`;
