import { useEffect, useState } from "react";
import type { NextPage } from "next";
import s from "./index.module.sass";
import DocHead from '../../components/DocHead'
import Link from "next/link";
import ItemEcosystem from "components/Home/Ecosystem/ItemEcosystem";

const datas = [
  {
    id: 1,
    titleH1: "Social-Fi network platform",
    titleP: `
        <br/>
        <b>Social platform</b> <br/>
        <p>A social network specialized for gamers in both NFT & traditional gamers. Highly customizable for every popular games<br/></p>
        <br/>
        <b>User Ranking system</b><br/>
        <p>For team ranking & user ranking help them standing out and get more reputation, benefit from Lucis ecosystems.</p>
    `,
    titleButton: "Coming Soon",
    href: "social-fi",
    srcImg: "/assets/Feature/social_fi1.png",
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
      <DocHead title="Lucis Social-Fi Platform"/>

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