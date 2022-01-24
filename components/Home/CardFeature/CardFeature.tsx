import AnimWhenVisible from "components/Anim";
import s from "./CardFeature.module.sass";

type Props = {
  titleCard: string;
  contentCard: string;
  status: boolean;
  linkImg: string;
};
export default function CardFeature(props: Props) {
  const statusBtn = props.status == true ? s.hello : s.next;
  return (
    <div className={s.content_card}>
      <div className={s.bg_glass}>
        <img src={props.linkImg} alt="" />
      </div>

      <div className={s.heading_card}>
        <div className={`${s.logo_card} ${statusBtn}`}>
          <div className={s.bg_icon}></div>
          <img src={props.linkImg} alt="" />
        </div>
        <AnimWhenVisible>
          <h2>{props.titleCard}</h2>
          <p>{props.contentCard}</p>
        </AnimWhenVisible>
      </div>
    </div>
  );
}
