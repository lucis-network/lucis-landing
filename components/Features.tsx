import s from "./Features.module.sass";
import TitleName from "./Home/TitleSection/TitleName";
import Button3D from "./Button3D";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ItemEcosystem from "./Home/Ecosystem/ItemEcosystem";

type Props = {};
const datas = [
  {
    id: 1,
    titleH1: "Social-Fi network platform",
    titleP: `
      <p>
        <b>Social platform</b> <br/>
        <br/>
        A social network specialized for gamers in both NFT & traditional gamers. Highly customizable for every popular games<br/>
        <br />
        <b>User Ranking system</b><br/>
        <br/>
        For team ranking & user ranking help them standing out and get more reputation, benefit from Lucis ecosystems.
      </p>
    `,
    titleButton: "More Detail",
    href: "social-fi",
    srcImg: "/assets/Feature/social_fi1.png",
  },
  {
    id: 2,
    titleH1: "Tournaments",
    titleP: `
    <p>
      <b>A platform</b> for creating, running tournament events.<br/>
      <br/>
      <b>Team</b> will get more popular and big prizes, big donation amount from Lucis Tournament platform
    </p>
    `,
    titleButton: "More Detail",
    href: "tournaments",
    srcImg: "/assets/Feature/tournaments1.png",
  },
  {
    id: 3,
    titleH1: "Lucis Insight & Game Ranking system",
    titleP: `
      <p>
        <b>Lucis Insight</b> <br/>
        <br/>
        Our researcher team will carefully analysis the market, filter out hidden gems<br/>
        <br/>
        <br />
        <b>Game Ranking System</b><br/>
        <br/>
        We auto collect game & market data and provide our users an completed overview and insight about a game with a glance.
      </p>
    `,
    titleButton: "More Detail",
    href: "ranking",
    srcImg: "/assets/Feature/insight1.png",
  },
  {
    id: 4,
    titleH1: "Lucis Media",
    titleP: `
      <p>
        <b>lucis TV and Lucis blog</b>
        <br/>
        <br />
        will provide up to date and valuable info about the market, deeply analysis for game projects, NFT, and the whole markets
      </p>
    `,
    titleButton: "More Detail",
    href: "media",
    srcImg: "/assets/Feature/media2.png",
  },
  {
    id: 5,
    titleH1: "Launchpad & Marketplace",
    titleP: `
      <p>
        <b>Game publisher</b> can host INO to sell NFT mistery boxes to Lucis community or users<br/>
        <br/>
        <br />
        <b>Sell</b> NFT boxes or NFT collection on Lucis marketplace
      </p>
    `,
    titleButton: "More Detail",
    href: "launchpad",
    srcImg: "/assets/Feature/launchpad_marketplace.png",
  },
  {
    id: 6,
    titleH1: "Gaming Guild",
    titleP: `
      <p>
        We're starting from original Lucis Gaming Guild.<br/>
        <br/>
        <b>Gaming Guild tools:</b> <br/>
        <br/>
        Our Lucis Guild Platform will connect investors to scholars<br/>
        <br/>
        <br/>
        <b>Lucis Academy:</b><br/>
        <br/>
        With our knowlegde, we're converting traditional gamers into Play 2 Earn gamers<br/>
        <br />
        We provide training and experience in Play 2 Earn field, to ensure our Scholars skill & quality
      </p>
    `,
    titleButton: "More Detail",
    href: "lucis-gaming-guild",
    srcImg: "/assets/Feature/guild1.png",
  },
  {
    id: 7,
    titleH1: "Automation tool zone",
    titleP: `
      <p>
        All the best automation and handy tools for our scholars, gamers, and investors
      </p>
      <h1>Streaming platform</h1>
      <p>
        Is coming soon, and be apart of our SocialFi platform
      </p>
    `,
    titleButton: "Coming Soon",
    href: "",
    srcImg: "/assets/Feature/automation_tool_zone2.png",
  },
];

export default function Features(props: Props) {
  const router = useRouter();

  return (
    <section className="lucis-container" id="EcoSystem">
      <TitleName titleName="Ecosystem" />

      <div className={s.BlockContent}>
        <ItemEcosystem dataEcosystems = {datas} />
      </div>

      <img src="/assets/Feature/im_diagram.png" alt="" />
    </section>
  );
}
