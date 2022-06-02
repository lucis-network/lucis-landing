import { useEffect, useState } from "react";
import type { NextPage } from "next";
import s from "./index.module.sass";
import DocHead from "../../components/DocHead";
import Link from "next/link";
import ItemEcosystem from "components/Home/Ecosystem/ItemEcosystem";

const datas = [
  {
    id: 11,
    titleH1: "Lucis Raffle (Zone 5)",
    titleP: `
      <b>
        Every week players can use their Lucis Points to enter Raffle for a chance to win random prizes such as:
      </b>
      <br />
      <p>$100 in LUCIS tokens</p>
      <p>
        Physical items like: Razer headphone, Gaming keyboard, Gaming mouse, Gaming chair, Giftcard
      </p>
      <p>NFTs, Token</p>
    `,
    titleButton: "Coming Soon",
    href: "",
    srcImg: "/assets/Feature/tournaments1.png",
    statusHref: true,
  },
];

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
      behavior: "smooth",
    });
  };
  return (
    <section className={`${s.wrapper}`}>
      <div className={`lucis-container ${s.content}`}>
        <DocHead title="Lucis raffle" />

        <div className={`${s.container}`}>
          <ItemEcosystem dataEcosystems={datas} />
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

export default Career;
