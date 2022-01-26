import AnimWhenVisible from "components/Anim";
import Image from "../Image";
import s from "./CommunityCard.module.sass";
type Props = {
  image: StaticImageData;
  title: String;
  genre: String;
  content: String;
  srcReadMore: string;
};
export default function ComminutyCard(props: Props) {
  return (
    <div className={s.content_heading}>
      <div className={s.im_community}>
        <AnimWhenVisible>
          <Image
            src={props.image}
            width={894}
            height={894}
            layout="responsive"
            alt="#"
            priority
          ></Image>
        </AnimWhenVisible>
      </div>
      <AnimWhenVisible>
        <div className={s.text}>
          <h3 className={s.title_game}>{props.title}</h3>
          <h5>{props.genre}</h5>
          <p>{props.content}</p>
          <a href={props.srcReadMore} target={"_blank"} rel="noopener noreferrer">{"read more >>"}</a>
        </div>
      </AnimWhenVisible>
    </div>
  );
}
