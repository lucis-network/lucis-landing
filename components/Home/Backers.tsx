import s from './Backers.module.sass'
import TitleName from './TitleSection/TitleName'

type Props = {}

export default function Backer(props: Props) {
  return(
    <section className={s.container}>
      <TitleName titleName='Backers' />

      <div className={s.block_item}>
          <img src="/assets/backer/au21.png" alt="" />
          <img src="/assets/backer/basic.png" alt="" />
          <img src="/assets/backer/bigcoin.png" alt="" />
          <img src="/assets/backer/defi.png" alt="" />
          <img src="/assets/backer/ex.png" alt="" />
          <img src="/assets/backer/formless.png" alt="" />
          <img src="/assets/backer/gamee.png" alt="" />
          <img src="/assets/backer/gg.png" alt="" />
          <img src="/assets/backer/hub.png" alt="" />
          <img src="/assets/backer/impo.png" alt="" />
          <img src="/assets/backer/kyber.png" alt="" />
          <img src="/assets/backer/kyros.png" alt="" />
          <img src="/assets/backer/lua.png" alt="" />
          <img src="/assets/backer/okex.png" alt="" />
          <img src="/assets/backer/realdeal.png" alt="" />
          <img src="/assets/backer/sol(1).png" alt="" />
          <img src="/assets/backer/solar.png" alt="" />
          <img src="/assets/backer/tk.png" alt="" />
          <img src="/assets/backer/tomo.png" alt="" />
          <img src="/assets/backer/au21.png" alt="" />
      </div>
    </section>
  )
}