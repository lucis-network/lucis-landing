import s from './Marketplace.module.sass'
import TitleName from './TitleSection/TitleName'

type Props = {}

export default function Marketplace(props: Props) {
  return(
    <section id="Marketplace" className={s.container}>
      <TitleName titleName='Marketplace' />

      <div className={s.Marketplace}>
        <div className={s.block_item}>
            <div className={s.item}>
              <p><span>INO</span> Launchpad for game publisher</p>
            </div>
            <div className={s.item}>
              <p>Buy and Sell NFT items</p>
            </div>
        </div>
        <div className={s.item_left}></div>
        <div className={s.bg_marketplace}>
          <img src="/assets/Marketplace/Marketplace.png" alt="" />
        </div>
      </div>
    </section>
  )
}
