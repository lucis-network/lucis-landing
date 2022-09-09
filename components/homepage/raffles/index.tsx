import React, { useState, useEffect } from "react";
import s from "./index.module.sass";
import { Swiper, SwiperSlide } from "swiper/react";
import {EffectCoverflow, Navigation, Pagination} from "swiper";
import homepage from "../Homepage.module.sass";
import rafflesStyle from "./Raffles.module.sass";
import lucisNFTs from "../lucisNFTs/LucisNFTs.module.sass";

const Raffles = () => {

  return (
    <section className={`${homepage.section} ${rafflesStyle.sectionRaffles}`}>
      <div className={homepage.sectionTitleWrap}>
        <div className="lucis-container-2">
          <h2 className={homepage.sectionTitle}>RAFFLES</h2>

          <p className={homepage.sectionDesc}>Free to get big rewards for hard and skilled gamers. Join Lucis raffles!</p>
        </div>
        <div className={rafflesStyle.rafflesWrap}>
          <div className={rafflesStyle.rafflesBg}></div>
          <div className={rafflesStyle.sliderWrap}>
            <Swiper
              centeredSlides
              slidesPerView="auto"
              initialSlide={1}
              loop
              breakpoints={{
                320: {
                  spaceBetween: 8
                },
                1600: {
                  spaceBetween: 24
                },
              }}
            >
              <SwiperSlide>
                <img src="/assets/homepage/raffles/raffle2.jpg" alt=""/>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/homepage/raffles/raffle1.jpg" alt=""/>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/homepage/raffles/raffle3.jpg" alt=""/>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/homepage/raffles/raffle2.jpg" alt=""/>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/homepage/raffles/raffle1.jpg" alt=""/>
              </SwiperSlide>
            </Swiper>
          </div>
          <button className={`${homepage.btnCommon} ${rafflesStyle.btnCommon}`}>OWN LUCIS NFTS</button>
        </div>
      </div>
    </section>
  )
}

export default Raffles;
