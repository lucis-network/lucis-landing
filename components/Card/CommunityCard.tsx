import Image from '../Image';
import s from './CommunityCard.module.sass'
type Props = {
    image: StaticImageData,
    title: String,
    genre: String,
    content: String,
    srcReadMore: string
}
export default function PlayerCard(props: Props) {
    return (
        <div className={s.content_heading}>
            <div className={s.im_community}>
                <Image src={props.image} width={894} height={894} layout='responsive' alt="#"></Image>
            </div>
            <div className={s.text}>
                <h3 className={s.title_game}>{props.title}</h3>
                <h5>{props.genre}</h5>
                <p>{props.content}</p>
                <a href={props.srcReadMore}>{"read more >>"}</a>
            </div>
        </div>
    )
}