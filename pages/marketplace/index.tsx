import { useEffect, useState } from "react";
import type { NextPage } from "next";
import s from "./index.module.sass";
import DocHead from '../../components/DocHead'
import Link from "next/link";
import ItemEcosystem from "components/Home/Ecosystem/ItemEcosystem";

const datas = [
  {
    id: 13,
    titleH1: "Lucis Marketplace (Zone 7)",
    titleP: `
      <p>
        <b>Zone 7</b> enables game publishers and guilds to launch and sell<b> NFT/Box</b>
      </p>
      <br />
      <p>
        Players can <b>sell/buy</b> their precious NFT directly on our <b>Marketplace</b>.
      </p>
    `,
    titleButton: "Go Launchpad",
    href: "https://launchpad.lucis.network",
    srcImg: "/assets/Feature/launchpad_marketplace.png",
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
        <DocHead title="Lucis marketplace"/>

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