import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import homepage from '../Homepage.module.sass'
import fvGame from './FavoriteGames.module.sass'
import 'swiper/css'

const FavoriteGames = () => {

  return (
    <section className={`${homepage.section} ${fvGame.sectionFavoriteGames}`}>
      <div className="lucis-container-2">
        <div className={homepage.sectionTitleWrap}>
          <h2 className={homepage.sectionTitle}>PLAY YOUR FAVORITE GAME</h2>
        </div>
        <div className={fvGame.sliderWrap}>
          <Swiper
            centeredSlides
            slidesPerView="auto"
            initialSlide={1}
            modules={[Pagination]}
            pagination={{
              clickable: true
            }}
            breakpoints={{
              320: {
                spaceBetween: 8
              },
              1600: {
                spaceBetween: 16
              },
            }}
          >
            <SwiperSlide>
              <div className={fvGame.gameItem}>
                <img src="/assets/homepage/favoriteGames/gameThetan.jpg" alt=""/>
                <button className={`${homepage.btnCommon} ${fvGame.btnCommon}`}>CONNECT GAME</button>
              </div>
              <div className={fvGame.gameItem}>
                <img src="/assets/homepage/favoriteGames/gameValorant.jpg" alt=""/>
                <button className={`${homepage.btnCommon} ${fvGame.btnCommon}`}>CONNECT GAME</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`${fvGame.gameItem} available`}>
                <img src="/assets/homepage/favoriteGames/gameLOL.jpg" alt=""/>
                <button className={`${homepage.btnCommon} ${fvGame.btnCommon}`}>CONNECT GAME</button>
              </div>
              <div className={`${fvGame.gameItem} available`}>
                <img src="/assets/homepage/favoriteGames/gameCSGO.jpg" alt=""/>
                <button className={`${homepage.btnCommon} ${fvGame.btnCommon}`}>CONNECT GAME</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={fvGame.gameItem}>
                <img src="/assets/homepage/favoriteGames/gameDOTA.jpg" alt=""/>
                <button className={`${homepage.btnCommon} ${fvGame.btnCommon}`}>CONNECT GAME</button>
              </div>
              <div className={fvGame.gameItem}>
                <img src="/assets/homepage/favoriteGames/gameFortnite.jpg" alt=""/>
                <button className={`${homepage.btnCommon} ${fvGame.btnCommon}`}>CONNECT GAME</button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default FavoriteGames