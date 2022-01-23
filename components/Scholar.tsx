import s from './Scholar.module.sass'

import PlayerCard from './Card/PlayerCard';
import Title from 'components/Home/TitleSection/TitleName';
type Props = {};
const scholarData = [
	{
		image: '/assets/Scholar/scholar1.png',
		content: 'Join scholar program to have training',
	},
	{
		image: '/assets/Scholar/scholar2.png',
		content: 'Startup không cần vốn, nhận lương và hoa hồng,',
	},
	{
		image: '/assets/Scholar/scholar3.png',
		content: 'GAME THỦ: Chơi nhiều game cùng lúc trên hệ thống',
	},
    {
		image: '/assets/Scholar/scholar4.png',
		content: 'Đua top trong guild',
	},
]
export default function scholar(props: Props) {
	return (
		<div id="Scholars" className={`container text-white mt-140px ${s.container}`}>
            <div className='mb-60px'>
			    <Title titleName='FOR SCHOLARS'></Title>
            </div>
			<div className={s.block_item}>
				{
					scholarData.map((item, index) => (<PlayerCard statusHeight={true} type='scholar' image={item.image} content={item.content} key={index}></PlayerCard>))
				}
			</div>
		</div>
	)
}
