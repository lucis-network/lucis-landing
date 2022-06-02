import { useEffect, useState } from "react";
import type { NextPage } from "next";
import s from "./index.module.sass";
import DocHead from "../../components/DocHead";
import Link from "next/link";
import ItemEcosystem from "components/Home/Ecosystem/ItemEcosystem";

const datas = [
  {
    id: 12,
    titleH1: "Lucis Scholarship (Zone 6)",
    titleP: `
      <p>
        Zone 6 empowers players to play and managers to coach players while allowing both to earn
      </p>
    `,
    titleButton: "Coming Soon",
    href: "",
    srcImg: "/assets/Feature/zone6.png",
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
      <div className="lucis-container" style={{marginTop: 0 }}>
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
