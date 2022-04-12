import TitleName from "components/Home/TitleSection/TitleName";
import { useWindowSize } from "hooks/useWindowSize";
import React from "react";
import Marquee from "react-fast-marquee";

const img_game_aurory = "/assets/slide_marquee/im_aurory.png";
const img_game_big_time = "/assets/slide_marquee/im_big_time.png";
const im_cyball = "/assets/slide_marquee/im_cyball.png";
const im_illuvium = "/assets/slide_marquee/im_illuvium.png";
const img_game_theta_arena = "/assets/slide_marquee/card1.png";
const img_game_axie = "/assets/slide_marquee/card3.png";
const im_delys = "/assets/slide_marquee/im_delys.png";


const of_kingdoms_arena = "/assets/slide_marquee/im_league of_kingdoms_arena.png";
const im_meta_grear = "/assets/slide_marquee/im_meta_grear.png";
const im_sandbox = "/assets/slide_marquee/im_sandbox.png";
const im_sipher = "/assets/slide_marquee/im_sipher.png";
const im_Star_Atlas = "/assets/slide_marquee/im_Star_Atlas.png";
const im_step_n = "/assets/slide_marquee/im_step_n.png";
const im_voxies = "/assets/slide_marquee/im_voxies.png";
const img_game_animverse = "/assets/slide_marquee/card11.png";
const img_game_star_sharks = "/assets/slide_marquee/card15.png";


interface SlideItemProps {
  src: string;
  addressGame: string;
  width: number | string;
  height: number | string;
}
function SlideItem(props: SlideItemProps) {
  return (
    <div>
      <a href={props.addressGame}  target='_blank' rel="noopener noreferrer">
      <img
        src={props.src}
        alt=""
        width={props.width}
        height={props.height}
        style={{ marginRight: "14px" }}
      />
    </a>
    </div>
  );
}

export default function SlideGame() {
  const size = useWindowSize();
  const widthImg = Math.min(Math.max(0.2 * size[0], 160), 303);
  const heightImg = widthImg * 0.67;

  return (
    <div className="w-full mt-60px md:mt-97px">
      <div className="lucis-container">
        <TitleName titleName="Game Partners" />
      </div>
      <div style={{ width: "100%" }} className="section-content">
        <Marquee speed={90} gradient={false}>
          <SlideItem
            addressGame='https://aurory.io/'
            src={img_game_aurory}
            width={widthImg}
            height={heightImg}
          />
          <SlideItem
            addressGame='https://bigtime.gg/'
            src={img_game_big_time}
            width={widthImg}
            height={heightImg}
          />
          <SlideItem
            addressGame='https://cyball.com/'
            src={im_cyball}
            width={widthImg}
            height={heightImg}
          />
          <SlideItem
            addressGame='https://axieinfinity.com/' 
            src={img_game_axie} 
            width={widthImg} 
            height={heightImg} />
          <SlideItem
            addressGame='https://thetanarena.com'
            src={img_game_theta_arena}
            width={widthImg}
            height={heightImg}
          />
          <SlideItem
            addressGame='https://play.illuivuim.io/'
            src={im_illuvium}
            width={widthImg}
            height={heightImg}
          />
          <SlideItem
            addressGame='https://www.delysium.com/' 
            src={im_delys} 
            width={widthImg} 
            height={heightImg} />
          <SlideItem
            addressGame='https://www.leagueofkingdoms.com/' 
            src={of_kingdoms_arena} 
            width={widthImg} 
            height={heightImg} />
        </Marquee>
      </div>
      <div style={{ width: "100%", marginTop: "27px" }}>
        <Marquee speed={50} gradient={false} direction="right">
          <SlideItem
            addressGame='https://metagear.game/'
            src={im_meta_grear}
            width={widthImg}
            height={heightImg}
          />
          <SlideItem
            addressGame='https://www.sandbox.game/en/' 
            src={im_sandbox} 
            width={widthImg} 
            height={heightImg} />
          <SlideItem
            addressGame='https://sipher.xyz/'
            src={im_sipher}
            width={widthImg}
            height={heightImg}
          />
          <SlideItem
            addressGame='https://animverse.com/'
            src={img_game_animverse}
            width={widthImg}
            height={heightImg}
          />
          <SlideItem
            addressGame='https://wizardia.io/'
            src={im_Star_Atlas}
            width={widthImg}
            height={heightImg}
          />
          <SlideItem
            addressGame='https://stepn.com/'
            src={im_step_n}
            width={widthImg}
            height={heightImg}
          />
          <SlideItem
            addressGame='https://www.voxies.io/'
            src={im_voxies}
            width={widthImg}
            height={heightImg}
          />
          <SlideItem
            addressGame='https://starsharks.com'
            src={img_game_star_sharks}
            width={widthImg}
            height={heightImg}
          />
        </Marquee>
      </div>
    </div>
  );
}
