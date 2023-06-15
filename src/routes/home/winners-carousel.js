// Import Swiper styles
import "swiper/swiper-bundle.min.css";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import { Thumbs } from 'swiper';

import Winners from "./winners-list.json";


export default function WinnersCarousel() {

  return (
    <>
      <Swiper
        className="carousel"
        spaceBetween={50}
        slidesPerView={1}
      >
        {Winners.map((winner) => (
          <SwiperSlide>
            <img src={winner.profile} />
            <p>{winner.name}</p>
            <p>{winner.company ? winner.company : winner.title}</p>
          </SwiperSlide>
        ))}

      </Swiper>
    </>
  )
}