import CardTeam from './CardTeam/CardTeam'
import SimpleSliderTeam from './Slider/SliderFeature/Slide_Team/SlideTeam'
import s from './Team.module.sass'

type Props = {}

export default function Team(props: Props){
  return(
    <section className="lucis-container">
      <SimpleSliderTeam />
    </section>
  )
}