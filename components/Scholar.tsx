import PlayerCard from './Card/PlayerCard';
import scholar1 from 'assets/img/scholar/1.png';
import scholar2 from 'assets/img/scholar/2.png';
import scholar3 from 'assets/img/scholar/3.png';
import scholar4 from 'assets/img/scholar/4.png';
type Props = {};
const scholarData = [
	{
		image: scholar1,
		content: 'Join scholar program to have training',
	},
	{
		image: scholar2,
		content: 'Startup không cần vốn, nhận lương và hoa hồng, ',
	},
	{
		image: scholar3,
		content: 'GAME THỦ: Chơi nhiều game cùng lúc trên hệ thống',
	},
    {
		image: scholar4,
		content: 'Đua top trong guild',
	},
]
export default function scholar(props: Props) {
	return (
		<div className="container text-white mt-200px">
			<h3 className='font-transformer text-white lg:text-72px text-32px leading-55px mb-60px'>FOR SCHOLAR</h3>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-150px md:gap-10">
				{
					scholarData.map((item, index) => (<PlayerCard image={item.image} content={item.content} key={index}></PlayerCard>))
				}
			</div>
		</div>
	)
}