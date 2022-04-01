import TitleName from "components/Home/TitleSection/TitleName";
import { useWindowSize } from "hooks/useWindowSize";
import React from "react";
import Marquee from "react-fast-marquee";

const img_game_green_beli = "/assets/slide_marquee/card1.png";
const img_game_crypto_cars = "/assets/slide_marquee/card2.png";
const img_game_howl_city = "/assets/slide_marquee/card3.png";
const img_game_axie = "/assets/slide_marquee/card4.png";
const img_game_theta_arena = "/assets/slide_marquee/card5.png";
const img_game_kawaii_islands =
  "/assets/slide_marquee/card6.png";
const img_game_space = "/assets/slide_marquee/card7.png";
const img_game_aspo = "/assets/slide_marquee/card8.png";
const img_game_summoners_arena =
  "/assets/slide_marquee/card9.png";

const img_game_itam = "/assets/slide_marquee/card10.png";
const img_game_warena = "/assets/slide_marquee/card11.png";
const img_game_animverse = "/assets/slide_marquee/card12.png";
const img_game_pegaxy = "/assets/slide_marquee/card13.png";
const img_game_bomb_crypto = "/assets/slide_marquee/card14.png";
const img_game_elemon = "/assets/slide_marquee/card15.png";
const img_game_heroestd = "/assets/slide_marquee/card16.png";
const img_game_star_sharks = "/assets/slide_marquee/card17.png";
const img_game_death_road = "/assets/slide_marquee/card18.png";

interface SlideItemProps {
  src: string;
  addressGame: string;
  width: number | string;
  height: number | string;
}
function SlideItem(props: SlideItemProps) {
  return (
    <a href={props.addressGame}  target='_blank' rel="noopener noreferrer">
      <img
        src={props.src}
        alt=""
        width={props.width}
        height={props.height}
        style={{ marginRight: "14px" }}
      />
    </a>
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
            addressGame='https://greenbeli.io/'
            src={img_game_green_beli}
            width={widthImg}
            height={heightImg}
          />
          <SlideItem
            addressGame='https://cryptocars.me'
            src={img_game_crypto_cars}
            width={widthImg}
            height={heightImg}
          />
          <SlideItem
            addressGame='https://www.howlcity.io/'
            src={img_game_howl_city}
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
            addressGame='https://kawaii.global/'
            src={img_game_kawaii_islands}
            width={widthImg}
            height={heightImg}
          />
          <SlideItem
            addressGame='https://sip.space/' 
            src={img_game_space} 
            width={widthImg} 
            height={heightImg} />
          <SlideItem
            addressGame='https://aspo.world/' 
            src={img_game_aspo} 
            width={widthImg} 
            height={heightImg} />
          <SlideItem
            addressGame='https://summonersarena.io/'
            src={img_game_summoners_arena}
            width={widthImg}
            height={heightImg}
          />
        </Marquee>
      </div>
      <div style={{ width: "100%", marginTop: "27px" }}>
        <Marquee speed={50} gradient={false} direction="right">
          <SlideItem
            addressGame='https://itam.network/' 
            src={img_game_itam} 
            width={widthImg} 
            height={heightImg} />
          <SlideItem
            addressGame='https://www.warena.io/'
            src={img_game_warena}
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
            addressGame='https://pegaxy.io/'
            src={img_game_pegaxy}
            width={widthImg}
            height={heightImg}
          />
          <SlideItem
            addressGame='https://bombcrypto.io/'
            src={img_game_bomb_crypto}
            width={widthImg}
            height={heightImg}
          />
          <SlideItem
            addressGame='https://elemon.io/'
            src={img_game_elemon}
            width={widthImg}
            height={heightImg}
          />
          <SlideItem
            addressGame='https://dapp.heroestd.io'
            src={img_game_heroestd}
            width={widthImg}
            height={heightImg}
          />
          <SlideItem
            addressGame='https://starsharks.com'
            src={img_game_star_sharks}
            width={widthImg}
            height={heightImg}
          />
          <SlideItem
            addressGame='https://app.deathroad.io/'
            src={img_game_death_road}
            width={widthImg}
            height={heightImg}
          />
        </Marquee>
      </div>
    </div>
  );
}
