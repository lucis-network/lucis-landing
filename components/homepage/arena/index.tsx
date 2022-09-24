// @ts-nocheck
import s from "./index.module.sass";
import React, {useEffect, useState} from "react";
import {useGetDataArena} from "../../../hooks/useArena";
import {TournamentGql} from "../../../src/generated/graphql";
import { slugify } from "utils/String";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ItemArena from "./item";

export default function Arena() {
  const {getDataArena} = useGetDataArena();
  const [data, setData] = useState<TournamentGql[] | undefined>();

  useEffect(() => {
    let k = getDataArena;
    if(getDataArena && getDataArena.length > 10) {
      k = getDataArena.slice(0,10);
    }
    setData(k);
  }, [getDataArena])

  const getDetailArena = (item: TournamentGql) => {
    window.open(process.env.NEXT_PUBLIC_P2E_URL + "/arena" + `/${item.uid}/${slugify(item.name)}`, '_blank');
  }

  useEffect(() => {
    let btn = document.querySelector('.btn_hover');
    // @ts-ignore
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

  useEffect(() => {
    let btn = document.querySelector('.btn_cr_hover');
    // @ts-ignore
    if(btn) {
      btn.addEventListener('mousemove', e => {
        if(e) {
          // @ts-ignore
          let rect = e.target.getBoundingClientRect();
          let x = e.clientX - rect.left;
          let y = e.clientY - rect.top;
          const span = btn.querySelector('.btn_cr_glow');
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
            <div className={s.title}>
              <img srcSet="/assets/homepage/new_arena.png" alt=""/>
            </div>
            <div className={s.listItems}>
              <Swiper
                slidesPerView={2}
                spaceBetween={8}
                initialSlide={1}
                loop={true}
                pagination={{
                  clickable: true
                }}
                breakpoints={{
                  360: {
                    slidesPerView: 2,
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
                  992: {
                    slidesPerView: 4,
                    spaceBetween: 10
                  },
                  1200: {
                    slidesPerView: 4,
                    spaceBetween: 10
                  },
                  1320: {
                    slidesPerView: 4,
                    spaceBetween: 40
                  }
                }}
              >
                {
                  data && data.map((item, index) => {
                    return (
                        <SwiperSlide key={`${item?.team_size}-${item?.uid}-${index}`}>
                          <a href={process.env.NEXT_PUBLIC_P2E_URL + "/arena" + `/${item.uid}/${slugify(item.name)}`} target="_blank" rel="noopener noreferrer">
                          <ItemArena item={item}></ItemArena>
                          </a>
                        </SwiperSlide>
                    )
                  })
                }
              </Swiper>
            </div>

            <div className={s.desc}>
              <p>Let's create your own playing field and show your level to others!</p>
            </div>
            <div className={s.groupBtn}>
              <a href={process.env.NEXT_PUBLIC_P2E_URL + "/arena"} target="_blank" rel="noopener noreferrer">
                <div className={`${s.btn} btn_hover`}>
                  <div>Join Now</div>
                  <span className={`${s.btn_hover} btn_glow`}></span>
                </div>
              </a>
              <a href={process.env.NEXT_PUBLIC_P2E_URL + "/arena/create"} target="_blank" rel="noopener noreferrer">
                <div className={`${s.btn} btn_cr_hover`}>
                  <div>Create Now</div>
                  <span className={`${s.btn_hover} btn_cr_glow`}></span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      </>
  );
};
