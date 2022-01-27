import s from "./investor.module.sass";

import PlayerCard from "./Card/PlayerCard";
import Title from "components/Home/TitleSection/TitleName";
import AnimWhenVisible from "./Anim";
import Button3D from "./Button3D";
import { AppEmitter } from "services/emitter";


type Props = {};
const investorData = [
  {
    image: "/assets/investor/investor1.png",
    content: "Lend or Swap NFTs easily to maximize ROI",
  },
  {
    image: "/assets/investor/investor2.png",
    content: "Early access to many games' INO to buy NFT Boxes",
  },
  {
    image: "/assets/investor/investor3.png",
    content: "Access to Lucis's Private Investment Packages",
  },
  {
    image: "/assets/investor/investor4.png",
    content:
      "Access to many Tools to automate, manage their assets, investments",
  },
];
export default function Investor(props: Props) {
  const setIsModalInvestor = () => {
    AppEmitter.emit('setModalSubscript', false)
  };

  return (
    <div
      id="Investors"
      className={`container text-white mt-140px ${s.container}`}
    >
      <div className="mb-60px">
        <AnimWhenVisible>
          <Title titleName="FOR INVESTOR"></Title>
        </AnimWhenVisible>
      </div>
      <div className={s.block_item}>
        {investorData.map((item, index) => (
          <PlayerCard
            statusHeight={false}
            type="investor"
            image={item.image}
            content={item.content}
            key={index}
          ></PlayerCard>
        ))}
      </div>

      <div className={s.text}>If you have any unused NFT game items or want to make a smart investment into our well-trained scholars</div>
      <div onClick={setIsModalInvestor} className={s.item_btn}>
        <Button3D title="Become our Investor" />
      </div>
    </div>

  );
}
