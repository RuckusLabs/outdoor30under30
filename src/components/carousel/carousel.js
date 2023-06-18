// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import style from "./carousel.css";

// Data
import Winners from "../../assets/data/winners-list.json";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper';

export default function Carousel() {

  return (
    <>
      <Swiper
        className={style.carousel}
        slidesPerView={1}
        modules={[Autoplay, Navigation, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        style={{
          "--swiper-navigation-color": "#fff",
        }}
      >
        {Winners.map((winner) => (

          <SwiperSlide className={style.slide}>
            <img src={winner.profile} />
            <div className={style.meta}>
              <p>{winner.name}, {winner.age}</p>
              <p className={style.metaAlternate}>{winner.company ? winner.company : winner.title}</p>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
    </>
  )
}