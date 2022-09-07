import React, {useState} from "react";
import s from "./index.module.sass";
import DiamondIcon from "./icon/DiamondIcon";
import ButtonBorder from "../../Button/buttonBorder/ButtonBorder";

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
      <div className={s.wrapperSocialFi}>
        <div className={s.leftContent}>
          <h2 className={s.titleTab}>Social-Fi network platform</h2>
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
          <ButtonBorder>
            <div className={s.btn} onClick={() => window.open(process.env.NEXT_PUBLIC_P2E_URL, '_blank')}>
              MORE DETAIL
            </div>
          </ButtonBorder>
        </div>
        <div className={s.rightContent}>
          <img src="/assets/homepage/destiny/social-fi.png" alt=""/>
        </div>
      </div>
    );
  }

  const Arena = () => {
    return (
      <div className={s.wrapperArena}>
        <div className={s.leftContent}>
          <h2 className={s.titleTab}>Arena</h2>
          <div className={s.descArena}>
            <span className={s.descArenaBold}>A platform</span>
            <span className={s.descArenaNormal}>for creating, running tournament events.</span>
          </div>
          <div className={`${s.descArena} ${s.descArenaB}`}>
            <span className={s.descArenaBold}>Team</span>
            <span className={s.descArenaNormal}>will get more popular and big prizes, big donation amount from Lucis Tournament platform.</span>
          </div>
          <ButtonBorder>
            <div className={s.btn} onClick={() => window.open(process.env.NEXT_PUBLIC_P2E_URL + "/arena", '_blank')}>
              MORE DETAIL
            </div>
          </ButtonBorder>
        </div>
        <div className={s.rightContent}>
          <img src="/assets/homepage/destiny/tournaments.png" alt=""/>
        </div>
      </div>
    );
  }

  const Insight = () => {
    return (
      <div className={s.wrapperInsight}>
        <div className={s.leftContent}>
          <h2 className={s.titleTab}>Lucis Insight & Game Ranking system</h2>
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
          <ButtonBorder>
            <div className={s.btn} onClick={() => window.open("https://insight.lucis.network/", '_blank')}>
              MORE DETAIL
            </div>
          </ButtonBorder>
        </div>
        <div className={s.rightContent}>
          <img src="/assets/homepage/destiny/lucisInsight.png" alt=""/>
        </div>
      </div>
    );
  }

  const Media = () => {
    return (
      <div className={s.wrapperMedia}>
        <div className={s.leftContent}>
          <h2 className={s.titleTab}>Launchpad & Marketplace</h2>
          <div className={s.title}>
            <h3>lucis TV and Lucis blog</h3>
          </div>
          <div className={s.desc}>
            <p>will provide up to date and valuable info about the market, deeply analysis for game projects, NFT, and the whole markets.</p>
          </div>
          <ButtonBorder>
            <div className={s.btn} onClick={() => window.open("https://insight.lucis.network/", '_blank')}>
              MORE DETAIL
            </div>
          </ButtonBorder>
        </div>
        <div className={s.rightContent}>
          <img src="/assets/homepage/destiny/lucisMedia.png" alt=""/>
        </div>
      </div>
    );
  }

  const Launchpad = () => {
    return (
      <div className={s.wrapperLaunchpad}>
        <div className={s.leftContent}>
          <h2 className={s.titleTab}>Lucis Media</h2>
          <div className={s.descLaunchpad}>
            <span><b>Game publisher</b> can host INO to sell NFT mistery boxes to Lucis community or users.</span><br/>
            <span>Sell <b>NFT boxes</b> or <b>NFT</b> collection on Lucis marketplace.</span>
          </div>
          <ButtonBorder>
            <div className={s.btn} onClick={() => window.open("https://insight.lucis.network/", '_blank')}>
              MORE DETAIL
            </div>
          </ButtonBorder>
        </div>
        <div className={s.rightContent}>
          <img src="/assets/homepage/destiny/launchpad.png" alt=""/>
        </div>
      </div>
    );
  }

  const Ranking = () => {
    return (
      <div className={s.wrapperSocialFi}>
        <div className={`${s.leftContent} ${s.leftContentRanking}`}>
          <h2 className={s.titleTab}>Lucis ranking System</h2>
          <div className={s.desc}>
            <p>Create a competitive environment for gamers, game clubs and guild games that lets them to actively engage and enjoy the game.<br/>
              As a result, landing at the top of the leaderboard with monetary or physical prizes.<br/>
              Achieving the top position will result in numerous awards and recognition on the system.</p>
          </div>
          <ButtonBorder>
            <div className={s.btn} onClick={() => window.open(process.env.NEXT_PUBLIC_P2E_URL + "/ranking", '_blank')}>
              MORE DETAIL
            </div>
          </ButtonBorder>
        </div>
        <div className={s.rightContent}>
          <img src="/assets/homepage/destiny/social-fi.png" alt=""/>
        </div>
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
    <div className={s.destiny_wrapper}>
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
                key={navigateItem.key}
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
              renderWithTab(navigateItem.key, navigateIndex)
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Destiny;
