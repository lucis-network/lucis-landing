import { useEffect, useState } from "react";
import type { NextPage } from "next";
import s from "./index.module.sass";
import DocHead from '../../components/DocHead'
import Link from "next/link";
import ItemEcosystem from "components/Home/Ecosystem/ItemEcosystem";

const datas = [
  {
    id: 1,
    titleH1: "Tournaments",
    titleP: `
    <p>
      <b>A platform</b> for creating, running tournament events.<br/>
      <br/>
      <b>Team</b> will get more popular and big prizes, big donation amount from Lucis Tournament platform
    </p>
    `,
    titleButton: "Coming Soon",
    href: "tournaments",
    srcImg: "/assets/Feature/tournaments1.png",
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
    <section className={`${s.wrapper} lucis-container`}>
      <DocHead title="Lucis Tournaments"/>

      <div className={`${s.container}`}>
        <ItemEcosystem dataEcosystems = {datas} />
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