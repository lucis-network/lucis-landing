import PlayerCard from './Card/PlayerCard';
import investor1 from 'assets/img/investor/1.png';
import investor2 from 'assets/img/investor/2.png';
import investor3 from 'assets/img/investor/3.png';
type Props = {};
const investorData = [
	{
		image: investor1,
		content: 'Cho thuê NFT rảnh rỗi',
	},
	{
		image: investor2,
		content: 'Cộng tác & đầu tư tiền vào game thủ chuyên nghiệp',
	},
	{
		image: investor3,
		content: 'Quản lý game thủ ngay trên hệ thống',
	}
]
export default function Investor(props: Props) {
	return (
		<div className="container text-white mt-200px">
			<h3 className='font-transformer text-white lg:text-72px text-32px leading-55px mb-60px'>FOR INVESTOR</h3>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-150px md:gap-6 lg:gap-10">
				{
					investorData.map((item, index) => (<PlayerCard image={item.image} content={item.content} key={index}></PlayerCard>))
				}
			</div>
		</div>
	)
}