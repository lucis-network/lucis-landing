import { useEffect, useState } from "react";
import type { NextPage } from "next";
import s from "./index.module.sass";
import DocHead from "../../components/DocHead";
import Link from "next/link";
import ItemEcosystem from "components/Home/Ecosystem/ItemEcosystem";

const datas = [
  {
    id: 9,
    titleH1: "Lucis SocialFi (Zone 3)",
    titleP: `
      <p>
        <b>Players</b> create their own customized SocialFi ID
      </p>
      <p>
      <b>Players</b> will earn badges and achievements as they progress to show off their skills and customize their profile, as well as unique NFT backgrounds, collectibles, and tittles for the community to see
      </p>
      <p>
        <b>Players</b> can also interact with their peers on our social platform to learn, compete, or form an esports team, club, or similar organization
      </p>
    `,
    titleButton: "Coming Soon",
    href: "",
    srcImg: "/assets/Feature/social_fi1.png",
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
        <DocHead title="Lucis Social-Fi" />

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
