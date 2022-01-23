import s from './Features.module.sass'
import SimpleSlider from './Home/Slider/SliderFeature/slideFeature'

type Props = {}

export default function Features(props: Props) {
  return(
    <section className={s.container} id="EcoSystem">
        <SimpleSlider />
    </section>
  )
}
