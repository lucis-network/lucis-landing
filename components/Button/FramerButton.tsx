import { DetailedHTMLProps, useState } from "react";
import { motion } from "framer-motion";
import Donut from "../../assets/img/donut.png";
import Image from '../Image';

type Props = DetailedHTMLProps<any, any> & {
	type: number,
}
export default function FramerButton(props: Props) {
	const btnType = props.type == 1
		? 'bg-gradient-1 p-15px rounded-8px'
		: '';
	const {
		className,
		...restProps
	} = props;

	const [isHovered, setHovered] = useState(false)
	return (
		<motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.2 }}  onHoverStart={() => setHovered(true)}
		onHoverEnd={() => setHovered(false)}  className={`${btnType} ${className}`} {...restProps}>
			<motion.div className="w-40"
				animate= {
					isHovered ? 
					{ rotate: 360,
					scale: 1.2} : {}
				}
			 >
				<Image src={Donut} alt=""></Image>
			</motion.div>
		</motion.button>
	)
}