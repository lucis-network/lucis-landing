import RoadmapItem from './CardRoadmap/RoadmapItem'
import s from './Roadmap.module.sass'
import TitleName from './TitleSection/TitleName'

type Props = {}

export default function Roadmap(props: Props) {
  return(
    <section className={s.container}>
      <TitleName titleName='Roadmap' />
      <div className={s.block_roadmap}>
        <div className={s.item_roadmap}>
          <RoadmapItem titleYear='Q3/2021' titleContent='Architecture design UI/Ux prototype Architecture design UI/Ux prototype' />
          <RoadmapItem titleYear='Q3/2021' titleContent='Architecture design UI/Ux prototype Architecture design UI/Ux prototype' />
          <RoadmapItem titleYear='Q3/2021' titleContent='Architecture design UI/Ux prototype Architecture design UI/Ux prototype' />
          <RoadmapItem titleYear='Q3/2021' titleContent='Architecture design UI/Ux prototype Architecture design UI/Ux prototype' />
        </div>
        <div className={s.item_roadmap}>
          <RoadmapItem titleYear='Q3/2021' titleContent='Architecture design UI/Ux prototype Architecture design UI/Ux prototype' />
          <RoadmapItem titleYear='Q3/2021' titleContent='Architecture design UI/Ux prototype Architecture design UI/Ux prototype' />
          <RoadmapItem titleYear='Q3/2021' titleContent='Architecture design UI/Ux prototype Architecture design UI/Ux prototype' />
          <RoadmapItem titleYear='Q3/2021' titleContent='Architecture design UI/Ux prototype Architecture design UI/Ux prototype' />
        </div>
      </div>
    </section>
  )
}