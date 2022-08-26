import React, { useState } from "react";
import s from "./index.module.sass";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
const Raffles = () => {
  const bannerClasses = [s.banner1, s.banner2, s.banner3, s.banner4, s.banner5]
  const bannerBg = [s.bgBanner1, s.bgBanner2, s.bgBanner3, s.bgBanner4, s.bgBanner5]

  const [stateIndexBanner, setStateIndexBanner] = useState(0);
  return (
    <div className={s.raffles_wrapper}>
      <div className={s.header}>
        <div className={s.bigName}>RAFFLES</div>
        <div className={s.subTitle}>
          Free to get big rewards. for hard and skilled gamers Join Lucis
          raffles!
        </div>
      </div>
      <div className={s.body}>
        {bannerClasses.map((bannerClass, bannerIndex) => {
          // let index =
          //   stateIndexBanner + bannerIndex > 4
          //     ? stateIndexBanner + bannerIndex - 4
          //     : stateIndexBanner + bannerIndex;
          return (
            <div
              className={`${bannerClasses[bannerIndex]} ${bannerBg[bannerIndex]}`}
              key={bannerClass}
              onClick={() => setStateIndexBanner(bannerIndex)}
            >
              <div className={s.btnHover}>Join raffles</div>
            </div>
          );
        })}
        {/* <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        loop={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img alt="imgBanner" src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="imgBanner" src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="imgBanner" src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="imgBanner" src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="imgBanner" src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="imgBanner" src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="imgBanner" src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="imgBanner" src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="imgBanner" src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper> */}
      </div>
      <div className={s.footer}></div>
    </div>
  );
};

export default Raffles;
