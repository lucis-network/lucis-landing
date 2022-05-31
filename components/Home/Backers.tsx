import s from './Backers.module.sass'
import TitleName from './TitleSection/TitleName'

type Props = {}

export default function PartnersStrategic(props: Props) {
  return(
    <section className="lucis-container">
      <TitleName titleName='Partners' />

      <div className={`${s.block_item} section-content`}>
          <div className={s.item_backer}>
            <img src="/assets/backer/mones.png" alt="" />
          </div>
          <div className={s.item_backer}>
            <img src="/assets/backer/tt.png" alt="" />
          </div>
          <div className={s.item_backer}>
            <img src="/assets/backer/anv.png" alt="" />
          </div>
          <div className={s.item_backer}>
            <img src="/assets/backer/edigital.png" alt="" />
          </div>
          <div className={s.item_backer}>
            <img src="/assets/backer/spac.png" alt="" />
          </div>
          <div className={s.item_backer}>
            <img src="/assets/backer/aiza.png" alt="" />
          </div>
          <div className={s.item_backer}>
            <img src="/assets/backer/epic.png" alt="" />
          </div>
      </div>
    </section>
  )
}
