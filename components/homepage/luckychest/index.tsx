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
      <div className={s.wrapper}>
        <div className={`lucis-container-2 ${s.container}`}>
          <div >
            <div className={s.listItems}>
              {getChestDetailData?.prizes?.slice(0,16).map(prize => (
                <>
                  <ChestPrize
                    key={prize?.id}
                    description={prize?.desc}
                    image={prize?.img ?? ''}
                    title={prize?.title}
                    rarity={prize?.rarity}
                  />
                </>
              ))}
              {/*<Swiper*/}
              {/*  slidesPerView={8}*/}
              {/*  spaceBetween={8}*/}
              {/*  //initialSlide={1}*/}
              {/*  // grid={{*/}
              {/*  //   rows: 1,*/}
              {/*  // }}*/}
              {/*  pagination={{*/}
              {/*    clickable: true*/}
              {/*  }}*/}
              {/*  //modules={[Grid]}*/}
              {/*  // breakpoints={{*/}
              {/*  //   360: {*/}
              {/*  //     slidesPerView: 2,*/}
              {/*  //     spaceBetween: 7.5*/}
              {/*  //   },*/}
              {/*  //   575: {*/}
              {/*  //     slidesPerView: 3,*/}
              {/*  //     spaceBetween: 8*/}
              {/*  //   },*/}
              {/*  //   768: {*/}
              {/*  //     slidesPerView: 3,*/}
              {/*  //     spaceBetween: 16*/}
              {/*  //   },*/}
              {/*  //   1320: {*/}
              {/*  //     slidesPerView: 4,*/}
              {/*  //     spaceBetween: 32*/}
              {/*  //   }*/}
              {/*  // }}*/}
              {/*>*/}
              {/*  {getChestDetailData?.prizes?.slice(0,16).map((prize,index) => (*/}
              {/*    <>*/}
              {/*      <div key={`${prize?.id}-${index}`}>*/}
              {/*        <SwiperSlide  key={`${prize?.id}-${index}`}>*/}
              {/*          <ChestPrize*/}
              {/*            key={prize?.id}*/}
              {/*            description={prize?.desc}*/}
              {/*            image={prize?.img ?? ''}*/}
              {/*            title={prize?.title}*/}
              {/*            rarity={prize?.rarity}*/}
              {/*          />*/}
              {/*        </SwiperSlide>*/}
              {/*      </div>*/}

              {/*    </>*/}
              {/*  ))}*/}
              {/*</Swiper>*/}
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
      </>
  );
};
