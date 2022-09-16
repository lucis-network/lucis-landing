// @ts-nocheck
import s from "./index.module.sass";
import React, {useEffect} from "react";
import {useGetAllChest} from "hooks/useLuckyChest";
import ChestPrize from "./prize";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper";
import "swiper/css";
import "swiper/css/grid";

export default function LuckyChest() {

  const {getDataAllChest} = useGetAllChest();

  const joinNow = () => {
    window.open(process.env.NEXT_PUBLIC_P2E_URL + "/playcore/lucky-chest", '_blank');
  }

  useEffect(() => {
    let btn = document.querySelector('.btn_hover_luckychest');
    if(btn) {

      btn.addEventListener('mousemove', e => {
        if(e) {
          let rect = e.target.getBoundingClientRect();
          let x = e.clientX - rect.left;
          let y = e.clientY - rect.top;
          const span = btn.querySelector('.btn_glow');
          if(span) {
            span.style.left = x + 'px';
            span.style.top = y + 'px';
          }
        }
      });
    }
  }, [])

  return (
    <>
      <section>

        <div className={s.wrapper}>
          <div className={`lucis-container-2 ${s.container}`}>
            <div className={s.leftContainer}>
              <div className={s.listItems}>
                <Swiper
                  slidesPerView={4}
                  spaceBetween={8}
                  initialSlide={1}
                  //loop={true}
                  grid={{
                    rows: 2,
                  }}
                  pagination={{
                    clickable: true
                  }}
                  modules={[Grid]}
                  breakpoints={{
                    360: {
                      slidesPerView: 4,
                      spaceBetween: 10,
                      //loop: true,
                      grid: {
                        rows: 1,
                      },
                    },
                    575: {
                      slidesPerView: 6,
                      spaceBetween: 8,
                      //loop: true,
                      grid: {
                        rows: 1,
                      },
                    },
                    768: {
                      slidesPerView: 8,
                      spaceBetween: 8,
                      grid: {
                        rows: 1,
                      },
                      //loop: true
                    },
                    992: {
                      slidesPerView: 5,
                      grid: {
                        rows: 2,
                      },
                      spaceBetween: 8,
                      //loop: false
                    },
                    1200: {
                      slidesPerView: 6,
                      grid: {
                        rows: 2,
                      },
                      spaceBetween: 8,
                      //loop: false
                    },
                    1400: {
                      slidesPerView: 8,
                      grid: {
                        rows: 2,
                      },
                      spaceBetween: 8,
                      //loop: false
                    },
                  }}
                >
                  {getDataAllChest?.prizes?.map((prize,index) => (
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
                  ))}
                </Swiper>
              </div>
              <div className={`${s.btn} btn_hover_luckychest`} onClick={joinNow}>
                <div>LUCKY CHEST</div>
                <span className={`${s.btn_hover} btn_glow`}></span>
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
