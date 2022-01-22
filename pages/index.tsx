import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Empty } from "antd";

// import * as PanelSnapService from 'services/PanelSnap'
// import * as PanelFlexSnapService from 'services/PageFlexSnap'
import * as SectionFlexSnapService from "services/SectionFlexSnap";

import styles from "../styles/Home.module.css";
import Banner from "components/Home/banner";
import Stats from "components/Home/Stats";
import HotGame from "components/Games";
import Community from "components/Community";
import SlideGame from "components/SlideGame";
import HowWeWork from "components/HowWeWork";
import Features from "components/Features";
import Investor from "components/Investor";
import Scholar from "components/Scholar";
import OurEcosystem from "components/Home/OurEcosystem";
import Roadmap from "components/Home/Roadmap";
import Team from "components/Home/Team";
import Advisor from "components/Home/Advisor";
import Backer from "components/Home/Backers";
import TokenAllocation from 'components/TokenAllocation';

const isClient = typeof window !== "undefined";

const Home: NextPage = () => {
  const title = "Xenowars - The battle of lords";
  const desc =
    "Xenowars is a real-time strategy Play-to-earn Video Game, next development vision is becoming Metaverse of lords. Let's start your adventure, get your lands, build your own country and become the KING of Xenowars!";
  const thumb = "/assets/img/logo-547x200.png";

  return (
    <div className={styles.pageContainer}>
      <Head>
        <link rel="icon" href="/favicon.png" />
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
        <meta name="application-name" content="Xenowars" />

        <meta property="og:title" content={title} />
        <meta data-hid="description" name="description" content={desc} />
        <meta property="og:description" content={desc} />

        <meta data-hid="image" itemProp="image" content={thumb} />
        <meta data-hid="og:image" property="og:image" content={thumb} />
        <meta property="og:locale" content="en_US" />
      </Head>
      <Banner />
      <Stats />
      <Community />
      <SlideGame />
      <HotGame />
      <Features />
      <HowWeWork />
      <Investor />
      <Scholar />
      <OurEcosystem />
      <TokenAllocation/>
      <Roadmap />
      <Team />
      <Advisor />
      <Backer />
    </div>
  );
};

export default Home;
