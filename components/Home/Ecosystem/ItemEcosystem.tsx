import Button3D from "components/Button3D";
import { useWindowSize } from "hooks/useWindowSize";
import Link from "next/link";
import { useRouter } from "next/router";
import s from "./ItemEcosystem.module.sass";

type Props = {
  dataEcosystems?: any;
};
export default function ItemEcosystem(props: Props) {
  const { dataEcosystems } = props;

  const router = useRouter();
  const [width] = useWindowSize();

  return dataEcosystems.map((e: any) => (
    <div
      className={`${s.itemEcosystem} ${
        e.id == 1 || e.id == 9
          ? s.item1
          : e.id == 2
          ? s.item2
          : e.id == 3 || e.id == 10
          ? s.item3
          : e.id == 4
          ? s.item4
          : e.id == 5
          ? s.item5
          : e.id == 6
          ? s.item6
          : e.id == 7
          ? s.item7
          : ""
      }`}
      key={e.id}
    >
      {width < 1024 && <h1>{e.titleH1}</h1>}
      <div className={s.heading}>
        {width >= 1024 && <h1>{e.titleH1}</h1>}
        <div dangerouslySetInnerHTML={{ __html: `${e.titleP}` }} />
        <div>
          {
            e.statusHref ? 
              <Button3D
                title={`${e.titleButton}`}
                normal
                onClick={() => {
                  router.push(`${e.href}`);
                }}
              />
            : <a href={'https://insight.lucis.network/'} target="_blank" rel="noopener noreferrer">More Detail</a>
          }
        </div>
      </div>
      <div className={`${s.im_Block}`}>
        <img src={`${e.srcImg}`} alt="" />
      </div>
    </div>
  ));
}
