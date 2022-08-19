import s from "./index.module.sass";
import React, {useEffect, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ItemArena from "./item";
import {dataNFT} from "./dataNFT";
import ItemNFT from "./item";

export default function LucisNFT() {
  //const [data, setData] = useState();
  const data = dataNFT

  const onOpenLucisNft = () => {

  }
  return (
    <>
      <section>
        <div className={s.wrapper}>
          <div className={`lucis-container-2 ${s.container}`}>
            <div className={s.title}>
              <h2>LUCIS NFTS</h2>
              <p>Want to earn real money from playing your games?</p>
            </div>
            <div className={s.listItems}>
              <Swiper
                slidesPerView={5}
                spaceBetween={8}
                //centeredSlides={true}
                initialSlide={1}
                //loop={true}
                pagination={{
                  clickable: true
                }}
                breakpoints={{
                  360: {
                    slidesPerView: 3,
                    spaceBetween: 8
                  },
                  575: {
                    slidesPerView: 3,
                    spaceBetween: 8
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 16
                  },
                  1320: {
                    slidesPerView: 5,
                    spaceBetween: 32
                  }
                }}
              >
                {
                  data && data.map((item, index) => {
                    return (
                      <div key={`${index}-${item?.uid}`}>
                        <SwiperSlide key={`${index}-${item?.uid}`}>
                          <ItemNFT item={item}></ItemNFT>
                        </SwiperSlide>
                      </div>
                    )
                  })
                }
              </Swiper>
            </div>

            <div className={`${s.btn} ${s.btnCreate}`} onClick={onOpenLucisNft}>
              <div>Own Lucis NFTs</div>
            </div>
          </div>
        </div>
      </section>
      </>
  );
};
