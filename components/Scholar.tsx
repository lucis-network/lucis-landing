import s from "./Scholar.module.sass";

import PlayerCard from "./Card/PlayerCard";
import Title from "components/Home/TitleSection/TitleName";
import AnimWhenVisible from "./Anim";
import Button3D from "./Button3D";
import { AppEmitter } from "services/emitter";

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
      "Join Lucis Academy to get free courses, tutorials, tips to improve skills",
  },
  {
    image: "/assets/Scholar/scholar4.png",
    content: "Join other Guilds to earn more Guild benefits",
  },
];
export default function Scholar(props: Props) {
  const setModalScholar = () => {
    AppEmitter.emit('setModalSubscript', 'Scholar')
  };
  return (
    <div
      id="Scholars"
      className="text-white"
    >
      <AnimWhenVisible>
        <Title titleName="FOR SCHOLAR"></Title>
      </AnimWhenVisible>
      <div className={`${s.block_item} section-content`}>
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

      <div className={s.text}>Join our scholar community to have formal training, funding, playing games, and get profit-sharing ...</div>
      <div onClick={setModalScholar} className={s.item_btn}>
        <Button3D title="Follow our Scholar" />
      </div>
    </div>
  );
}
