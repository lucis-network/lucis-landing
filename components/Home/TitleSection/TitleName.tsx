import s from './TitleName.module.sass'

type Props = {
  // titleName: string
}

export default function TitleName(props: Props) {
  return(
    <div className={s.heading_section}>
      <h1>Our ecosystem</h1>
    </div>
  )
}