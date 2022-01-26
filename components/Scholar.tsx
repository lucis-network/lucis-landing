import s from "./Scholar.module.sass";

import PlayerCard from "./Card/PlayerCard";
import Title from "components/Home/TitleSection/TitleName";
import AnimWhenVisible from "./Anim";
type Props = {};
const scholarData = [
  {
    image: "/assets/Scholar/scholar1.png",
    content: "Gain significant incomes with zero investments",
  },
  {
    image: "/assets/Scholar/scholar2.png",
    content: "Play multilple NFT games for free",
  },
  {
    image: "/assets/Scholar/scholar3.png",
    content:
      "Join Lucis Academy to get free courses / tutorials / tips to improve skills",
  },
  {
    image: "/assets/Scholar/scholar4.png",
    content: "Join other Guilds to earn more Guild benefits",
  },
];
export default function scholar(props: Props) {
  return (
    <div
      id="Scholars"
      className={`container text-white mt-140px ${s.container}`}
    >
      <div className="mb-60px">
        <AnimWhenVisible>
          <Title titleName="FOR SCHOLARS"></Title>
        </AnimWhenVisible>
      </div>
      <div className={s.block_item}>
        {scholarData.map((item, index) => (
          <PlayerCard
            statusHeight={true}
            type="scholar"
            image={item.image}
            content={item.content}
            key={index}
          ></PlayerCard>
        ))}
      </div>
    </div>
  );
}
