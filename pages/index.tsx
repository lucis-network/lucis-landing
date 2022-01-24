import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";
import Banner from "components/Home/banner";
import Stats from "components/Home/Stats";
import HotGame from "components/Games";
import Community from "components/Community";
import SlideGame from "components/SlideGame";
import Features from "components/Features";
import Investor from "components/Investor";
import Scholar from "components/Scholar";
import OurEcosystem from "components/Home/OurEcosystem";
import Roadmap from "components/Home/Roadmap";
import Team from "components/Home/Team";
import Advisor from "components/Home/Advisor";
import Backer from "components/Home/Backers";
import TokenAllocation from "components/TokenAllocation";
import AnimWhenVisible from "components/Anim";
import Marketplace from "components/Home/Marketplace";
import useScroll from 'hooks/useScroll';

const Home: NextPage = () => {
  const title = "Lucis Gaming Guild - Redefine Play to Earn ecosystem";
  const desc = "One of the most effective investment platforms for investors. We create a hybrid platform to connect investors and skilled scholars in the world of \"Play to Earn\" gaming and metaverse.";
  const thumb = "/assets/img/howwework.png";
  useScroll()
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
    <div className={styles.pageContainer}>
      <Head>
        <link rel="icon" href="/assets/favicon.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta charSet="utf-8" />

        <title>{title}</title>
        <meta name="description" content={desc} />

        <meta data-hid="og:title" name="og:title" content={title} />
        <meta data-hid="og:description" name="og:description" content={desc} />
        <meta data-hid="og:type" property="og:type" content="website" />

        <meta name="apple-mobile-web-app-title" content={title} />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="application-name" content="Lucis Gaming Guild" />

        <meta property="og:title" content={title} />
        <meta data-hid="description" name="description" content={desc} />
        <meta property="og:description" content={desc} />

        <meta data-hid="image" itemProp="image" content={thumb} />
        <meta data-hid="og:image" property="og:image" content={thumb} />
        <meta property="og:locale" content="en_US" />
      </Head>

      <AnimWhenVisible
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
      >
        <Banner />
      </AnimWhenVisible>
      <Community />
      <AnimWhenVisible>
        <SlideGame />
      </AnimWhenVisible>
      <HotGame />
      <Features />
      <Investor />
      <Scholar />
      <Marketplace />
      <AnimWhenVisible>
        <OurEcosystem />
      </AnimWhenVisible>
      <AnimWhenVisible>
        <TokenAllocation />
      </AnimWhenVisible>
      <Roadmap />
      <Team />
      <Advisor />
      <AnimWhenVisible>
        <Backer />
      </AnimWhenVisible>
      {showButton && (
        <button onClick={scrollToTop} className="btn-scrollTop">
          &#8679;
        </button>
      )}
    </div>
  );
};

export default Home;
