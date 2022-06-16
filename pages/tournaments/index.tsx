import { useEffect, useState } from "react";
import type { NextPage } from "next";
import s from "./index.module.sass";
import DocHead from '../../components/DocHead'
import Link from "next/link";
import ItemEcosystem from "components/Home/Ecosystem/ItemEcosystem";

const datas = [
  {
    id: 8,
    titleH1: "Lucis Tournaments Platform (Zone 2)",
    titleP: `
      <b>
        Competitive play 
      </b>
      <p>
        Pits players against opponents of similar skill levels to create a fair and enjoyable experience for all 
      </p>
      <p>
        Players can create their own teams, clubs, and tournaments
      </p>
      <br />
      <b>
        Two Types of tournaments
      </b>
      <p>
        Free (no entry fee required), Paid by $LUCIS
      </p>
      <br />
      <b>
        Tournament prizes come from
      </b>
      <p>
        Entry fees, Sponsorships, Game Publishers, Gaming guilds, Lucis prize pool
      </p>
    `,
    titleButton: "Visit Tournament",
    href: "https://tournament.lucis.network",
    srcImg: "/assets/Feature/zone2.png",
    statusHref: true,
  }
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
      <div className={`lucis-container ${s.styleContent}`}>
        <DocHead title="Lucis Tournaments"/>

        <div className={`${s.container}`}>
          <ItemEcosystem dataEcosystems = {datas} properties= {{justifyContent: 'end'}} />
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