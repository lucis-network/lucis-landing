import s from "./index.module.sass";
import React from "react";

export default function LastNews() {

  return (
    <>
      <div className={s.wrapper}>
        <div className={`lucis-container-2 ${s.container}`}>
          <div className={s.title}>
            <h2>LATEST NEWS</h2>
          </div>
          <div className={s.listNews}>
            <div className={s.leftListNews}>
              <div className={s.itemHotRaffles}>
                <div className={s.tagNameRaffles}>
                  Hot Raffles
                </div>
                <div className={s.imgRaffles}>
                  <img src="/assets/homepage/hot_raffles.jpg" alt=""/>
                </div>
                <div className={s.descHotRaffles}>
                  <p>Raffles: Hot raffles will be availabled in next August. Let’s get it!</p>
                </div>
              </div>
            </div>
            <div className={s.rightListNews}>
              <div className={s.itemHotNews}>
                <div className={`${s.tagNameRaffles} ${s.tagNameNews}`}>
                  Hot news
                </div>
                <img src="/assets/homepage/hot_news.png" alt=""/>
                <div className={`${s.descHotRaffles} ${s.descHotNews}`}>
                  <p>League of legend: Lucis priavte 2nd beta test.</p>
                </div>
              </div>
              <div className={`${s.itemHotNews}`}>
                <div className={`${s.tagNameRaffles} ${s.tagNameNews}`}>
                  Lucis Review
                </div>
                <img src="/assets/homepage/lucis_review.png" alt=""/>
                <div className={`${s.descHotRaffles} ${s.descHotNews}`}>
                  <p>Luicis review Current game market assessment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  );
};
