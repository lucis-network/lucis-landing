import Button3D from "components/Button3D";
import { useWindowSize } from "hooks/useWindowSize";
import Link from "next/link";
import { useRouter } from "next/router";
import s from "./ItemEcosystem.module.sass";

type Props = {
  dataEcosystems?: any;
  properties?: object; 
};
export default function ItemEcosystem(props: Props) {
  const { dataEcosystems, properties } = props;

  const router = useRouter();
  const [width] = useWindowSize();

  return dataEcosystems.map((e: any) => (
    <div
      className={`${s.itemEcosystem} ${
        e.id == 1
          ? s.item1
          : e.id == 2
          ? s.item2
          : e.id == 3
          ? s.item3
          : e.id == 4
          ? s.item4
          : e.id == 5
          ? s.item5
          : e.id == 6
          ? s.item6
          : e.id == 7
          ? s.item7
          : e.id == 8
          ? s.item8
          : e.id == 9
          ? s.item9
          : e.id == 10
          ? s.item10
          : e.id == 11
          ? s.item11
          : e.id == 12
          ? s.item12
          : e.id == 13
          ? s.item13
          : ""
      }`}
      key={e.id}
    >
      {width < 1024 && <h1>{e.titleH1}</h1>}
      <div className={s.heading}>
        {width >= 1024 && <h1>{e.titleH1}</h1>}
        <div dangerouslySetInnerHTML={{ __html: `${e.titleP}` }} />
        <div>
          {e.statusHref ? (
            <Button3D
              title={`${e.titleButton}`}
              normal
              onClick={() => {
                router.push(`${e.href}`);
              }}
            />
          ) : (
            <a
              href={"https://insight.lucis.network/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              More Detail
            </a>
          )}
        </div>
      </div>
      <div className={`${s.im_Block}`} style={properties}>
        <img src={`${e.srcImg}`} alt="" />
      </div>
    </div>
  ));
}
