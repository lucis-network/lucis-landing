import s from './CardTeam.module.sass'

type Props = {
  statusCard: number,
  nameTeam: string,
  serviceTeam: string
}

export default function CardTeam(props: Props) {
  const bg_Team = props.statusCard == 1?'/assets/Team/bg_1.svg'
  : props.statusCard == 2? '/assets/Team/bg_2.svg'
  : props.statusCard == 3? '/assets/Team/bg_3.svg'
  : '/assets/Team/bg_4.svg'

  const im_team = props.statusCard == 1? s.im_team1
  :s.im_team

  return(
    <div className={s.containerTeam}>
      <div className={s.content_im}>
        <div className={im_team}>
          <img src="assets/Team/Group 152.png" alt="" />
        </div>
        <img className={s.bg_team} src={bg_Team} alt="" />
      </div>
      <div className={s.heading_team}>
        <p>{props.nameTeam}</p>
        <span>{props.serviceTeam}</span>
      </div>
    </div>
  )
}