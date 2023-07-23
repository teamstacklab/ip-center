import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { LojasRoute } from "../../../pages/Stores";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import {
  Div,
  IconArrow,
  LinkLojas,
  SpanTitle,
  SlideLojas,
  ImageSlide,
  CaroseulLojas,

} from "./Style";

/*Fotos da lojas*/
import imperio from "../../../assets/images/lojas/imperio.jpg";
import HotDog from "../../../assets/images/lojas/hotdog.jpg";
import IconLojas from "../../Icon/IconLojas";

const slideLojas = [imperio, HotDog, imperio];

function HomeLojas() {
  return (
    <>
      <Div>
        <IconLojas />
        <LinkLojas to={LojasRoute} alt="Veja todas">
          <SpanTitle>Veja todas</SpanTitle>
          <IconArrow />
        </LinkLojas>
      </Div>
      <div>
        <CaroseulLojas
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          pagination={{ clickable: true }}
          navigation={true}
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
              <SlideLojas>
                <ImageSlide src={lojas} alt="Lojas do ipê center" />
              </SlideLojas>
            );
          })}
        </CaroseulLojas>
      </div>
    </>
  );
}

export default HomeLojas;
