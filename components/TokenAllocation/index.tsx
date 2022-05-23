import PieChart from "../Chart";
import TitleName from "../Home/TitleSection/TitleName";
import s from "./TokenAllocation.module.sass";

export default function TokenAllocation() {
  return (
    <section className="lucis-container">
      <TitleName titleName="$LUCIS TOKEN" />
      <div className="section-content">
        <img src="/assets/token_allocation/im_tokenomics.png" style={{ marginBottom: 120 }} alt="" />
        <PieChart />
      </div>
    </section>
  );
}
