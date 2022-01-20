import Image from '../Image';
type Props = {
	image: StaticImageData,
	content: String,
}
export default function PlayerCard(props: Props) {
	return (
		<div className="bg-player shadow-player rounded-20px">
			<div className='-m-20px'>
				<Image src={props.image} alt=""/>
			</div>
				<div className="px-6 py-4 min-h-[200px]">
					<p className="text-24px font-sophia text-center">
						{props.content}
					</p>
				</div>
		</div>
	)
}