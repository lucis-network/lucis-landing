import s from "./Features.module.sass";
import TitleName from "./Home/TitleSection/TitleName";
import Button3D from "./Button3D";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ItemEcosystem from "./Home/Ecosystem/ItemEcosystem";

type Props = {};
const datas = [
  // {
  //   id: 1,
  //   titleH1: "Social-Fi network platform",
  //   titleP: `
  //       <br/>
  //       <b>Social platform</b> <br/>
  //       <p>A social network specialized for gamers in both NFT & traditional gamers. Highly customizable for every popular games<br/></p>
  //       <br/>
  //       <b>User Ranking system</b><br/>
  //       <p>For team ranking & user ranking help them standing out and get more reputation, benefit from Lucis ecosystems.</p>
  //   `,
  //   titleButton: "More Detail",
  //   href: "/social-fi",
  //   srcImg: "/assets/Feature/social_fi1.png",
  //   statusHref: true,
  // },
  // {
  //   id: 2,
  //   titleH1: "Tournaments",
  //   titleP: `
  //   <p>
  //     <b>A platform</b> for creating, running tournament events.<br/>
  //     <br/>
  //     <b>Team</b> will get more popular and big prizes, big donation amount from Lucis Tournament platform
  //   </p>
  //   `,
  //   titleButton: "More Detail",
  //   href: "/tournaments",
  //   srcImg: "/assets/Feature/tournaments1.png",
  //   statusHref: true,
  // },
  // {
  //   id: 3,
  //   titleH1: "Lucis Insight & Game Ranking system",
  //   titleP: `
  //       <b>Lucis Insight</b> <br/>
  //       <p>Our researcher team will carefully analysis the market, filter out hidden gems<br/></p>
  //       <br/>
  //       <b>Game Ranking System</b><br/>
  //       <p>We auto collect game & market data and provide our users an completed overview and insight about a game with a glance.</p>
  //   `,
  //   titleButton: "More Detail",
  //   href: "/insight",
  //   srcImg: "/assets/Feature/insight1.png",
  //   statusHref: true,
  // },
  // {
  //   id: 4,
  //   titleH1: "Lucis Media",
  //   titleP: `
  //       <b>lucis TV and Lucis blog</b>
  //       <br />
  //       <p>Will provide up to date and valuable info about the market, deeply analysis for game projects, NFT, and the whole markets</p>
  //   `,
  //   titleButton: "More Detail",
  //   href: "/media",
  //   srcImg: "/assets/Feature/media2.png",
  //   statusHref: true,
  // },
  // {
  //   id: 5,
  //   titleH1: "Launchpad & Marketplace",
  //   titleP: `
  //     <p>
  //       <b>Game publisher</b> can host INO to sell NFT mistery boxes to Lucis community or users<br/>
  //       <br />
  //       <b>Sell</b> NFT boxes or NFT collection on Lucis marketplace
  //     </p>
  //   `,
  //   titleButton: "More Detail",
  //   href: "/marketplace",
  //   srcImg: "/assets/Feature/launchpad_marketplace.png",
  //   statusHref: true,
  // },
  // {
  //   id: 6,
  //   titleH1: "Gaming Guild",
  //   titleP: `
  //     <p>We're starting from original Lucis Gaming Guild.</p>
  //     <br>
  //     <b>Gaming Guild tools:</b><br/>
  //     <p>Our Lucis Guild Platform will connect investors to scholars</p>
  //     <br/>
  //     <b>Lucis Academy:</b>
  //     <p>With our knowlegde, we're converting traditional gamers into Play 2 Earn gamers</p>
  //     <p>We provide training and experience in Play 2 Earn field, to ensure our Scholars skill & quality</p>
  //   `,
  //   titleButton: "More Detail",
  //   href: "/lucis-gaming-guild",
  //   srcImg: "/assets/Feature/guild1.png",
  //   statusHref: true,
  // },
  {
    id: 7,
    titleH1: "Lucis Play-to-earn 2.0 (Zone 1)",
    titleP: `
      <p>
        Our unique Play-to-earn 2.0 Platform allows players of all skill levels to participate and reap the benefits 
      </p>
      <br />
      <b>Play-to-earn 2.0</b>
      <p>
        <b>Players</b> can earn Lucis tokens, Lucis points and other valuable rewards simply by playing their favorite traditional games such as CS:GO, League of Legends, Valorant... 
      </p>
    `,
    titleButton: "Coming Soon",
    href: "",
    srcImg: "/assets/Feature/zone1.png",
    statusHref: true,
  },
  {
    id: 8,
    titleH1: "Lucis Tournaments Platform (Zone 2)",
    titleP: `
      <b>
        Competitive play 
      </b>
      <p>
        Pits players against opponents of similar skill levels to create a fair and enjoyable experience for all 
      </p>
      <p>
        Players can create their own teams, clubs, and tournaments
      </p>
      <br />
      <b>
        Two Types of tournaments
      </b>
      <p>
        Free (no entry fee required), Paid by $LUCIS
      </p>
      <br />
      <b>
        Tournament prizes come from
      </b>
      <p>
        Entry fees, Sponsorships, Game Publishers, Gaming guilds, Lucis prize pool
      </p>
    `,
    titleButton: "Coming Soon",
    href: "",
    srcImg: "/assets/Feature/zone2.png",
    statusHref: true,
  },
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
    titleButton: "Coming Soon",
    href: "",
    srcImg: "/assets/Feature/launchpad_marketplace.png",
    statusHref: true,
  },
];

export default function Features(props: Props) {
  const router = useRouter();

  return (
    <section className={`${s.wrapper}`} id="EcoSystem">
      <div className={`lucis-container ${s.container}`}>
        <TitleName titleName="Lucis Ecosystem" />

        <div className={s.BlockContent}>
          <ItemEcosystem dataEcosystems={datas} />
        </div>

        {/* <img src="/assets/Feature/im_diagram.png" alt="" /> */}
      </div>
    </section>
  );
}
