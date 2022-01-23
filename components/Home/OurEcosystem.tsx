import s from './OurEcosystem.module.sass'
import TitleName from './TitleSection/TitleName'

type Props ={}

export default function OurEcosystem(props: Props){
  return(
    <section id="Medias" className={s.container}>
      <TitleName titleName='Our ecosystem' />

      <div className={s.content_video}>
        <iframe src="https://www.youtube.com/embed/eIz-E4Jbsg8?=1&showinfo=0&modestbranding=1&rel=0&mute=1" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" frameBorder="0"></iframe>
      </div>

      <div className={s.group_ic}>
        <div className={s.ic_item}>
          <div>
            <img src="/assets/OurEcosystem/tiktok.svg" alt="" />
          </div>
        </div>
        <div className={s.ic_item}>
          <div>
            <img src="/assets/OurEcosystem/fb.svg" alt="" />
          </div>
        </div>
        <div className={s.ic_item}>
          <div>
            <img src="/assets/OurEcosystem/ytb.svg" alt="" />
          </div>
        </div>
        <div className={s.ic_item}>
          <div>
            <img src="/assets/OurEcosystem/tele.svg" alt="" />
          </div>
        </div>
        <div className={s.ic_item}>
          <div>
            <img src="/assets/OurEcosystem/tw.svg" alt="" />
          </div>
        </div>
        <div className={s.ic_item}>
          <div>
            <img src="/assets/OurEcosystem/dis.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
