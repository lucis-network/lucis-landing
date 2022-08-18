import React, { useState } from "react";
import s from "./index.module.sass";
const Raffles = () => {
  return (
    <div className={s.raffles_wrapper}>
      <div className={s.header}>
        <div className={s.bigName}>RAFFLES</div>
        <div className={s.subTitle}>
          Free to get big rewards. for hard and skilled gamers Join Lucis
          raffles!
        </div>
      </div>
      <div className={s.body}>
        <div className={s.banner1}>
          <img src="/assets/homepage/raffles/banner1.png" alt="" />
        </div>
        <div className={s.banner2}>
          <img src="/assets/homepage/raffles/banner2.png" alt="" />
        </div>
        <div className={s.banner3}>
          <img src="/assets/homepage/raffles/banner3.png" alt="" />
        </div>
        <div className={s.banner4}>
          <img src="/assets/homepage/raffles/banner4.png" alt="" />
        </div>
        <div className={s.banner5}>
          <img src="/assets/homepage/raffles/banner5.png" alt="" />
        </div>
      </div>
      <div className={s.footer}></div>
    </div>
  );
};

export default Raffles;
