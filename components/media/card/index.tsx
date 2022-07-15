import { Col, Row } from 'antd';
import s from './MediaCard.module.sass'

type Props = {
    datas: any;
}

function BoxChat({ children }: any) {
    return (
        <div className={s.ic_box_chat}>
            <p>{children}</p>
            <img src="/assets/media/ic_box_chat.png" alt="" />
        </div>
    )
}

function MediaCard(props: Props) {
    const { datas } = props
    return (
        <>
            {
                datas.map((el: any, idx: number) => {
                    return (
                        <>
                            <a href="https://insight.lucis.network/" target="_blank" rel="noreferrer">
                                <Col key={idx} className={s.container}>
                                    <div className={s.thumb}>
                                        <img src={el.src} alt="" />
                                        <div className={s.content_box_chat}><BoxChat>TopTrending</BoxChat></div>
                                    </div>

                                    <div className={s.heading}>
                                        <p>{el.title}</p>
                                        <Row justify='space-between' align='middle' style={{marginTop: 32}}>
                                            <Col span={20}>
                                                <Row className={s.text} align="middle" justify='start'>
                                                    <Col className={s.content_user} span={7}>
                                                        <div className={s.avt}><img src="/assets/media/avt_user.png" alt="" /></div>
                                                        <span>Admin</span>
                                                    </Col>
                                                    <Col className={s.time}>{el.time}</Col>
                                                </Row>
                                            </Col>
                                            <Col span={2}><img src="/assets/media/ic_heart.png" alt="" /></Col>
                                        </Row>
                                    </div>
                                </Col>
                            </a>
                        </>
                    )
                })
            }
        </>
    )
}

export default MediaCard