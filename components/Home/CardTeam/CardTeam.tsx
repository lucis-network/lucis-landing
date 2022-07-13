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

export default function c(props: Props) {
  const bg_Team =
    props.statusCard == 1
      ? "/assets/Team/bg_team.png"
      : "/assets/Team/bg_av.png"

  const styleLinkIn = props.setLinkin == true ? {display:'block'} :{display:'none'}

  return (
    <div className={s.containerTeam}>
      <div className={s.content_im}>
        <div className={s.im_team}>
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
            {/* <a className={s.ico} style={styleLinkIn} href={props.srcLinkedIn} target='_blank' rel="noopener noreferrer">
              <img src="/assets/Team/in.svg" alt="" />
            </a> */}
            <span className={s.name}>
              <a className={s.ico} style={styleLinkIn} href={props.srcLinkedIn} target='_blank' rel="noopener noreferrer">
                {props.nameTeam}
              </a>
            </span>
          </div>
          <span className={s.team}>{props.serviceTeam}</span>
        </AnimWhenVisible>
      </div>
    </div>
  );
}
