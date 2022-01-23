import s from './Backers.module.sass'
import TitleName from './TitleSection/TitleName'

type Props = {}

export default function Backer(props: Props) {
  return(
    <section className={s.container}>
      <TitleName titleName='Backers' />

      <div className={s.block_item}>
          <div className={s.item_backer}>
            <img src="/assets/backer/au21.png" alt="" />
          </div>
          <div className={s.item_backer}>
            <img src="/assets/backer/basic.png" alt="" />
          </div>
          <div className={s.item_backer}>
            <img src="/assets/backer/bigcoin.png" alt="" />
          </div>
          <div className={s.item_backer}>
            <img src="/assets/backer/defi.png" alt="" />
          </div>
          <div className={s.item_backer}>
            <img src="/assets/backer/ex.png" alt="" />
          </div>
          <div className={s.item_backer}>
            <img src="/assets/backer/formless.png" alt="" />
          </div>
          <div className={s.item_backer}>
            <img src="/assets/backer/gamee.png" alt="" />
          </div>
          <div className={s.item_backer}>
            <img src="/assets/backer/gg.png" alt="" />
          </div>
          <div className={s.item_backer}>
            <img src="/assets/backer/hub.png" alt="" />
          </div>
          <div className={s.item_backer}>
            <img src="/assets/backer/impo.png" alt="" />
          </div>
          <div className={s.item_backer}>
            <img src="/assets/backer/kyber.png" alt="" />
          </div>
          <div className={s.item_backer}>
            <img src="/assets/backer/kyros.png" alt="" />
          </div>
          <div className={s.item_backer}>
            <img src="/assets/backer/lua.png" alt="" />
          </div>
          <div className={s.item_backer}>
            <img src="/assets/backer/okex.png" alt="" />
          </div>
          <div className={s.item_backer}>
            <img src="/assets/backer/realdeal.png" alt="" />
          </div>
          <div className={s.item_backer}>
            <img src="/assets/backer/sol(1).png" alt="" />
          </div>
          <div className={s.item_backer}>
            <img src="/assets/backer/solar.png" alt="" />
          </div>
          <div className={s.item_backer}>
            <img src="/assets/backer/tk.png" alt="" />
          </div>
          <div className={s.item_backer}>
            <img src="/assets/backer/tomo.png" alt="" />
          </div>
          <div className={s.item_backer}>
            <img src="/assets/backer/au21.png" alt="" />
          </div>
      </div>
    </section>
  )
}
