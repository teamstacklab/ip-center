/*Fotos Ipê Center*/
import ipe02 from "@/assets/images/ipecenter/ipe02.jpeg";
import ipe08 from "@/assets/images/ipecenter/ipe08.jpeg";
import ipe09 from "@/assets/images/ipecenter/ipe09.jpeg";
import artepc from "@/assets/images/arte.png";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Carousel, Image, Slide } from "@/pages/Home/Style";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

/*Para mobile*/
const slide = [ipe02, ipe09, ipe08];

/*Para Computador*/
const slide2 = [artepc];

function SlideShoping() {
  return (
    <div>
      <Carousel
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation={true}
        pagination={{ clickable: true }}
      >
        {slide.map((slide) => {
          return (
            <Slide>
              <Image srcMb={slide} srcLg={slide2} />
            </Slide>
          );
        })}
      </Carousel>
    </div>
  );
}

export default SlideShoping;
