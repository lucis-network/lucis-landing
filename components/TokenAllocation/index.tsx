import PieChart from "../Chart";
import TitleName from "../Home/TitleSection/TitleName";
import s from "./TokenAllocation.module.sass";

export default function TokenAllocation() {
  return (
    <section className={s.container}>
      <TitleName titleName="TOKEN ALLOCATION" />
      <PieChart />
    </section>
  );
}
