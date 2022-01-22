import Button3D from "components/Button3D";
import s from "./banner.module.sass";
import TotalBanner from "./Total/TotalBanner";

type Props = {};

function Banner(props: Props) {
  return (
    <section className={`${s.container_banner}`}>
      <div className="stars-bg"></div>
      <div className={s.im_banner}>
        <div className={s.heading}>
          <h1>Guild Hub of the Play To Earn world</h1>
          <p>
            We connect investors and players in the world of play to earn gaming
            and metaverse
          </p>
          <div className={s.groupButton}>
            <Button3D title="Become our Investor" />
            <Button3D title="Become our Scholar" normal />
          </div>
        </div>
        <div className={s.content_glass}>
          <img src="/assets/Banner/vr-glass.png" alt="" />
        </div>
      </div>

      {/* Total */}
      <div className={s.block_total}>
        <TotalBanner title="Total Investors" titleNumber="10+" />
        <TotalBanner title="Total Scholars" titleNumber="100+" />
        <TotalBanner title="Total Games" titleNumber="18+" />
        <TotalBanner title="Monthly Revenue" titleNumber="$100k+" />
      </div>
    </section>
  );
}

export default Banner;
