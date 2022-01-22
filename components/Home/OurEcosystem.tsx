import s from './OurEcosystem.module.sass'
import TitleName from './TitleSection/TitleName'

type Props ={}

export default function OurEcosystem(props: Props){
  return(
    <section className={s.container}>
      <TitleName titleName='Our ecosystem' />

      <div className={s.content_video}>
        <iframe src="https://www.youtube.com/embed/eIz-E4Jbsg8?=1&showinfo=0&modestbranding=1&rel=0&mute=1" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" frameBorder="0"></iframe>
      </div>

      <div className={s.group_ic}>
        <div className={s.ic_item}>
          <img src="/assets/OurEcosystem/TikTok.png" alt="" />
        </div>
        <div className={s.ic_item}>
          <img src="/assets/OurEcosystem/fb.png" alt="" />
        </div>
        <div className={s.ic_item}>
          <img src="/assets/OurEcosystem/ytb.png" alt="" />
        </div>
        <div className={s.ic_item}>
          <img src="/assets/OurEcosystem/tele.png" alt="" />
        </div>
        <div className={s.ic_item}>
          <img src="/assets/footer/dis.png" alt="" />
        </div>
      </div>
    </section>
  )
}