import React from "react";
import * as Icons from "react-bootstrap-icons";
import { LojasRoute } from "../../../pages/Stores";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Div, IconArrow, ImageSlide, LinkLojas, SpanTitle } from "./Style";

import { Carousel, Slide } from "@/pages/Home/Style";

import { Title } from "@/components/Title";

/*Fotos da lojas*/
import imperio from "@/assets/images/lojas/imperio.jpg";
import HotDog from "@/assets/images/lojas/hotdog.jpg";

const slideLojas = [imperio, HotDog, imperio, imperio, HotDog, imperio];

function HomeLojas() {
  return (
    <>
      <Div>
        <Title
          iconColor={"var(--orange-secondary)"}
          color={"var(--orange-tertiary)"}
          icon={<Icons.Shop />}
        >
          Lojas
        </Title>
        <LinkLojas to={LojasRoute} alt="Veja todas">
          <SpanTitle>Veja todas</SpanTitle>
          <IconArrow />
        </LinkLojas>
      </Div>
      <div>
        <Carousel
          height={"400px"}
          breakpoints={{
            1280: {
              slidesPerView: 3,
            },
          }}
          slidesPerView={1}
          spaceBetween={32}
        >
          {slideLojas.map((lojas) => {
            return (
              <Slide>
                <ImageSlide src={lojas} />
              </Slide>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}

export default HomeLojas;
