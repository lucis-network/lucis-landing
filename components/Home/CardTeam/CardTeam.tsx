import AnimWhenVisible from "components/Anim";
import s from "./CardTeam.module.sass";

type Props = {
  statusCard: number;
  nameTeam: string;
  serviceTeam: string;
  srcImg?: string;
  srcLinkedIn?: string;
  enableAnim?: boolean;
  setLinkin?: boolean;
};

export default function CardTeam(props: Props) {
  const bg_Team =
    props.statusCard == 1
      ? "/assets/Team/vector_team.svg"
      : props.statusCard == 2
      ? "/assets/Team/bg_2.svg"
      : props.statusCard == 3
      ? "/assets/Team/bg_3.svg"
      : "/assets/Team/bg_4.svg";
  const styleLinkIn = props.setLinkin == true ? {display:'block'} :{display:'none'}
  const im_team = props.statusCard == 1 ? s.im_team1 : s.im_team;

  return (
    <div className={s.containerTeam}>
      <div className={s.content_im}>
        <div className={im_team}>
          <AnimWhenVisible
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            enable={props.enableAnim}
          >
            <img src={props.srcImg} alt="" />
          </AnimWhenVisible>
        </div>
        <img className={s.bg_team} src={bg_Team} alt="" />
      </div>
      <div className={s.heading_team}>
        <AnimWhenVisible enable={props.enableAnim}>
          <div className={s.blockName}>
            <a className={s.ico} style={styleLinkIn} href={props.srcLinkedIn} target='_blank' rel="noopener noreferrer">
              <img src="/assets/Team/in.svg" alt="" />
            </a>
            <span className={s.name}>{props.nameTeam}</span>
          </div>
          <span className={s.team}>{props.serviceTeam}</span>
        </AnimWhenVisible>
      </div>
    </div>
  );
}
