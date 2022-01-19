import s from './TotalBanner.module.sass'

type Props = {
  title: string,
  titleNumber: string,
}
export default function TotalBanner(props: Props){
  return(
    <div className={s.total_content}>
      <h1>{props.title}</h1>
      <h2>{props.titleNumber}</h2>
    </div>
  )
}