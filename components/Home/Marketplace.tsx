import AnimWhenVisible from "components/Anim";
import BoxMarket from "components/box/BoxMarket";
import Button3D from "components/Button3D";
import Link from "next/link";
import s from "./Marketplace.module.sass";
import TitleName from "./TitleSection/TitleName";

type Props = {};

export default function Marketplace(props: Props) {
  return (
    <section id="Marketplace">
      <AnimWhenVisible>
        <TitleName titleName="Marketplace" />
      </AnimWhenVisible>
      <p style={{marginTop: '40px', textTransform: 'inherit'}}>
        - Game publisher can host INO to sell NFT mistery boxes to Lucis community or users<br />
        <br />
        - Sell NFT boxes or NFT collection on Lucis marketplace
      </p>

      <div className={`${s.content} section-content`}>
        <div className={s.conatainer_box}>
          <AnimWhenVisible>
            <div className={s.box}>
              <BoxMarket srcBox="/assets/Marketplace/box_thetan.png" titleBox="Thetan boxes" />
              <BoxMarket srcBox="/assets/Marketplace/box3.png" titleBox="HeroesTD boxes" />
            </div>
          </ AnimWhenVisible>
          <AnimWhenVisible>
            <div className={s.box}>
              <div className={s.heading}>
                <p><span>INO</span> Launchpad for game publishers</p>
              </div>
              <BoxMarket srcBox="/assets/Marketplace/box4.png" titleBox="Elemon boxes" />
            </div>
          </AnimWhenVisible>
          <AnimWhenVisible>
            <div className={s.box}>
              <BoxMarket srcBox="/assets/Marketplace/box2.png" titleBox="Axie Infinity boxes" />
              <BoxMarket srcBox="/assets/Marketplace/box5.png" titleBox="StarSharks boxes" />
            </div>
          </AnimWhenVisible>
        </div>
        <AnimWhenVisible>
        <div className={s.conatainer_box2}>
          <div></div>
          <img src="/assets/Marketplace/bg_box.png" alt="" />
          <div className={s.heading}>
            <p><span>Buy</span> and <span>Sell</span><br /> NFT items</p>
          </div>
        </div>
        </AnimWhenVisible>

        <div className={s.item_btn}>
          <Link href="https://testnet.lucis.pro/">
              Marketplace (Development)
          </Link>

          <Link href="https://launchpad-testnet.lucis.network/">
            Launchpad (TestNet)
          </Link>
      </div>
    </div>























      {/* <div className={s.Marketplace}>
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
      </div> */}
    </section>
  );
}
