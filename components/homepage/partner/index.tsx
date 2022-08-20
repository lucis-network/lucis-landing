import s from "./index.module.sass";
import React, {useEffect, useState} from "react";

export default function Partner() {

  return (
    <>
      <div className={s.wrapper}>
        <div className={`${s.container}`}>
          <div className={s.item}>
            <img src="/assets/partner/mo_nes.png" alt="" />
          </div>
          <div className={s.item}>
            <img src="/assets/partner/ai_za.png" alt="" />
          </div>
          <div className={s.item}>
            <img src="/assets/partner/bizverse.png" alt="" />
          </div>
          <div className={s.item}>
            <img src="/assets/partner/animverses.png" alt="" />
          </div>
          <div className={s.item}>
            <img src="/assets/partner/coinbay.png" alt="" />
          </div>
          <div className={s.item}>
            <img src="/assets/partner/galaxySurvey.png" alt="" />
          </div>
          <div className={s.item}>
            <img src="/assets/partner/follow_trend.png" alt="" />
          </div>
          <div className={s.item}>
            <img src="/assets/partner/mifu.png" alt="" />
          </div>
          <div className={s.item}>
            <img src="/assets/partner/meta_work.png" alt="" />
          </div>
          <div className={s.item}>
            <img src="/assets/partner/spac3_ship.png" alt="" />
          </div>
        </div>
      </div>
      </>
  );
};
