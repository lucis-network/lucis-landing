import s from "./Doc.module.sass"

type Props = {
  titleCard: string,
  srcImg: string,
  link: string
}
export default function CardDocs(props: Props) {
  const { titleCard, srcImg, link } = props
  return (
    <a href={link} className={s.content} target="_blank" rel="noopener noreferrer">
      <img src={srcImg} alt="" />
      <p>{titleCard}</p>
    </a>
  )
}