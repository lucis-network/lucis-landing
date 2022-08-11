import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';

import homepage from '../Homepage.module.sass'
import fvGame from './FavoriteGames.module.sass'

const FavoriteGames = () => {

  return (
    <section className={`${homepage.section} ${fvGame.sectionFavoriteGames}`}>
      <div className="lucis-container-2">
        <h2 className={homepage.sectionTitle}>PLAY YOUR FAVORITE GAME</h2>
        <div className={fvGame.sliderWrap}>

        </div>
      </div>
    </section>
  )
}

export default FavoriteGames