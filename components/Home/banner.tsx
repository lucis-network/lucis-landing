import Button3D from "components/Button3D";
import PopupJoinUs from "components/PopUp/PopupJoinUs";
import { useCallback, useState } from "react";
import { AppEmitter } from "services/emitter";
import { scrollToSection } from "utils/DOM";
import s from "./banner.module.sass";
import TotalBanner from "./Total/TotalBanner";


type Props = {};

function Banner(props: Props) {
  const HandleScrollToElement = useCallback((selector: string) => {
    scrollToSection(selector ?? '', true, -90)
  }, [])
  const href = '/social-fi'



  return (
    <section className={`${s.container_banner}`}>
      <div className="stars-bg"></div>
      <div className={s.im_banner}>
        <div className={s.heading}>
          <h1>The Ultimate Gaming SocialFi</h1>
          <p>
            Unite Gamers Across The Globe With The Power of Decentralize Finance
          </p>
          <div className={s.groupButton}>
            <a href={href} className={s.item_btn}>
              <Button3D title="Explore" />
            </a>
            <div onClick={() => HandleScrollToElement('#EcoSystem')} className={s.item_btn}>
              <Button3D title="Ecosystem" normal />
            </div>
          </div>
        </div>
        <div className={s.content_glass}>
          <img src="/assets/Banner/vr-glass.png" alt="" />
        </div>
      </div>
      <PopupJoinUs />
      {/* Total */}


      <div className={s.titleTotal}>
        <div className={s.ic_stats}>
          <img src="/assets/Banner/ic_stats.svg" alt="" />
        </div>
        <p>Lucis gaming guild stats</p>
      </div>

      <div className={s.block_total}>
        <TotalBanner title="Total Investors" titleNumber="100+" />
        <TotalBanner title="Total Scholars" titleNumber="1000+" />
        <TotalBanner title="Total Games" titleNumber="18+" />
        <TotalBanner title="Monthly Revenue" titleNumber="$200k+" />
      </div>
    </section>
  );
}

export default Banner;
