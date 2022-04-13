import { useEffect, useState } from "react";
import type { NextPage } from "next";
import s from "./index.module.sass";
import DocHead from '../../components/DocHead'
import Link from "next/link";
import TotalBanner from "components/Home/Total/TotalBanner";
import Investor from "components/Investor";
import Scholar from "components/Scholar";
import PopupJoinUs from "components/PopUp/PopupJoinUs";
import TitleName from "components/Home/TitleSection/TitleName";
import SlideGame from "components/SlideGame";


const Career: NextPage = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <section className={`${s.container_guild}`}>
    <div className="lucis-container" style={{ marginTop: 0 }}>
      <DocHead title="Lucis Launchpad & Marketplace"/>
        <TitleName titleName="Lucis Gaming Guild" />

        <p style={{marginTop: '40px', textTransform: 'inherit'}}>
          We're starting from original Lucis Gaming Guild<br />
          <br />
          <b>Gaming Guild tools:</b><br />
          Our Lucis Guild Platform will connect investors to scholars<br />
          <br />
          <b>Lucis Academy:</b><br />
          With our knowlegde, we're converting traditional gamers into Play 2 Earn gamers<br />
          We provide training and experience in Play 2 Earn field, to ensure our Scholars skill & quality
        </p>

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
        <div className={s.content_guild}>
          <Investor />
        </div>
        <div className={s.content_guild}>
          <Scholar />
        </div>
    </div>

      <PopupJoinUs />
      <div>
        <SlideGame />
      </div>
    </section>
    
  );
};

export default Career