import s from './CardTeam.module.sass'

type Props = {
  statusCard: number,
  nameTeam: string,
  serviceTeam: string
}

export default function CardTeam(props: Props) {
  const bg_Team = props.statusCard == 1?'/assets/Team/bg_team1.png'
  : props.statusCard == 2? '/assets/Team/bg_team2.png'
  : props.statusCard == 3? '/assets/Team/bg_team3.png'
  : '/assets/Team/bg_team4.png'

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