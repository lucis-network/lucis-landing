import { useEffect, useState } from "react";
import type { NextPage } from "next";
import s from "./index.module.sass";
import DocHead from '../../components/DocHead'
import Link from "next/link";
import ItemEcosystem from "components/Home/Ecosystem/ItemEcosystem";

const datas = [
  {
    id: 3,
    titleH1: "Lucis Insight & Game Ranking system",
    titleP: `
        <b>Lucis Insight</b> <br/>
        <p>Our researcher team will carefully analysis the market, filter out hidden gems<br/></p>
        <br/>
        <b>Game Ranking System</b><br/>
        <p>We auto collect game & market data and provide our users an completed overview and insight about a game with a glance.</p>
    `,
    titleButton: "Coming Soon",
    href: "ranking",
    srcImg: "/assets/Feature/insight1.png",
  },
]

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
    <section className={`${s.wrapper}`}>
      <div className='lucis-container'>
        <DocHead title="Lucis Insight"/>

        <div className={`${s.container} section-content`}>
        <ItemEcosystem dataEcosystems = {datas} />
        </div>  
      </div>
      {showButton && (
        <button onClick={scrollToTop} className="btn-scrollTop">
          &#8679;
        </button>
      )}
    </section>
  );
};

export default Career