import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";
import Banner from "components/Home/banner";
// import HotGame from "components/Games";
import Community from "components/Community";
import SlideGame from "components/SlideGame";
import Features from "components/Features";
import Roadmap from "components/Home/Roadmap";
import Team from "components/Home/Team";
import Advisor from "components/Home/Advisor";
import TokenAllocation from "components/TokenAllocation";
import AnimWhenVisible from "components/Anim";
import useScroll from "hooks/useScroll";
import PartnersStrategic from "components/Home/Backers";
import IvestorBackers from "components/Home/IvestorBackers";
import MediaPage from "components/media";
import LuckyChest from "../components/homepage/luckychest";
import Arena from "../components/homepage/arena";
import LastNews from "../components/homepage/lastNews";
import NetWork from "../components/homepage/network";

// import NewBanner from "../components/Home/NewBanner";
import Destiny from './../components/homepage/destiny/index';
import Raffles from './../components/homepage/raffles/index';


import FavoriteGames from "../components/homepage/favoriteGames";
import LucisNFTs from "../components/homepage/lucisNFTs";
import NewBanner from "../components/homepage/NewBanner";


const Home: NextPage = () => {
  const title = "Lucis Platform - Gaming SocialFi and Insights";
  const desc =
    "Unite Gamers Across The Globe With The Power of Decentralize Finance. We transform & educate players from traditional games to NFT games";
  const thumb = "https://lucis.network/assets/lucis_preview_169.jpg";
  useScroll();
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
    <div className={styles.pageContainer}>
      <Head>
        <link rel="icon" href="/assets/favicon.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
        />
        <meta charSet="utf-8" />

        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta data-hid="image" itemProp="image" content={thumb} />

        <meta name="apple-mobile-web-app-title" content={title} />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="application-name" content="Lucis Gaming Guild" />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={thumb} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="773" />
        <meta property="og:image:height" content="435" />
        <meta property="og:image:alt" content="Lucis: How we work model" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://lucis.network/" />

        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/*<AnimWhenVisible*/}
      {/*  variants={{*/}
      {/*    visible: { opacity: 1 },*/}
      {/*    hidden: { opacity: 0 },*/}
      {/*  }}*/}
      {/*  transition={{ duration: 0.3 }}*/}
      {/*>*/}
      {/*</AnimWhenVisible>*/}
      {/*<AnimWhenVisible>*/}
      {/*  <Features />*/}
      {/*</AnimWhenVisible>*/}
      {/*<AnimWhenVisible>*/}
      {/*  <TokenAllocation />*/}
      {/*</AnimWhenVisible>*/}
      {/*<Roadmap />*/}
      {/*<AnimWhenVisible>*/}
      {/*  <PartnersStrategic />*/}
      {/*</AnimWhenVisible>*/}
      {/*<AnimWhenVisible>*/}
      {/*  <Advisor />*/}
      {/*</AnimWhenVisible>*/}
      {/*<AnimWhenVisible>*/}
      {/*  <Team />*/}
      {/*</AnimWhenVisible>*/}
      {/*{showButton && (*/}
      {/*  <button onClick={scrollToTop} className="btn-scrollTop">*/}
      {/*    &#8679;*/}
      {/*  </button>*/}
      {/*)}*/}

      {/* <NewBanner /> */}

      <NewBanner></NewBanner>
      {/*<LuckyChest />*/}
      <FavoriteGames />
      {/*<LucisNFT />*/}
      <LucisNFTs />
      <Raffles />
      <LuckyChest />
      <Arena />
      <Destiny />
      <LastNews />
      <NetWork />
    </div>
  );
};

export default Home;
