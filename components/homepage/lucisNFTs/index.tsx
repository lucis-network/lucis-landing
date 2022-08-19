import { Swiper, SwiperSlide } from 'swiper/react';

import homepage from '../Homepage.module.sass'
import lucisNFTs from './LucisNFTs.module.sass'
import 'swiper/css'

const LucisNFTs = () => {

  return (
    <section className={`${homepage.section} ${lucisNFTs.sectionFavoriteGames}`}>
      <div className="lucis-container-2">
        <div className={homepage.sectionTitleWrap}>
          <h2 className={homepage.sectionTitle}>LUCIS NFTS</h2>
          <p className={homepage.sectionDesc}>Want to earn real money from playing your games?</p>
        </div>
        <div className={lucisNFTs.sliderWrap}>
          <Swiper
            centeredSlides
            slidesPerView="auto"
            initialSlide={1}
            breakpoints={{
              320: {
                spaceBetween: 8
              },
              1600: {
                spaceBetween: 24
              },
            }}
          >
            <SwiperSlide>
              <div className={lucisNFTs.nftItem}>
                <img src="/assets/homepage/lucisNFTs/nftBuffallo.jpg" alt=""/>
                <div className={lucisNFTs.nftInfo}>
                  <h3 className={lucisNFTs.nftName}>Tarusboss NFT</h3>
                  <p className={lucisNFTs.nftValue}>7800USD</p>
                </div>
              </div>
              <div className={lucisNFTs.nftItem}>
                <img src="/assets/homepage/lucisNFTs/nftSnake.jpg" alt=""/>
                <div className={lucisNFTs.nftInfo}>
                  <h3 className={lucisNFTs.nftName}>Tarusboss NFT</h3>
                  <p className={lucisNFTs.nftValue}>7800USD</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={lucisNFTs.nftItem}>
                <img src="/assets/homepage/lucisNFTs/nftCat.jpg" alt=""/>
                <div className={lucisNFTs.nftInfo}>
                  <h3 className={lucisNFTs.nftName}>Tarusboss NFT</h3>
                  <p className={lucisNFTs.nftValue}>7800USD</p>
                </div>
              </div>
              <div className={lucisNFTs.nftItem}>
                <img src="/assets/homepage/lucisNFTs/nftChicken.jpg" alt=""/>
                <div className={lucisNFTs.nftInfo}>
                  <h3 className={lucisNFTs.nftName}>Tarusboss NFT</h3>
                  <p className={lucisNFTs.nftValue}>7800USD</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={lucisNFTs.nftItem}>
                <img src="/assets/homepage/lucisNFTs/nftDog.jpg" alt=""/>
                <div className={lucisNFTs.nftInfo}>
                  <h3 className={lucisNFTs.nftName}>Tarusboss NFT</h3>
                  <p className={lucisNFTs.nftValue}>7800USD</p>
                </div>
              </div>
              <div className={lucisNFTs.nftItem}>
                <img src="/assets/homepage/lucisNFTs/nftDragon.jpg" alt=""/>
                <div className={lucisNFTs.nftInfo}>
                  <h3 className={lucisNFTs.nftName}>Tarusboss NFT</h3>
                  <p className={lucisNFTs.nftValue}>7800USD</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={lucisNFTs.nftItem}>
                <img src="/assets/homepage/lucisNFTs/nftGoat.jpg" alt=""/>
                <div className={lucisNFTs.nftInfo}>
                  <h3 className={lucisNFTs.nftName}>Tarusboss NFT</h3>
                  <p className={lucisNFTs.nftValue}>7800USD</p>
                </div>
              </div>
              <div className={lucisNFTs.nftItem}>
                <img src="/assets/homepage/lucisNFTs/nftHorse.jpg" alt=""/>
                <div className={lucisNFTs.nftInfo}>
                  <h3 className={lucisNFTs.nftName}>Tarusboss NFT</h3>
                  <p className={lucisNFTs.nftValue}>7800USD</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={lucisNFTs.nftItem}>
                <img src="/assets/homepage/lucisNFTs/nftMonkey.jpg" alt=""/>
                <div className={lucisNFTs.nftInfo}>
                  <h3 className={lucisNFTs.nftName}>Tarusboss NFT</h3>
                  <p className={lucisNFTs.nftValue}>7800USD</p>
                </div>
              </div>
              <div className={lucisNFTs.nftItem}>
                <img src="/assets/homepage/lucisNFTs/nftMouse.jpg" alt=""/>
                <div className={lucisNFTs.nftInfo}>
                  <h3 className={lucisNFTs.nftName}>Tarusboss NFT</h3>
                  <p className={lucisNFTs.nftValue}>7800USD</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={lucisNFTs.nftItem}>
                <img src="/assets/homepage/lucisNFTs/nftPig.jpg" alt=""/>
                <div className={lucisNFTs.nftInfo}>
                  <h3 className={lucisNFTs.nftName}>Tarusboss NFT</h3>
                  <p className={lucisNFTs.nftValue}>7800USD</p>
                </div>
              </div>
              <div className={lucisNFTs.nftItem}>
                <img src="/assets/homepage/lucisNFTs/nftTiger.jpg" alt=""/>
                <div className={lucisNFTs.nftInfo}>
                  <h3 className={lucisNFTs.nftName}>Tarusboss NFT</h3>
                  <p className={lucisNFTs.nftValue}>7800USD</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <button className={homepage.btnCommon}>OWN LUCIS NFTS</button>
      </div>
    </section>
  )
}

export default LucisNFTs