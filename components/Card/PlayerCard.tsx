import Image from '../Image';
type Props = {
	image: StaticImageData,
	content: String,
	type: String,
}
export default function PlayerCard(props: Props) {
	return (
		<div className="bg-player shadow-player rounded-20px">
			<div className={props.type == 'investor' ? '-m-20px' : '-m-10px' }>
				<Image src={props.image} alt=""/>
			</div>
				<div className="px-6 py-4 md:min-h-[200px] min-h-[150px]">
					<p className="text-white text-16px lg:text-24px font-sophia text-center">
						{props.content}
					</p>
				</div>
		</div>
	)
}