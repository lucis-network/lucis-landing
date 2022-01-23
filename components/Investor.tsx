import s from './investor.module.sass'

import PlayerCard from './Card/PlayerCard';
import Title from 'components/Home/TitleSection/TitleName';

type Props = {};
const investorData = [
	{
		image: '/assets/investor/investor1.png',
		content: 'Cho thuê NFT rảnh rỗi',
	},
	{
		image: '/assets/investor/investor2.png',
		content: 'Cộng tác & đầu tư tiền vào game thủ chuyên nghiệp',
	},
	{
		image: '/assets/investor/investor3.png',
		content: 'Quản lý game thủ ngay trên hệ thống',
	},
	{
		image: '/assets/investor/investor1.png',
		content: 'Cho thuê NFT rảnh rỗi',
	},
]
export default function Investor(props: Props) {
	return (
		<div id="Investors" className={`container text-white mt-140px ${s.container}`}>
			<div className="mb-60px">
				<Title titleName='FOR INVESTOR'></Title>
			</div>
			<div className={s.block_item}>
				{
					investorData.map((item, index) => (<PlayerCard statusHeight={false} type='investor' image={item.image} content={item.content} key={index}></PlayerCard>))
				}
			</div>
		</div>
	)
}
