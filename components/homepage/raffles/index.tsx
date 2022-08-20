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
        <div className={`${s.banner1} ${s.bannerHover}`}>
          <div className={s.btnHover}>Join raffles</div>
        </div>
        <div className={`${s.banner2} ${s.bannerHover}`}>
          <div className={s.btnHover}>Join raffles</div>
        </div>
        <div className={`${s.banner3} ${s.bannerHover}`}>
          <div className={s.btnHover}>Join raffles</div>
        </div>
        <div className={`${s.banner4} ${s.bannerHover}`}>
          <div className={s.btnHover}>Join raffles</div>
        </div>
        <div className={`${s.banner5} ${s.bannerHover}`}>
          <div className={s.btnHover}>Join raffles</div>
        </div>
      </div>
      <div className={s.footer}></div>
    </div>
  );
};

export default Raffles;
