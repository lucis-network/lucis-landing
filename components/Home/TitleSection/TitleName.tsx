import s from './TitleName.module.sass'
import {ReactElement} from "react";

type Props = {
  titleName: string | ReactElement
}

export default function TitleName(props: Props) {
  return(
    <div className={s.heading_section}>
      <h1>{props.titleName}</h1>
    </div>
  )
}
