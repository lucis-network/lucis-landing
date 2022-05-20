import AnimWhenVisible from "components/Anim";
import RoadmapItem from "./CardRoadmap/RoadmapItem";
import s from "./Roadmap.module.sass";
import TitleName from "./TitleSection/TitleName";

type Props = {};

const roadmapData = [
  {
    year: "Q1/2021",
    content: (
      <>
        <p><b>Lucis Gaming Guild official launch</b></p>
      </>
    )
  },
  {
    year: "Q4/2021",
    content: (
      <>
        <p><b>Lucis Media</b></p>
        <p><b>Investigate </b>the Gaming Guild Ecosystem</p>
      </>
    )
  },
  {
    year: "Q1/2022",
    content: (
      <>
        <p><b>Lucis Academy</b></p>
        <p><b>Private</b> Scholarships Program for Early Investors</p>
      </>
    )
  },
  {
    year: "Q2/2022",
    content: (
      <>
        <p><b>Private Round & IDO</b></p>
        <p><b>Donating System</b></p>
        <p><b>Tournaments platform</b></p>
        <p><b>Mainnet</b> Tools Zone 1.0</p>
        <p><b>Mainnet</b> Lucis Ranking System</p>
      </>
    )
  },
  {
    year: "Q3/2022",
    content: (
      <>
        <p><b>Social Features</b></p>
        <p><b>Mainnet</b> Tools Zone 2.0</p>
        <p><b>Scholarship</b> Platform Mainet</p>
        <p><b>Lucis</b> BattlePass System</p>
      </>
    )
  },
  {
    year: "Q4/2022",
    content: (
      <>
        <p><b>Lucis</b> Mystery Box Launchpad</p>
        <p><b>NFT Marketplace</b></p>
        <p><b>Lucis</b> NFT collections</p>
      </>
    )
  },
  {
    year: "Q3/2023",
    content: (
      <>
        <p><b>Live Streaming</b></p>
        <p><b>Mobile</b> App Launch</p>
      </>
    )
  },
  {
    year: "2023",
    content: (
      <>
        <p><b>To be updating</b></p>
      </>
    )
  },
]
export default function Roadmap(props: Props) {
  return (
    <section className="lucis-container">
      <AnimWhenVisible>
        <TitleName titleName="Roadmap" />
      </AnimWhenVisible>
      <div className={`${s.block_roadmap} section-content`}>
        <div className={s.item_roadmap}>
          {
            roadmapData.map((item, index) => {
              return (
                <RoadmapItem titleYear={item.year} titleContent={item.content} key={index}></RoadmapItem>
              )
            })
          }
        </div>
      </div>
    </section>
  );
}
