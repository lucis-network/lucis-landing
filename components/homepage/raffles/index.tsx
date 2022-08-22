import React, { useState } from "react";
import s from "./index.module.sass";
const Raffles = () => {
  const bannerClasses = [s.banner1, s.banner2, s.banner3, s.banner4, s.banner5]
  const bannerBg = [s.bgBanner1, s.bgBanner2, s.bgBanner3, s.bgBanner4, s.bgBanner5]

  const [stateIndexBanner, setStateIndexBanner] = useState(0)
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
        {
          bannerClasses.map((bannerClass, bannerIndex) => {
            // let index = stateIndexBanner + bannerIndex > 4 ? stateIndexBanner + bannerIndex  - 4 : stateIndexBanner + bannerIndex
            let srcImg = `/assets/homepage/raffles/banner${bannerIndex+1}.png`
            return (
              <div className={`${bannerClasses[bannerIndex]} ${bannerBg[bannerIndex]}`} key={bannerClass} onClick = {() => setStateIndexBanner(bannerIndex)}>
                {/* <div className={s.btnHover}>Join raffles</div> */}
              </div>
            )
          })
        }
      </div>
      <div className={s.footer}></div>
    </div>
  );
};

export default Raffles;
