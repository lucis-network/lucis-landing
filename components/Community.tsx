import ic_game_community from "../assets/icon/icon_game_community.svg";
import s from "./Community.module.sass";
import Image from "./Image";
import game1 from "../assets/img/game/game1.png";
import game2 from "../assets/img/game/game2.png";
import game3 from "../assets/img/game/game3.png";
import CommunityCard from "./Card/CommunityCard";
import Title from "components/Home/TitleSection/TitleName";
import AnimWhenVisible from "./Anim";
import { spawn } from "child_process";

type Props = {};

export default function Community(props: Props) {
  const gameCommunityData = [
    {
      image: game3,
      title: "AXIE INFINITY",
      genre: "Trading and Battle",
      content:
        "Build up a collection and use them across an ever expanding universe of games! Axie Infinity uses cutting edge technology called Blockchain to reward players",
      src: "https://axieinfinity.com/",
    },
    {
      image: game1,
      title: "THETAN ARENA",
      genre: "MOBA E-Sport",
      content:
        "Challenge yourself with a wide variety of game modes: MOBA & Battle Royale, coming with monthly updates and attractive rewards",
      src: "https://thetanarena.com",
    },
    {
      image: game2,
      title: "STAR SHARKS",
      genre: "Battle",
      content:
        "StarSharks is a NFT-GameFi ecosystem based on the BSC chain developed by game players",
      src: "https://starsharks.com/",
    },
  ];

  return (
    <div className="lucis-container community-container">
      <div className="flex justify-between items-center mb-40px lg:mb-60px">
        {/* <AnimWhenVisible>
          <Title titleName={<span>Gaming community <br/>and partners</span>}/>
        </AnimWhenVisible> */}
      </div>
      <div className="flex items-center">
        <div className="w-16px md:w-32px mr-4">
          <Image
            src={ic_game_community}
            width={32}
            height={38}
            alt=""
            layout="responsive"
          ></Image>
        </div>
        <h5 className="text-emerald lg:text-32px md:text-28px text-24px leading-37px">
          HOT GAME
        </h5>
      </div>
      <div className="xl:mt-300px lg:mt-200px md:mt-180px mt-180px grid grid-cols-1 md:grid-cols-3 gap-250px md:gap-4 lg:gap-10 font-saira">
        {gameCommunityData.map((item, index) => (
          <CommunityCard
            image={item.image}
            title={item.title}
            genre={item.genre}
            content={item.content}
            srcReadMore={item.src}
            key={index}
          ></CommunityCard>
        ))}
      </div>
    </div>
  );
}
