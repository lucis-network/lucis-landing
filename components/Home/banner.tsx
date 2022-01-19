import s from "./banner.module.sass";
import TotalBanner from "./Total/TotalBanner";

type Props = {};

function Banner(props: Props) {
  return (
    <section className={`${s.container}`}>
      <div className="stars-bg"></div>
      <div className={s.im_banner}>
        <div className={s.heading}>
          <h1>Guild Hub of the Play To Earn world</h1>
          <p>
            We connect investors and players in the world of play to earn gaming
            and metaverse
          </p>
          <div className={s.groupButton}>
            <button>Become our Investor</button>
            <button className={s.btn_Scholar}>Become our Scholar</button>
          </div>
        </div>
        <img src="/assets/Banner/vr-glass.png" alt="" />
      </div>



      {/* Total */}

      <TotalBanner title='Total Investors' titleNumber='10+' />
    </section>
  );
}

export default Banner;
