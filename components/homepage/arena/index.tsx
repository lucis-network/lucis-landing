import s from "./index.module.sass";
import React, {useEffect, useState} from "react";
import {useGetDataArena} from "../../../hooks/useArena";
import {TournamentGql} from "../../../src/generated/graphql";
import {LINK_HOME_ARENA} from "../../../utils/Enum";
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

  const joinNow = () => {
    window.open(LINK_HOME_ARENA, '_blank');
  }

  const createNow = () => {
    window.open(LINK_HOME_ARENA + "/create", '_blank');
  }

  const getDetailArena = (item: TournamentGql) => {
    window.open(LINK_HOME_ARENA + `/${item.uid}/${slugify(item.name)}`, '_blank');
  }

  return (
    <>
      <section>
        <div className={s.wrapper}>
          <div className={`lucis-container-2 ${s.container}`}>
            <div className={s.title}>
              <img src="/assets/homepage/arena.png" alt=""/>
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
                    spaceBetween: 7.5
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
                    slidesPerView: 4,
                    spaceBetween: 32
                  }
                }}
              >
                {
                  data && data.map((item, index) => {
                    return (
                      <div key={`${item?.team_size}-${item?.uid}`}>
                        <SwiperSlide onClick={() => getDetailArena(item)} key={`${item?.team_size}-${item?.uid}`}>
                          <ItemArena item={item}></ItemArena>
                        </SwiperSlide>
                      </div>
                    )
                  })
                }
              </Swiper>
            </div>

            <div className={s.desc}>
              <p>Let's create your own playing field and show your level to others!</p>
            </div>
            <div className={s.groupBtn}>
              <div className={`${s.btn} ${s.btnJoin}`} onClick={joinNow}>
                <div>Join Now</div>
              </div>
              <div className={`${s.btn} ${s.btnCreate}`} onClick={createNow}>
                <div>Create Now</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
  );
};
