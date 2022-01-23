import Image from './Image';
import s from './Features.module.sass'
import SimpleSlider from './Home/Slider/SliderFeature/slideFeature'
import Howework from 'assets/img/howwework.png';


type Props = {}

export default function Features(props: Props) {
  return(
    <section className={s.container}>
        <SimpleSlider />

        <div className="mt-10">
                <Image src={Howework} alt='' width={1463} height={670} layout='responsive' priority></Image>
            </div>
    </section>
  )
}
