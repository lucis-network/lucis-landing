import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from "next/link";

import homepage from '../Homepage.module.sass'
import fvGame from './FavoriteGames.module.sass'
import 'swiper/css'

const FavoriteGames = () => {

  return (
    <section className={`${homepage.section} ${fvGame.sectionFavoriteGames}`}>
      <div className={homepage.sectionTitleWrap}>
        <div className="lucis-container-2">
          <h2 className={homepage.sectionTitle}>PLAY YOUR FAVORITE GAMES</h2>
        </div>
      </div>
      <div className={fvGame.sliderWrap}>
        <Swiper
          centeredSlides
          slidesPerView="auto"
          initialSlide={1}
          modules={[Pagination]}
          loop
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
              <Link href={`${process.env.NEXT_PUBLIC_P2E_URL}`} passHref>
                <a target="_blank" className={`${homepage.btnCommon} ${fvGame.btnCommon}`}>CONNECT GAME</a>
              </Link>
            </div>
            <div className={fvGame.gameItem}>
              <img src="/assets/homepage/favoriteGames/gameValorant.jpg" alt=""/>
              <Link href={`${process.env.NEXT_PUBLIC_P2E_URL}`} passHref>
                <a target="_blank" className={`${homepage.btnCommon} ${fvGame.btnCommon}`}>CONNECT GAME</a>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${fvGame.gameItem} available`}>
              <img src="/assets/homepage/favoriteGames/gameLOL.jpg" alt=""/>
              <Link href={`${process.env.NEXT_PUBLIC_P2E_URL}`} passHref>
                <a target="_blank" className={`${homepage.btnCommon} ${fvGame.btnCommon}`}>CONNECT GAME</a>
              </Link>
            </div>
            <div className={`${fvGame.gameItem} available`}>
              <img src="/assets/homepage/favoriteGames/gameCSGO.jpg" alt=""/>
              <Link href={`${process.env.NEXT_PUBLIC_P2E_URL}`} passHref>
                <a target="_blank" className={`${homepage.btnCommon} ${fvGame.btnCommon}`}>CONNECT GAME</a>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={fvGame.gameItem}>
              <img src="/assets/homepage/favoriteGames/gameDOTA.jpg" alt=""/>
              <Link href={`${process.env.NEXT_PUBLIC_P2E_URL}`} passHref>
                <a target="_blank" className={`${homepage.btnCommon} ${fvGame.btnCommon}`}>CONNECT GAME</a>
              </Link>
            </div>
            <div className={fvGame.gameItem}>
              <img src="/assets/homepage/favoriteGames/gameFortnite.jpg" alt=""/>
              <Link href={`${process.env.NEXT_PUBLIC_P2E_URL}`} passHref>
                <a target="_blank" className={`${homepage.btnCommon} ${fvGame.btnCommon}`}>CONNECT GAME</a>
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default FavoriteGames