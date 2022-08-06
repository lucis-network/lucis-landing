import s from "./index.module.sass";
import React, {useEffect, useState} from "react";

export default function Partner() {

  return (
    <>
      <div className={s.wrapper}>
        <div className={`${s.container}`}>
          <div className={s.item}>
            <img src="/assets/partner/mones.png" alt="" />
          </div>
          <div className={s.item}>
            <img src="/assets/partner/aiza.png" alt="" />
          </div>
          <div className={s.item}>
            <img src="/assets/partner/epic_war.png" alt="" />
          </div>
          <div className={s.item}>
            <img src="/assets/partner/animverse.png" alt="" />
          </div>
          <div className={s.item}>
            <img src="/assets/partner/thetan.png" alt="" />
          </div>
          <div className={s.item}>
            <img src="/assets/partner/galaxy_survey.png" alt="" />
          </div>
          <div className={s.item}>
            <img src="/assets/partner/yeah1_digital.png" alt="" />
          </div>
          <div className={s.item}>
            <img src="/assets/partner/metawork.png" alt="" />
          </div>
          <div className={s.item}>
            <img src="/assets/partner/spac3ship.png" alt="" />
          </div>
        </div>
      </div>
      </>
  );
};
