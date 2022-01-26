import s from "./investor.module.sass";

import PlayerCard from "./Card/PlayerCard";
import Title from "components/Home/TitleSection/TitleName";
import AnimWhenVisible from "./Anim";

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
    </div>
  );
}
