import s from "./index.module.sass";
import React from "react";
import { LuckyChestTier } from "src/generated/graphql_p2e";
import { useGetChestDetail } from "hooks/useLuckyChest";
import ChestPrize from "./prize";
import {LINK_HOME_ARENA} from "../../../utils/Enum";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper";
import "swiper/css";
import "swiper/css/grid";

export enum GAMES {
  FACEITCSGO = 1,
  GARENALOL = 2,
}

export default function LuckyChest() {
  const {getChestDetailLoading, getChestDetailError, getChestDetailData} = useGetChestDetail({
    game_platform_id: GAMES.GARENALOL,
    tier: LuckyChestTier.Standard,
  })

  const joinNow = () => {
    window.open(LINK_HOME_ARENA, '_blank');
  }

  return (
    <>
      <section>
        {/*<div className={`lucis-container-2 ${s.container1}`}>*/}
        {/*  <div className={s.rowData}>*/}
        {/*    <span className={s.time}>June 29th, 6:30 am </span>*/}
        {/*    <span className={s.name}>Ngô Thị Là Ánh Dương </span>*/}
        {/*    <span className={s.desc}>Received a prize </span>*/}
        {/*    <span className={s.value}>Valued at €20</span>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className={s.wrapper}>
          <div className={`lucis-container-2 ${s.container}`}>
            <div className={s.leftContainer}>
              <div className={s.listItems}>
                {/*{getChestDetailData?.prizes?.slice(0,16).map(prize => (*/}
                {/*  <>*/}
                {/*    <ChestPrize*/}
                {/*      key={prize?.id}*/}
                {/*      description={prize?.desc}*/}
                {/*      image={prize?.img ?? ''}*/}
                {/*      title={prize?.title}*/}
                {/*      rarity={prize?.rarity}*/}
                {/*    />*/}
                {/*  </>*/}
                {/*))}*/}
                <Swiper
                  slidesPerView={4}
                  //spaceBetween={8}
                  //initialSlide={1}
                  loop={true}
                  // grid={{
                  //   rows: 2,
                  // }}
                  pagination={{
                    clickable: true
                  }}
                  modules={[Grid]}
                  breakpoints={{
                    360: {
                      slidesPerView: 4,
                      spaceBetween: 8
                    },
                    575: {
                      slidesPerView: 6,
                      spaceBetween: 8
                    },
                    768: {
                      slidesPerView: 8,
                      spaceBetween: 16
                    },
                  }}
                >
                  {getChestDetailData?.prizes?.slice(0,16).map((prize,index) => (
                    <>
                      <div key={`${prize?.id}-${index}`}>
                        <SwiperSlide  key={`${prize?.id}-${index}`}>
                          <ChestPrize
                            key={prize?.id}
                            description={prize?.desc}
                            image={prize?.img ?? ''}
                            title={prize?.title}
                            rarity={prize?.rarity}
                          />
                        </SwiperSlide>
                      </div>

                    </>
                  ))}
                </Swiper>
              </div>
              <div className={`${s.btn}`} onClick={joinNow}>
                <div>LUCKY CHEST</div>
              </div>
            </div>

            <div className={s.boxImages}>
              <img src="/assets/homepage/box_luckychest.svg"  alt=""/>
            </div>
          </div>
        </div>
      </section>
      </>
  );
};
