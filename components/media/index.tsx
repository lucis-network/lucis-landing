import { Row } from 'antd'
import TitleName from 'components/Home/TitleSection/TitleName'
import MediaCard from './card'
import s from './Media.module.sass'

const listDataCard = [
    {
        src: '/assets/media/im_media1.png', title: 'Dự phóng hệ BNB Chain (BSC) 2022 - Chuẩn bị cho cú "trở mình" sau cơn bão hòa', avatar: '', time: ' March 24, 2022'
    },
    {
        src: '/assets/media/im_media2.png', title: 'Hệ sinh thái zkSync: Mảnh ghép còn thiếu của Ethereum để tiến tới Mass Adoption?', avatar: '', time: ' March 24, 2022'
    },
    {
        src: '/assets/media/im_media3.png', title: 'Dự phóng hệ Cardano 2022- "Lệch pha" trong 2021 và bứt tốc trong 2022', avatar: '', time: ' March 24, 2022'
    },
]
export default function MediaPage() {
    return (
        <div className={`lucis-container ${s.wrapper}`}>
            <TitleName titleName="Media" />

            <Row className={`${s.block_card} section-content`}>
                <MediaCard datas={ listDataCard } />
            </Row>
        </div>
    )
}