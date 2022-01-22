import Image from '../Image';
import s from './PlayerCard.module.sass'
type Props = {
	image: string,
	content: String,
	type: String,
	statusHeight: boolean,
}
export default function PlayerCard(props: Props) {
	const customHeight = props.statusHeight == false? s.content_card1
	:s.content_card2

	return (
		<div className={`${s.content_investor} ${customHeight}`}>
			<div className={s.im_investor}>
				<img src={props.image} alt="" />
			</div>
			<div className={s.heading_investor}>
				<p>
					{props.content}
				</p>
			</div>
		</div>
	)
}