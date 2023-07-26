import React from "react";
import { styled } from "styled-components";
import * as Box from "@/components/Box";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
export const Container = styled(Box.Section)`
  width: 100%;
  display: flex;
  padding: 0 !important;
`;

export const Flex = styled(Box.Flex)`
  padding: 32px;
  height: 100%;
  width: 100%;
  @media screen and (max-width: 768px) {
    padding: calc(32px / 2.5);
    flex-direction: column-reverse !important;
  }
`;

export const Content = styled(Box.Flex)`
  padding: calc(3vmin) calc(3vmin * 2);
  color: var(--brown-primary);
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  gap: 0 !important;
  @media screen and (max-width: 1280px) {
    padding: calc(3vmin / 1.5) calc(3vmin / 3);
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: calc(3vmin / 2) calc(3vmin / 1.5);
  }
`;

export const Information = styled(Content)`
  align-items: center;
  height: 100%;
  gap: 32px !important;
`;

export const Title = styled.h1`
  font-size: 2em;
  font-weight: 700;
`;

export const Slogan = styled.p`
  font-size: 1.2em;
  font-style: italic;
  margin-bottom: 12px;
`;

const SwiperContainer = styled.div`
  width: 100%;
  margin-bottom: calc(12px * 1.5);
  .swiper {
    height: calc(28vmax);
    overflow: hidden;
    @media screen and (max-width: 768px) {
      height: 280px;
    }
  }
`;

export const Carousel = ({ children, ...props }) => {
  return (
    <React.Fragment>
      <SwiperContainer>
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

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;

export const Label = styled.h2`
  font-size: 1.6em;
  font-weight: 700;
  color: var(--brown-secondary);
  margin-bottom: calc(12px / 1.5);
`;

export const Description = styled.p`
  font-size: 1.15em;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

Logo.Image = styled.img`
  width: 12vmin;
  height: 12vmin;
  border-radius: 50%;
  box-shadow: 2px 2px 16px var(--shadow-primary);
  margin-bottom: 12px;
  object-fit: cover;
  @media screen and (max-width: 768px){
    width: 90px;
    height: 90px;
  }
`;

Logo.Text = styled(Title)`
  font-size: 1.6em;
`;

export const Metadata = styled.div`
  max-width: 50vmin;
  width: 100%;
  @media screen and (max-width: 768px){
    max-width: 100%;
    width: 100%;
  }
`;

export const Meta = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

Meta.Container = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

Meta.Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--orange-primary);
  font-size: 1.8em;
`;

Meta.Title = styled.h3`
  font-size: 1.25em;
  font-weight: 600;
  margin: 0;
`;

Meta.List = styled.ul`
  margin-left: 12px;
`;

Meta.Data = styled.li`
  font-weight: 500;
  font-size: 1.15em;
  list-style-type: circle;
`;
