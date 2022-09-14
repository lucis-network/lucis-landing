import React, { useState, useEffect } from "react";
import s from "./index.module.sass";
import { Swiper, SwiperSlide } from "swiper/react";
import {EffectCoverflow, Navigation, Pagination} from "swiper";
import homepage from "../Homepage.module.sass";
import rafflesStyle from "./Raffles.module.sass";
import { Mousewheel } from "swiper";
import { useGetRecentWinners } from "hooks/useRafflesList";
import {Image} from "antd";

const Raffles = () => {
  const {getRecentWinnersLoading, getRecentWinnersError, getRecentWinnersData} = useGetRecentWinners();

  console.log("getRecentWinnersData", getRecentWinnersData);

  return (
    <section className={`${homepage.section} ${rafflesStyle.sectionRaffles}`}>
      <div className={`${homepage.sectionTitleWrap} ${rafflesStyle.sectionTitleWrap}`}>
        <div className="lucis-container-2">
          <h2 className={homepage.sectionTitle}>RAFFLES</h2>
          <p className={homepage.sectionDesc}>Free to get big rewards for hard and skilled gamers. Join Lucis raffles!</p>
        </div>
      </div>
      <div className={rafflesStyle.rafflesWrap}>
        <div className={rafflesStyle.rafflesBg}></div>
        <div className={rafflesStyle.sliderWrap}>
          <Swiper
            centeredSlides
            initialSlide={2}
            slidesPerView="auto"
            // breakpoints={{
            //   320: {
            //     slidesPerView: 2,
            //   },
            //   1600: {
            //     slidesPerView: 5,
            //   },
            // }}
          >
            <SwiperSlide>
              <div className={rafflesStyle.sliderItem}>
                <img src="/assets/homepage/raffles/raffle2.jpg" alt=""/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={rafflesStyle.sliderItem}>
                <img src="/assets/homepage/raffles/raffle1.jpg" alt=""/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={rafflesStyle.sliderItem}>
                <img src="/assets/homepage/raffles/raffle3.jpg" alt=""/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={rafflesStyle.sliderItem}>
                <img src="/assets/homepage/raffles/raffle2.jpg" alt=""/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={rafflesStyle.sliderItem}>
                <img src="/assets/homepage/raffles/raffle1.jpg" alt=""/>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <button className={`${homepage.btnCommon} ${rafflesStyle.btnCommon}`}>JOIN NOW</button>

        <div className={rafflesStyle.spotlight}>
          <Swiper
            direction={"vertical"}
            slidesPerView={4}
            spaceBetween={4}
            centeredSlides
            initialSlide={3}
            mousewheel={true}
            loopedSlides={1}
            loopedSlidesLimit={true}
            pagination={{
              clickable: true,
            }}
            modules={[Mousewheel, Pagination]}
            className="mySwiper"
            loop={true}
          >
            {
              getRecentWinnersData && getRecentWinnersData?.getRecentWinners?.slice(0,8).map((item, index) => {
                  return (
                    <div key={`${item?.raffle?.uid}${index}`}>
                      <SwiperSlide>
                        <span className={rafflesStyle.time}></span>
                        <Image src={item?.user?.profile?.avatar ? item?.user?.profile?.avatar : '/assets/homepage/default_avatar.png'} preview={false} alt="" fallback="/assets/homepage/default_avatar.png" />
                        <span className={rafflesStyle.name}>{item?.user?.profile?.display_name}</span>
                        <span className={rafflesStyle.desc}>Received a prize at</span>
                        <span className={rafflesStyle.value}> ${item?.raffle?.valued_at}</span>
                      </SwiperSlide>
                    </div>
                  )
                }
              )
            }

          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Raffles;
