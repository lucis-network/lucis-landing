import Image from "./Image";
import s from "./Features.module.sass";
import SimpleSlider from "./Home/Slider/SliderFeature/slideFeature";
import Howework from "assets/img/howwework.png";
import AnimWhenVisible from "./Anim";

type Props = {};

export default function Features(props: Props) {
  return (
    <section className={s.container} id="EcoSystem">
      <SimpleSlider />

      <AnimWhenVisible>
        <div style={{ marginTop: 160 }}>
          <Image
            src={Howework}
            alt=""
            width={1463}
            height={670}
            layout="responsive"
            priority
          ></Image>
        </div>
      </AnimWhenVisible>
    </section>
  );
}
