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
            title: (
              <span>
                <span className={s.title_hl}>social platform</span>
              </span>
            ),
            content:
              "A social network specialized for gamers in both NFT & traditional gamers. Highly customizable for every popular games.",
          },
          {
            title: (
              <span>
                <span className={s.title_hl}>User Ranking system</span>
              </span>
            ),
            content:
              "For team ranking & user ranking help them standing out and get more reputation, benefit from Lucis ecosystems.",
          },
        ],
        img: "imgSocial",
      },
    ],
    [
      {
        name: "Tournaments",
        intro: [
          {
            title: (
              <span className={s.inline}>
                <span className={s.title_hl}>A platform</span>
              </span>
            ),
            content: "For creating, running tournament events.",
          },
          {
            title: (
              <span className={s.inline}>
                <span className={s.title_hl}>Team</span>
              </span>
            ),
            content:
              "will get more popular and big prizes, big donation amount from Lucis Tournament platform.",
          },
        ],
        img: "imgTournaments",
      },
    ],
    [
      {
        name: "Lucis Insight & Game Ranking system",
        intro: [
          {
            title: (
              <span>
                <span className={s.title_hl}>Lucis Insight</span>
              </span>
            ),
            content:
              "Our researcher team will carefully analysis the market, filter out hidden gems,",
          },
          {
            title: (
              <span>
                <span className={s.title_hl}>Game Ranking System</span>
              </span>
            ),
            content:
              "We auto collect game & market data and provide our users an completed overview and insight about a game with a glance.",
          },
        ],
        img: "imgInstance",
      },
    ],
    [
      {
        name: "Lucis Media",
        intro: [
          {
            title: (
              <span>
                <span className={s.title_hl}>lucis TV and Lucis blog</span>
              </span>
            ),
            content:
              "will provide up to date and valuable info about the market, deeply analysis for game projects, NFT, and the whole markets.",
          },
        ],
        img: "imgMedia",
      },
    ],
    [
      {
        name: "Launchpad & Marketplace",
        intro: [
          {
            title: (
              <span className={s.inline}>
                <span className={s.title_hl}>Game publisher</span>
              </span>
            ),
            content:
              "can host INO to sell NFT mistery boxes to Lucis community or users.",
          },
          {
            title: (
              <span className={s.inline}>
                Sell{" "}
                <span className={`${s.title_hl} ${s.inline}`}>NFT boxes</span>
                {" "}or{" "}
                <span className={`${s.title_hl} ${s.inline}`}>NFT</span>
              </span>
            ),
            content: "collection on Lucis marketplace.",
          },
        ],
        img: "imgLaunchpad",
      },
    ],
    [
      {
        name: "Gaming Guild",
        intro: [
          {
            title: "",
            content: "We're starting from original Lucis Gaming Guild.",
          },
          {
            title: (
              <span>
                <span className={s.title_hl}>Gaming Guild tools:</span>
              </span>
            ),
            content:
              "Our Lucis Guild Platform will connect investors to scholars",
          },
          {
            title: (
              <span>
                <span className={s.title_hl}>Lucis Academy:</span>
              </span>
            ),
            content: (
              <>
                <span>
                  With our knowlegde, we're converting traditional gamers into
                  Play 2 Earn gamers.
                </span>
                <span>
                  We provide training and experience in Play 2 Earn field, to
                  ensure our Scholars skill {"&"} quality
                </span>
              </>
            ),
          },
        ],
        img: "imgGuild",
      },
    ],
    [
      {
        name: "Automation tool zone",
        intro: [
          {
            title: "",
            content:
              "All the best automation and handy tools for our scholars, gamers, and investors.",
          },
        ],
        img: "imgPlatform",
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
                <div className={s.wrapLR}>
                  <div className={s.left}>
                    <div className={`${s.left_content} ${s.mb32}`}>
                      {destinyItems.map((destinyItem, destinyItemIndex) => {
                        return (
                          <>
                            <div className={s.bigName}>{destinyItem.name}</div>
                            {destinyItem.intro.map(
                              (introItem, introItemIndex) => {
                                return (
                                  <div
                                    className={s.someIntro}
                                    key={introItemIndex}
                                  >
                                    <span className={s.title}>
                                      {" "}
                                      {introItem.title}{" "}
                                    </span>
                                    <span className={`${s.content} ${s.mb36}`}>
                                      {introItem.content}
                                    </span>
                                  </div>
                                );
                              }
                            )}
                          </>
                        );
                      })}
                    </div>
                    <div className={s.moreBtn}>
                      <span>more detail</span>
                      <div className={s.border}></div>
                    </div>
                  </div>
                  <div className={s.right}>
                    <div className={destinyItems[0].img}></div>
                  </div>
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
