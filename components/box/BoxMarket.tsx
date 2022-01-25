import s from './BoxMarket.module.sass'

type Props= {
    srcBox: string;
    titleBox: string;
}

export default function BoxMarket(props: Props) {
    return(
        <div className={s.content_box}>
           <div className={s.img}>
                <img src={props.srcBox} alt="" />
           </div>
           <p>{props.titleBox}</p>         
        </div>
    )
}