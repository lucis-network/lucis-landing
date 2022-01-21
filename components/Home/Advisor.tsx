import CardTeam from './CardTeam/CardTeam'
import s from './Advisor.module.sass'
import SimpleSliderAdvisor from './Slider/Slide_Advisor/SlideTeam'

type Props = {}

export default function Advisor(props: Props){
  return(
    <section className={s.container}>
      <SimpleSliderAdvisor />
    </section>
  )
}