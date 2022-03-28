import { useEffect, useState } from "react";
import type { NextPage } from "next";
import s from "./index.module.sass";
import DocHead from '../../components/DocHead'
import Link from "next/link";
import Marketplace from "components/Home/Marketplace";


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
    <section className="lucis-container">
      <DocHead title="Lucis Launchpad & Marketplace"/>

      <div className={`${s.container}`}>
        <p>
          - Game publisher can host INO to sell NFT mistery boxes to Lucis community or users<br />
          <br />
          - Sell NFT boxes or NFT collection on Lucis marketplace
        </p>
        <Marketplace />
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