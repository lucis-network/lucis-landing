import { useEffect, useState } from "react";
import type { NextPage } from "next";
import s from "./index.module.sass";
import DocHead from "../../components/DocHead";
import Link from "next/link";
import ItemEcosystem from "components/Home/Ecosystem/ItemEcosystem";

const datas = [
  {
    id: 10,
    titleH1: "Lucis Ranking (Zone 4)",
    titleP: `
      <b>
        Lucis Ranking System
      </b>
      <p>
        Play-to-Earn and traditional Game Market exposure delivered via a single platform
      </p>
    `,
    titleButton: "Coming Soon",
    href: "",
    srcImg: "/assets/Feature/insight1.png",
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
      <div className="lucis-container">
        <DocHead title="Lucis ranking" />

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
