import AnimWhenVisible from "components/Anim";
import s from "./Marketplace.module.sass";
import TitleName from "./TitleSection/TitleName";

type Props = {};

export default function Marketplace(props: Props) {
  return (
    <section id="Marketplace" className={s.container}>
      <AnimWhenVisible>
        <TitleName titleName="Marketplace" />
      </AnimWhenVisible>

      <div className={s.Marketplace}>
        <div className={s.block_item}>
          <div className={s.item}>
            <AnimWhenVisible>
              <p>
                <span>INO</span> Launchpad for game publisher
              </p>
            </AnimWhenVisible>
          </div>
          <div className={s.item}>
            <AnimWhenVisible>
              <p>
                Buy and Sell
                <br /> NFT items
              </p>
            </AnimWhenVisible>
          </div>
        </div>
        <div className={s.item_left}></div>
        <div className={s.bg_marketplace}>
          <AnimWhenVisible
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 20 },
            }}
          >
            <img src="/assets/Marketplace/Marketplace.png" alt="" />
          </AnimWhenVisible>
        </div>
      </div>
    </section>
  );
}
