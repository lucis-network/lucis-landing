import React, { useState } from "react";
import s from "./index.module.sass";
import DiamondIcon from "./icon/DiamondIcon";

const Destiny = () => {
  const setDestiny = [
    [
      {
        name: "Social-Fi network platform",
        intro: [
          {
            title: "social platform",
            content:
              "A social network specialized for gamers in both NFT & traditional gamers. Highly customizable for every popular games.",
          },
          {
            title: "User Ranking system",
            content:
              "For team ranking & user ranking help them standing out and get more reputation, benefit from Lucis ecosystems.",
          },
        ],
        img: "/assets/homepage/social-fi.png",
      },
    ],
    [
      {
        name: "Tournaments",
        intro: [
          {
            title: "A platform",
            content: "For creating, running tournament events.",
          },
          {
            title: "Team",
            content:
              "will get more popular and big prizes, big donation amount from Lucis Tournament platform",
          },
        ],
        img: "/assets/homepage/tournaments.png",
      },
    ],
    [
      {
        name: "Lucis Insight & Game Ranking system",
        intro: [
          {
            title: "Lucis Insight",
            content:
              "Our researcher team will carefully analysis the market, filter out hidden gems,",
          },
          {
            title: "Game Ranking System",
            content:
              "We auto collect game & market data and provide our users an completed overview and insight about a game with a glance.",
          },
        ],
        img: "/assets/homepage/lucisInsight.png",
      },
    ],
    [
      {
        name: "Lucis Media",
        intro: [
          {
            title: "lucis TV and Lucis blog",
            content:
              "will provide up to date and valuable info about the market, deeply analysis for game projects, NFT, and the whole markets.",
          },
        ],
        img: "/assets/homepage/lucisMedia.png",
      },
    ],
    [
      {
        name: "Launchpad & Marketplace",
        intro: [
          {
            title: "Game publisher",
            content:
              "Game publisher can host INO to sell NFT mistery boxes to Lucis community or users.",
          },
          {
            title: "Sell NFT boxes or NFT",
            content: "collection on Lucis marketplace.",
          },
        ],
        img: "/assets/homepage/launchpad.png",
      },
    ],
    [
      {
        name: "Gaming Guild",
        intro: [
          {
            title: "Gaming Guild tools:",
            content:
              "Our Lucis Guild Platform will connect investors to scholars",
          },
          {
            title: "Lucis Academy:",
            content:
              "With our knowlegde, we're converting traditional gamers into Play 2 Earn gamers. We provide training and experience in Play 2 Earn field, to ensure our Scholars skill & quality",
          },
        ],
        img: "/assets/homepage/gamingGuild.png",
      },
    ],
    [
      {
        name: "Automation tool zone",
        intro: [
          {
            title: "",
            content: "All the best automation and handy tools for our scholars, gamers, and investors.",
          },
        ],
        img: "/assets/homepage/streamingPlatform.png",
      },
      {
        name: "Streaming platform",
        intro: [
          {
            title: "",
            content: "Is coming soon, and be apart of our SocialFi platform.",
          },
        ],
      },
    ],
  ];

  const [tab, setTab] = useState(0);

  const onchangeTab = (number: number) => {
    setTab(number);
  };

  return (
    <div className={s.destiny_wrapper}>
      <div className={s.container}>
        <div className={s.header}>
          <span>Welcome to our Destiny</span>
        </div>
        <div className={s.navigate}>
          {setDestiny.map((navigateItem, navigateIndex) => {
            return (
              <div
                className={
                  tab === navigateIndex ? s.naviItemActive : s.naviItem
                }
                key={navigateItem[0].name}
                onClick={() => onchangeTab(navigateIndex)}
              >
                <span>{navigateItem[0].name}</span>
              </div>
            );
          })}
        </div>
        <div className={s.line}>
          <div className={s.lineFirst}></div>
          <div className={s.diamond}>
            <DiamondIcon />
          </div>
          <div className={s.lineSecond}></div>
        </div>
        <div className={s.someDestiny}>
          {setDestiny.map((destinyItems, destinyIndex) => {
            return tab == destinyIndex ? (
              <div className={s.body_wrapper} key={destinyItems[0].name}>
                <div className={s.left}>
                  {destinyItems.map((destinyItem) => {
                    return (
                      <>
                        <div className={s.bigName}>{destinyItem.name}</div>
                        {destinyItem.intro.map((introItem) => {
                          return (
                            <div className={s.someIntro} key={introItem.title}>
                              <div className={s.title}>{introItem.title}</div>
                              <div className={s.content}>
                                {introItem.content}
                              </div>
                            </div>
                          );
                        })}
                      </>
                    );
                  })}
                  <div className={s.moreBtn}>
                    more detail
                    <div className={s.border}></div>
                  </div>
                </div>
                <div className={s.right}>
                  <img src={destinyItems[0].img} alt="" />
                </div>
              </div>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};

export default Destiny;
