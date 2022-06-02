import { useEffect, useState } from "react";
import type { NextPage } from "next";
import s from "./index.module.sass";
import DocHead from '../../components/DocHead'
import Link from "next/link";
import ItemEcosystem from "components/Home/Ecosystem/ItemEcosystem";

const datas = [
  {
    id: 7,
    titleH1: "Lucis Play-to-earn 2.0 (Zone 1)",
    titleP: `
      <p>
        Our unique Play-to-earn 2.0 Platform allows players of all skill levels to participate and reap the benefits 
      </p>
      <br />
      <b>Play-to-earn 2.0</b>
      <p>
        <b>Players</b> can earn Lucis tokens, Lucis points and other valuable rewards simply by playing their favorite traditional games such as CS:GO, League of Legends, Valorant... 
      </p>
    `,
    titleButton: "Coming Soon",
    href: "",
    srcImg: "/assets/Feature/zone1.png",
    statusHref: true,
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
        <DocHead title="Lucis play-to-earn 2.0"/>

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