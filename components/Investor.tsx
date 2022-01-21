import PlayerCard from './Card/PlayerCard';
import investor1 from 'assets/img/investor/1.png';
import investor2 from 'assets/img/investor/2.png';
import investor3 from 'assets/img/investor/3.png';
import Title from 'components/Home/TitleSection/TitleName';

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
		<div className="container text-white mt-140px">
			<div className="mb-60px">
				<Title titleName='FOR INVESTOR'></Title>
			</div>
			<div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-60px md:gap-6 lg:gap-10">
				{
					investorData.map((item, index) => (<PlayerCard type='investor' image={item.image} content={item.content} key={index}></PlayerCard>))
				}
			</div>
		</div>
	)
}