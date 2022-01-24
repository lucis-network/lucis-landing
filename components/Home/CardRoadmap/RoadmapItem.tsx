import AnimWhenVisible from "components/Anim";
import s from "./RoadmapItem.module.sass";

type Props = {
  titleYear: string;
  titleContent: string;
};

export default function RoadmapItem(props: Props) {
  return (
    <div className={s.content_roamap}>
      <img src="/assets/Roadmap/bg_roadmap.png" alt="" />
      <div className={s.bg_year}>
        <p>{props.titleYear}</p>
      </div>
      <div className={s.heading_roamap}>
        <AnimWhenVisible>{props.titleContent}</AnimWhenVisible>
      </div>
    </div>
  );
}
