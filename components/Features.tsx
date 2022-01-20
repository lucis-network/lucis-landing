import s from './Features.module.sass'
import SimpleSlider from './Home/Slider/SliderFeature/slideFeature'

type Props = {}

export default function Features(props: Props) {
  return(
    <section className={s.container}>
      <div className={s.heading_feature}>
        <h1>LuciS Guild key features</h1>
      </div>
      
        <SimpleSlider />
    </section>
  )
}
