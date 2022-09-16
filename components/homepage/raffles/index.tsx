import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Mousewheel, Pagination} from "swiper";
import homepage from "../Homepage.module.sass";
import rafflesStyle from "./Raffles.module.sass";
import {useGetRaffles, useGetRecentWinners} from "hooks/useRafflesList";
import {Image} from "antd";
import {RaffleStatusType} from "../../../src/generated/graphql_p2e";
import moment from "moment";

const Raffles = () => {
  const {getRecentWinnersLoading, getRecentWinnersError, getRecentWinnersData} = useGetRecentWinners();
  const {getRafflesLoading, getRafflesError, getRafflesData} = useGetRaffles({
    filter: {
      status: RaffleStatusType.Enabled,
      page: 1
    }
  });

  const rafflesData = getRafflesData?.searchRaffle

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
            slideToClickedSlide
          >
            {rafflesData && rafflesData.map(raffle => (
              <SwiperSlide key={raffle?.uid}>
                <div className={rafflesStyle.sliderItem}>
                  <img src={raffle?.img ?? ''} alt=""/>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="lucis-container-2 text-center">
        <button className={`${homepage.btnCommon} ${rafflesStyle.btnCommon}`}>JOIN NOW</button>
      </div>
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
                      <span className={rafflesStyle.time}>{moment(item?.raffle?.end_at).format("MMMM Do hh:mm")}</span>
                      <Image src={item?.user?.profile?.avatar ? item?.user?.profile?.avatar : '/assets/homepage/default_avatar.png'} preview={false} alt="" fallback="/assets/homepage/default_avatar.png" />
                      <span className={rafflesStyle.name}>{item?.user?.profile?.display_name}</span>
                      <span className={rafflesStyle.desc}>received a prize at</span>
                      <span className={rafflesStyle.value}> ${item?.raffle?.valued_at}</span>
                    </SwiperSlide>
                  </div>
                )
              }
            )
          }

        </Swiper>
      </div>
    </section>
  )
}

export default Raffles;
