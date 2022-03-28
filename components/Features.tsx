import Image from "./Image";
import s from "./Features.module.sass";
import SimpleSlider from "./Home/Slider/SliderFeature/slideFeature";
import Howework from "assets/img/howwework.png";
import AnimWhenVisible from "./Anim";
import Link from "next/link";
import TitleName from "./Home/TitleSection/TitleName";

type Props = {};


export default function Features(props: Props) {
  return (
    <section className="lucis-container" id="EcoSystem">
      <TitleName titleName="Ecosystem" />

      <div className={s.BlockContent}>
        <div className={s.itemEcosystem}>
          <div className={s.heading}>
            <h1>Social-Fi network platform</h1>
            <h2>Social platform and User Ranking system</h2>
            <p>
              <b>Social platform</b> <br/>
              <br/>
              A social network specialized for gamers in both NFT & traditional gamers<br/>
              <br/>
              Highly customizable for every popular games<br/>
              <br />
              <b>User Ranking system</b><br/>
              <br/>
              For team ranking & user ranking help them standing out and get more reputation, benefit from Lucis ecosystems.
            </p>
            <Link href="/social-fi">More detal</Link>
          </div>
          <div className={s.im_Block}>
            <img src="/assets/Feature/social-fi.png" alt="" />
          </div>
        </div>
        <div className={s.itemEcosystem}>
          <div className={s.heading}>
            <h1>Tournaments</h1>
            <h2>Create and run</h2>
            <p>
              <b>A platform</b> for creating, running tournament events.<br/>
              <br/>
              <b>Team</b> will get more popular and big prizes, big donation amount from Lucis Tournament platform
            </p>
            <Link href="/tournaments">More detal</Link>
          </div>
          <div className={s.im_Block}>
            <img src="/assets/Feature/tournaments.png" alt="" />
          </div>
        </div>
        <div className={s.itemEcosystem}>
          <div className={s.heading}>
            <h1>Lucis Insight & Game Ranking system</h1>
            <h2>lucis insight and game ranking system</h2>
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
            <Link href="/ranking">More detal</Link>
          </div>
          <div className={s.im_Block}>
            <img src="/assets/Feature/insight.png" alt="" />
          </div>
        </div>
        <div className={s.itemEcosystem}>
          <div className={s.heading}>
            <h1>Lucis Media</h1>
            <h2>lucis TV and Lucis blog</h2>
            <p>
              <b>• Lucis TV</b><br/>
              <b>• Lucis blog</b><br/>
              <br/>
              <br />
              will provide up to date and valuable info about the market, deeply analysis for game projects, NFT, and the whole markets
            </p>
            <Link href="/media">More detal</Link>
          </div>
          <div className={s.im_Block}>
            <img src="/assets/Feature/media.png" alt="" />
          </div>
        </div>
        <div className={s.itemEcosystem}>
          <div className={s.heading}>
            <h1>Launchpad & Marketplace</h1>
            <h2>can host and sell</h2>
            <p>
            <b>Game publisher</b> can host INO to sell NFT mistery boxes to Lucis community or users<br/>
            <br/>
            <br />
            <b>Sell</b> NFT boxes or NFT collection on Lucis marketplace
            </p>
            <Link href="/launchpad">More detal</Link>
          </div>
          <div className={s.im_Block}>
            <img src="/assets/Feature/launchpad.png" alt="" />
          </div>
        </div>
        <div className={s.itemEcosystem}>
          <div className={s.heading}>
            <h1>Gaming Guild</h1>
            <h2>gaming guild tools and lucis academy</h2>
            <p>
              We're starting from original Lucis Gaming Guild.
              <b>Gaming Guild tools:</b> <br/>
              <br/>
              Our Lucis Guild Platform will connect investors to scholars<br/>
              <br/>
              <b>Lucis Academy:</b><br/>
              <br/>
              With our knowlegde, we're converting traditional gamers into Play 2 Earn gamers<br/>
              <br />
              We provide training and experience in Play 2 Earn field, to ensure our Scholars skill & quality
            </p>
            <Link href="/lucis-gaming-guild">More detal</Link>
          </div>
          <div className={s.im_Block}>
            <img src="/assets/Feature/social-fi.png" alt="" />
          </div>
        </div>
        <div className={s.itemEcosystem}>
          <div className={s.heading}>
            <h1>Automation tool zone</h1>
            <h2>tool</h2>
            <p>
              All the best automation and handy tools for our scholars, gamers, and investors
            </p>
            <Link href="/">More detal</Link>
          </div>
          <div className={s.im_Block}>
            <img src="/assets/Feature/insight.png" alt="" />
          </div>
        </div>
      </div>

      <img src="/assets/Feature/im_diagram.png" alt="" />
     
    </section>
  );
}
