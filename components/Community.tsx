import ic_game_community from "../assets/icon/icon_game_community.svg";
import s from "./Community.module.sass";
import Image from "./Image";
import game1 from "../assets/img/game/game1.png";
import game2 from "../assets/img/game/game2.png";
import game3 from "../assets/img/game/game3.png";
import CommunityCard from "./Card/CommunityCard";
import Title from "components/Home/TitleSection/TitleName";
import AnimWhenVisible from "./Anim";

type Props = {};

export default function Community(props: Props) {
  const gameCommunityData = [
    {
      image: game1,
      title: "THETAN ARENA",
      genre: "MOBA E-Sport",
      content:
        "Challenge yourself with a wide variety of game modes:MOBA & Battle Royale, coming with monthly updates and attractive rewards,...",
      src: "https://thetanarena.com",
    },
    {
      image: game2,
      title: "STAR SHARKS",
      genre: "Battle",
      content:
        "StarSharks is a NFT-GameFi ecosystem based on the BSC chain developed by game players,...",
      src: "https://starsharks.com/",
    },
    {
      image: game3,
      title: "AXIE INFINITY",
      genre: "Trading and Battle",
      content:
        "Build up a collection and use them across an ever expanding universe of games! Axie Infinity uses cutting edge technology called Blockchain to reward players,...",
      src: "https://axieinfinity.com/",
    },
  ];

  return (
    <div className="lucis-container">
      <div className="flex justify-between items-center">
        <AnimWhenVisible>
          <Title titleName="Gaming community and partners"></Title>
        </AnimWhenVisible>
      </div>
      <div className="flex items-center  mb-180px md:mb-120px lg:mb-180px">
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
          Hot game
        </h5>
      </div>
      <div className="section-content grid grid-cols-1 lg:grid-cols-3 gap-250px lg:gap-10 font-saira">
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
