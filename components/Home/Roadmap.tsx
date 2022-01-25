import AnimWhenVisible from "components/Anim";
import RoadmapItem from "./CardRoadmap/RoadmapItem";
import s from "./Roadmap.module.sass";
import TitleName from "./TitleSection/TitleName";

type Props = {};

const roadmapData = [
  {
    year: "Q4/2021",
    content: (
      <>
        <p>100 scholars</p>
        <p>$100K Revenue</p>
      </>
    )
  },
  {
    year: "Q1/2022",
    content: (
      <>
        <p>Research Gaming Guild Ecosystem</p>
        <p>Develop NFT Marketplace</p>
        <p>Develop Lucis Scholarships Platform</p>
        <p>Private Scholarships Program for Early Investors</p>
      </>
    )
  },
  {
    year: "Q2/2022",
    content: (
      <>
        <p>Initial Dex Offering</p>
        <p>NFT Marketplace Official Launch</p>
        <p>Lucis Scholarships Platform Official Launch</p>
      </>
    )
  },
  {
    year: "Q3/2022",
    content: (
      <>
        <p>DeFi Services Launch</p>
        <p>Develop NFT Wallet</p>
      </>
    )
  },
  {
    year: "Q4/2022",
    content: (
      <>
        <p>NFT Wallet Launch</p>
        <p>R&D GameFi / NFT Ecosystem</p>
      </>
    )
  },
  {
    year: "2023",
    content: (
      <>
        <p>Continue growing</p>
      </>
    )
  },
]
export default function Roadmap(props: Props) {
  return (
    <section className={s.container}>
      <AnimWhenVisible>
        <TitleName titleName="Roadmap" />
      </AnimWhenVisible>
      <div className={s.block_roadmap}>
        <div className={s.item_roadmap}>
          {
            roadmapData.map((item, index) => {
              return (
                <RoadmapItem titleYear={item.year} titleContent={item.content} key={index}></RoadmapItem>
              )
            })
          }
          {/* <RoadmapItem
            titleYear="Q4/2021"
            titleContent="Architecture design UI/Ux prototype Architecture design UI/Ux prototype"
          />
          <RoadmapItem
            titleYear="Q3/2021"
            titleContent="Architecture design UI/Ux prototype Architecture design UI/Ux prototype"
          />
          <RoadmapItem
            titleYear="Q3/2021"
            titleContent="Architecture design UI/Ux prototype Architecture design UI/Ux prototype"
          />
          <RoadmapItem
            titleYear="Q3/2021"
            titleContent="Architecture design UI/Ux prototype Architecture design UI/Ux prototype"
          />
          <RoadmapItem
            titleYear="Q3/2021"
            titleContent="Architecture design UI/Ux prototype Architecture design UI/Ux prototype"
          />
          <RoadmapItem
            titleYear="Q3/2021"
            titleContent="Architecture design UI/Ux prototype Architecture design UI/Ux prototype"
          />
          <RoadmapItem
            titleYear="Q3/2021"
            titleContent="Architecture design UI/Ux prototype Architecture design UI/Ux prototype"
          />
          <RoadmapItem
            titleYear="Q3/2021"
            titleContent="Architecture design UI/Ux prototype Architecture design UI/Ux prototype"
          /> */}
        </div>
      </div>
    </section>
  );
}
