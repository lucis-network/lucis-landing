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
        <p><b>100</b> scholars</p>
        <p><b>$100K</b> Revenue <small>(monthly)</small></p>
        <p><b>Lucis</b> Media</p>
        <p><b>Research</b> Gaming Guild Ecosystem</p>
      </>
    )
  },
  {
    year: "02/2022",
    content: (
      <>
        <p><b>Develop</b> Lucis Scholarship Platform</p>
        <p><b>Lucis</b> Academy</p>
      </>
    )
  },
  {
    year: "03/2022",
    content: (
      <>
        <p><b>Private</b> Scholarships Program for Early Investors</p>
        <p><b>Develop</b> NFT cross-game Marketplace</p>
      </>
    )
  },
  {
    year: "Q2/2022",
    content: (
      <>
        <p><b>Initial</b> Dex Offering</p>
        <p><b>NFT</b> Marketplace Official Launch</p>
        <p><b>Scholarship</b> Platform Official Launch</p>
      </>
    )
  },
  {
    year: "06/2022",
    content: (
      <>
        <p><b>Scholar</b> Tournament Events</p>
        <p><b>DAO</b> Management Model</p>
        <p><b>Market</b> Expansion</p>
      </>
    )
  },
  {
    year: "Q3/2022",
    content: (
      <>
        <p><b>Scholarship</b> Platform Features Enrichment</p>
        <p><b>Develop</b> NFT Wallet</p>
        <p><b>DeFi</b> Services Launch</p>
      </>
    )
  },
  {
    year: "Q4/2022",
    content: (
      <>
        <p><b>NFT</b> Wallet Launch</p>
        <p><b>INO</b> Launchpad</p>
        <p><b>R&D</b> GameFi / NFT Ecosystem</p>
      </>
    )
  },
  {
    year: "2023",
    content: (
      <>
        <p><b>Continue</b> Growing</p>
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
