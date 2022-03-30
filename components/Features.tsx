import Image from "./Image";
import s from "./Features.module.sass";
import SimpleSlider from "./Home/Slider/SliderFeature/slideFeature";
import Howework from "assets/img/howwework.png";
import AnimWhenVisible from "./Anim";
import Link from "next/link";
import TitleName from "./Home/TitleSection/TitleName";
import Button3D from "./Button3D";
import { useRouter } from "next/router";

type Props = {};


export default function Features(props: Props) {
  const router = useRouter()
  return (
    <section className="lucis-container" id="EcoSystem">
      <TitleName titleName="Ecosystem" />

      <div className={s.BlockContent}>
        <div className={s.itemEcosystem}>
          <div className={s.heading}>
            <h1>Social-Fi network platform</h1>
            <p>
              <b>Social platform</b> <br/>
              <br/>
              A social network specialized for gamers in both NFT & traditional gamers. Highly customizable for every popular games<br/>
              <br />
              <b>User Ranking system</b><br/>
              <br/>
              For team ranking & user ranking help them standing out and get more reputation, benefit from Lucis ecosystems.
            </p>
              <div>
                <Button3D 
                title="More Detail" 
                normal 
                onClick={() => {
                  router.push('/social-fi')
                }} 
              />
              </div>
          </div>
          <div className={s.im_Block}>
            <img src="/assets/Feature/social_fi1.png" alt="" />
          </div>
        </div>
        <div className={s.itemEcosystem}>
          <div className={s.heading}>
            <h1>Tournaments</h1>
            <p>
              <b>A platform</b> for creating, running tournament events.<br/>
              <br/>
              <b>Team</b> will get more popular and big prizes, big donation amount from Lucis Tournament platform
            </p>
            <div>
              <Button3D 
                title="More Detail" 
                normal 
                onClick={() => {
                  router.push('/tournaments')
                }} 
              />
            </div>
          </div>
          <div className={s.im_Block}>
            <img src="/assets/Feature/tournaments1.png" alt="" />
          </div>
        </div>
        <div className={s.itemEcosystem}>
          <div className={s.heading}>
            <h1>Lucis Insight & Game Ranking system</h1>
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
            <div>
              <Button3D 
                title="More Detail" 
                normal 
                onClick={() => {
                  router.push('/ranking')
                }} 
              />
            </div>
          </div>
          <div className={s.im_Block}>
            <img src="/assets/Feature/insight1.png" alt="" />
          </div>
        </div>
        <div className={s.itemEcosystem}>
          <div className={s.heading}>
            <h1>Lucis Media</h1>
            <p>
              <b>lucis TV and Lucis blog</b>
              <br/>
              <br />
              will provide up to date and valuable info about the market, deeply analysis for game projects, NFT, and the whole markets
            </p>
            <div>
              <Button3D 
                title="More Detail" 
                normal 
                onClick={() => {
                  router.push('/media')
                }} 
              />
            </div>
          </div>
          <div className={s.im_Block}>
            <img src="/assets/Feature/media1.png" alt="" />
          </div>
        </div>
        <div className={s.itemEcosystem}>
          <div className={s.heading}>
            <h1>Launchpad & Marketplace</h1>
            <p>
            <b>Game publisher</b> can host INO to sell NFT mistery boxes to Lucis community or users<br/>
            <br/>
            <br />
            <b>Sell</b> NFT boxes or NFT collection on Lucis marketplace
            </p>
            <div>
              <Button3D 
                title="More Detail" 
                normal 
                onClick={() => {
                  router.push('/launchpad')
                }} 
              />
            </div>
          </div>
          <div className={s.im_Block}>
            <img src="/assets/Feature/launchpad_marketplace.png" alt="" />
          </div>
        </div>
        <div className={s.itemEcosystem}>
          <div className={s.heading}>
            <h1>Gaming Guild</h1>
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
            <div>
              <Button3D 
                title="More Detail" 
                normal 
                onClick={() => {
                  router.push('/lucis-gaming-guild')
                }} 
              />
            </div>
          </div>
          <div className={s.im_Block}>
            <img src="/assets/Feature/guild1.png" alt="" />
          </div>
        </div>
        <div className={s.itemEcosystem}>
          <div className={s.heading}>
            <div className={s.item}>
              <h1>Automation tool zone</h1>
              <p>
                All the best automation and handy tools for our scholars, gamers, and investors
              </p>
            </div>
            <div className={s.item}>
              <h1>Streaming platform</h1>
              <p>
                Is coming soon, and be apart of our SocialFi platform
              </p>
              <div>
                <Button3D 
                  title="Coming Soon" 
                  normal 
                  onClick={() => {
                    router.push('/')
                  }} 
                />
              </div>
            </div>
          </div>
          <div className={s.im_Block}>
            <img src="/assets/Feature/automation_tool_zone2.png" alt="" />
          </div>
        </div>
      </div>

      <img src="/assets/Feature/im_diagram.png" alt="" />
     
    </section>
  );
}
