import PlayerCard from './Card/PlayerCard';
import scholar1 from 'assets/img/scholar/1.png';
import scholar2 from 'assets/img/scholar/2.png';
import scholar3 from 'assets/img/scholar/3.png';
import scholar4 from 'assets/img/scholar/4.png';
import Title from 'components/Home/TitleSection/TitleName';
type Props = {};
const scholarData = [
	{
		image: scholar1,
		content: 'Join scholar program to have training',
	},
	{
		image: scholar2,
		content: 'Startup không cần vốn, nhận lương và hoa hồng,',
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
		<div className="container text-white mt-140px">
            <div className='mb-60px'>
			    <Title titleName='FOR SCHOLARS'></Title>
            </div>
			<div className="grid grid-cols-1 xs:grid-cols-2 xs:gap-4 md:grid-cols-4 gap-60px md:gap-6 lg:gap-10">
				{
					scholarData.map((item, index) => (<PlayerCard type='scholar' image={item.image} content={item.content} key={index}></PlayerCard>))
				}
			</div>
		</div>
	)
}