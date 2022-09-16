import React, {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Mousewheel, Pagination, Autoplay} from "swiper";
import homepage from "../Homepage.module.sass";
import rafflesStyle from "./Raffles.module.sass";
import {useGetRaffles, useGetRecentWinners} from "hooks/useRafflesList";
import {Image} from "antd";
import {RaffleStatusType} from "../../../src/generated/graphql_p2e";
import Link from "next/link";

const Raffles = () => {
  const [middleRaffleItem, setMiddleRaflleItem] = useState(0)
  const {getRecentWinnersLoading, getRecentWinnersError, getRecentWinnersData} = useGetRecentWinners();
  const {getRafflesLoading, getRafflesError, getRafflesData} = useGetRaffles();

  const rafflesData = getRafflesData?.topRaffle
  console.log(Math.floor(rafflesData?.length / 2));

  useEffect(() => {
    setMiddleRaflleItem(Math.floor(rafflesData?.length / 2))
  }, [rafflesData])

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
                  <img src={raffle?.img ?? ''} alt="" onError={(e) => {
                    e.currentTarget.src = '/assets/homepage/raffles/rafflesError.jpg'
                  }}/>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="lucis-container-2 text-center">
        <Link href={process.env.NEXT_PUBLIC_P2E_URL + '/playcore/raffles'} passHref>
          <a target="_blank" className={`${homepage.btnCommon} ${rafflesStyle.btnCommon}`}>
            <span>JOIN NOW</span>
          </a>
        </Link>
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
          modules={[Mousewheel, Pagination, Autoplay]}
          className="mySwiper"
          loop={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
        >
          {
            getRecentWinnersData && getRecentWinnersData?.getRecentWinners?.slice(0,8).map((item, index) => {
                return (
                  <div key={`${item?.raffle?.uid}${index}`}>
                    <SwiperSlide>
                      <span className={rafflesStyle.time}></span>
                      <Image src={item?.user?.profile?.avatar ? item?.user?.profile?.avatar : '/assets/homepage/default_avatar.png'} preview={false} alt="" fallback="/assets/homepage/default_avatar.png" />
                      <span className={rafflesStyle.winnerName}>{item?.user?.profile?.display_name}</span>
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
    </section>
  )
}

export default Raffles;
