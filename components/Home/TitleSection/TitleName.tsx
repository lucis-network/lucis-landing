import s from './TitleName.module.sass'

type Props = {
  titleName: string
}

export default function TitleName(props: Props) {
  return(
    <div className={s.heading_section}>
      <h1>{props.titleName}</h1>
    </div>
  )
}