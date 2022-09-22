import React, {useState} from "react";
import s from "./index.module.sass";
import DiamondIcon from "./icon/DiamondIcon";
import ButtonBorder from "../../Button/buttonBorder/ButtonBorder";
import {slugify} from "../../../utils/String";

const Destiny = () => {
  const listTabDestiny = [
    {key: "SocialFi", title: "Social-Fi network platform"},
    {key: "Arena", title: "Arena"},
    {key: "Insight", title: "Lucis Insight & Game Ranking system"},
    {key: "Media", title: "Lucis Media"},
    {key: "Launchpad", title: "Launchpad & Marketplace"},
    {key: "Ranking", title: "Lucis ranking system"}]

  const [tab, setTab] = useState(0);

  const onchangeTab = (number: number, e: any) => {
    setTab(number);
  };

  const SocialFi = () => {
    return (
      <div className={`${s.wrapperC} ${s.wrapperSocialFi}`}>
        <div className={`${s.leftContentC} ${s.leftContent}`}>
          <h2 className={`${s.titleTab} ${s.titleTabHid}`}>Social-Fi network platform</h2>
          <div className={s.title}>
            <h3>Social platform</h3>
          </div>
          <div className={s.desc}>
            <p>A social network specialized for gamers in both NFT & traditional gamers. Highly customizable for every popular games.</p>
          </div>
          <div className={s.title}>
            <h3>Gaming Guild</h3>
          </div>
          <div className={s.desc}>
            <p>Lucis Gaming Guild provides investors a place to recruit scholars (gamers) in order to work together in the gaming field for big prizes.</p>
          </div>
          <div>
            <ButtonBorder disable={true}>
              <div className={s.btn}>
                Coming Soon
              </div>
            </ButtonBorder>
          </div>

        </div>
        <div className={`${s.rightContentC} ${s.rightContent}`}>
          <img src="/assets/homepage/destiny/imgSocial.png" alt=""/>
        </div>
        <h2 className={`${s.titleTab} ${s.titleTabRes}`}>Social-Fi network platform</h2>
      </div>
    );
  }

  const Arena = () => {
    return (
      <div className={`${s.wrapperC} ${s.wrapperArena}`}>
        <div className={`${s.leftContentC} ${s.leftContent}`}>
          <h2 className={`${s.titleTab} ${s.titleTabHid}`}>Arena</h2>
          <div className={s.descArena}>
            <span className={s.descArenaBold}>A platform</span>
            <span className={s.descArenaNormal}>for creating, running tournament events.</span>
          </div>
          <div className={`${s.descArena} ${s.descArenaB}`}>
            <span className={s.descArenaBold}>Team</span>
            <span className={s.descArenaNormal}>will get more popular and big prizes, big donation amount from Lucis Tournament platform.</span>
          </div>
          <a href={process.env.NEXT_PUBLIC_P2E_URL + "/arena"} target="_blank" rel="noopener noreferrer">
            <ButtonBorder>
                <div className={s.btn}>
                  MORE DETAIL
                </div>
            </ButtonBorder>
          </a>
        </div>
        <div className={`${s.rightContentC} ${s.rightContent}`}>
          <img src="/assets/homepage/destiny/tournaments.png" alt=""/>
        </div>
        <h2 className={`${s.titleTab} ${s.titleTabRes}`}>Arena</h2>
      </div>
    );
  }

  const Insight = () => {
    return (
      <div className={`${s.wrapperC} ${s.wrapperInsight}`}>
        <div className={`${s.leftContentC} ${s.leftContent}`}>
          <h2 className={`${s.titleTab} ${s.titleTabHid}`}>Lucis Insight & Game Ranking system</h2>
          <div className={s.title}>
            <h3>Lucis Insight</h3>
          </div>
          <div className={s.desc}>
            <p>Our researcher team will carefully analysis the market, filter out hidden gems.</p>
          </div>
          <div className={s.title}>
            <h3>Game Ranking System</h3>
          </div>
          <div className={s.desc}>
            <p>We auto collect game & market data and provide our users an completed overview and insight about a game with a glance.</p>
          </div>
          <a href="https://insight.lucis.network/" target="_blank" rel="noopener noreferrer">
            <ButtonBorder>
              <div className={s.btn}>
                MORE DETAIL
              </div>
            </ButtonBorder>
          </a>
        </div>
        <div className={`${s.rightContentC} ${s.rightContent}`}>
          <img src="/assets/homepage/destiny/lucisInsight.png" alt=""/>
        </div>
        <h2 className={`${s.titleTab} ${s.titleTabRes}`}>Lucis Insight & Game Ranking system</h2>
      </div>
    );
  }

  const Media = () => {
    return (
      <div className={`${s.wrapperC} ${s.wrapperMedia}`}>
        <div className={`${s.leftContentC} ${s.leftContent}`}>
          <h2 className={`${s.titleTab} ${s.titleTabHid}`}>Lucis Media</h2>
          <div className={s.title}>
            <h3>lucis TV and Lucis blog</h3>
          </div>
          <div className={s.desc}>
            <p>will provide up to date and valuable info about the market, deeply analysis for game projects, NFT, and the whole markets.</p>
          </div>
          <a href="https://www.tiktok.com/@lucistvv" target="_blank" rel="noopener noreferrer">
            <ButtonBorder>
              <div className={s.btn}>
                MORE DETAIL
              </div>
            </ButtonBorder>
          </a>
        </div>
        <div className={`${s.rightContentC} ${s.rightContent}`}>
          <img src="/assets/homepage/destiny/lucisMedia.png" alt=""/>
        </div>
        <h2 className={`${s.titleTab} ${s.titleTabRes}`}>Lucis Media</h2>
      </div>
    );
  }

  const Launchpad = () => {
    return (
      <div className={`${s.wrapperC} ${s.wrapperLaunchpad}`}>
        <div className={`${s.leftContentC} ${s.leftContent}`}>
          <h2 className={`${s.titleTab} ${s.titleTabHid}`}>Launchpad & Marketplace</h2>
          <div className={s.descLaunchpad}>
            <div><b>Game publisher</b> can host INO to sell NFT mistery boxes to Lucis community or users.</div>
            <div>Sell <b>NFT boxes</b> or <b>NFT</b> collection on Lucis marketplace.</div>
          </div>
          <a href="https://launchpad.lucis.network/" target="_blank" rel="noopener noreferrer">
            <ButtonBorder>
              <div className={s.btn}>
                MORE DETAIL
              </div>
            </ButtonBorder>
          </a>
        </div>
        <div className={`${s.rightContentC} ${s.rightContent}`}>
          <img src="/assets/homepage/destiny/launchpad.png" alt=""/>
        </div>
        <h2 className={`${s.titleTab} ${s.titleTabRes}`}>Launchpad & Marketplace</h2>
      </div>
    );
  }

  const Ranking = () => {
    return (
      <div className={`${s.wrapperC} ${s.wrapperSocialFi}`}>
        <div className={`${s.leftContentC} ${s.leftContent} ${s.leftContentRanking}`}>
          <h2 className={`${s.titleTab} ${s.titleTabHid}`}>Lucis ranking System</h2>
          <div className={s.descRanking}>
            <div><p>Create a competitive environment for gamers, game clubs and guild games that lets them to actively engage and enjoy the game.</p></div>
            <div><p>As a result, landing at the top of the leaderboard with monetary or physical prizes.</p></div>
            <div><p>Achieving the top position will result in numerous awards and recognition on the system.</p></div>
          </div>
          <a href={process.env.NEXT_PUBLIC_P2E_URL + "/ranking"} target="_blank" rel="noopener noreferrer">
          <ButtonBorder>
            <div className={s.btn}>
              MORE DETAIL
            </div>
          </ButtonBorder>
          </a>
        </div>
        <div className={`${s.rightContentC} ${s.rightContent} ${s.rightContentRanking}`}>
          <img src="/assets/homepage/destiny/imgRanking.png" alt=""/>
        </div>
        <h2 className={`${s.titleTab} ${s.titleTabRes}`}>Lucis ranking System</h2>
      </div>
    );
  }

  const renderWithTab = (param: string, navigateIndex: number) => {
    if(navigateIndex === tab) {
      switch(param) {
        case 'SocialFi':
          return <SocialFi />;
        case 'Arena':
          return <Arena/>;
        case 'Insight':
          return <Insight/>;
        case 'Media':
          return <Media/>;
        case 'Launchpad':
          return <Launchpad/>;
        case 'Ranking':
          return <Ranking/>;
        default:
          return <></>;
      }
    }
  }

  return (
    <div id="id_destiny" className={`lucis-container-2 ${s.destiny_wrapper}`}>
      <div className={s.container}>
        <div className={s.header}>
          <h1>Welcome to our Destiny</h1>
        </div>
        <div className={s.navigate}>
          {listTabDestiny.map((navigateItem, navigateIndex) => {
            return (
              <div
                className={
                  tab === navigateIndex ? s.naviItemActive : s.naviItem
                }
                key={`${navigateItem.key}-${navigateIndex}`}
                onClick={(e) => onchangeTab(navigateIndex, e)}
              >
                {tab === navigateIndex ? (
                  <div className={s.diamond}>
                    <DiamondIcon/>
                  </div>
                ) : null}
                <span>{navigateItem.title}</span>
              </div>
            );
          })}
        </div>
        <div className={s.line}>
          <div className={s.lineSecond}>
          </div>
        </div>
        <div className={s.someDestiny}>
          {listTabDestiny.map((navigateItem, navigateIndex) =>
            (
              <div key={`${navigateItem.key}-${navigateIndex}`}>
                {renderWithTab(navigateItem.key, navigateIndex)}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Destiny;
