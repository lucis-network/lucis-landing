// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Pagination, Navigation } from "swiper";
// SwiperCore.use([Pagination, Navigation]);
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

import ic_left from '../assets/icon/icon_left.svg';
import ic_game_community from '../assets/icon/icon_game_community.svg';
import Image from './Image';
import game1 from '../assets/img/game/game1.png';
import game2 from '../assets/img/game/game2.png';
import game3 from '../assets/img/game/game3.png';
type Props = {}
export default function Community(props: Props) {

  return (
    <div className="container">
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-transformer text-white lg:text-48px text-32px leading-55px 2xl:w-1/3 lg:w-1/2">Gaming community and partners</h3>
      </div>
      <div className='flex items-center mb-250px'>
        <div className='w-16px md:w-32px mr-4'>  
          <Image src={ic_game_community} width={32} height={38} alt='' layout='responsive'></Image>
        </div>
        <h5 className='text-emerald lg:text-32px md:text-28px text-24px leading-37px'>Hot game</h5>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-250px md:gap-6 lg:gap-10 font-saira'>
        <div className='bg-game-card rounded-16px backdrop-blur-lg pt-180px md:pt-100px lg:pt-180px pb-30px pl-30px pr-30px relative min-h-[500px] lg:min-h-[560px]'>
          <div className='absolute w-300px md:w-full -top-180px left-1/2 -translate-x-1/2 md:-top-150px xl:-top-250px'>
            <Image src={game3} width={894} height={894} layout='responsive' alt="#"></Image>
          </div>
         
            <h3 className='text-white text-24px md:text-28px lg:text-36px mb-4'>THETAN ARENA</h3>
            <h5 className='text-emerald-2 text-16px lg:text-24px mb-2'>Play to Earn</h5>
            <p className='text-white'>Challenge yourself with a wide variety of game modes:MOBA & Battle Royale, coming with monthly updates and attractive rewards.</p>
         
        </div>
        <div className='bg-game-card rounded-16px backdrop-blur-lg pt-180px md:pt-100px lg:pt-180px  pb-30px pl-30px pr-30px relative min-h-[500px] lg:min-h-[560px]'>
          <div className='absolute w-300px md:w-full -top-180px left-1/2 -translate-x-1/2 md:-top-150px xl:-top-250px'>
            <Image src={game2} width={894} height={894} layout='responsive' alt="#"></Image>
          </div>
         
            <h3 className='text-white text-24px md:text-28px lg:text-36px mb-4'>SPACE SIP</h3>
            <h5 className='text-emerald-2 text-16px lg:text-24px mb-2'>Play to Earn</h5>
            <p className='text-white'>Space Sip is built to allow player PLAY-to-EARN with an EASY-to-PLAY gameplay and still provides an addictive experience.</p>
         
        </div>
        <div className='bg-game-card rounded-16px backdrop-blur-lg pt-180px md:pt-100px lg:pt-180px pb-30px pl-30px pr-30px relative min-h-[500px] lg:min-h-[560px]'>
          <div className='absolute  w-300px md:w-full -top-180px left-1/2 -translate-x-1/2 md:-top-150px xl:-top-250px'>
            <Image src={game1} width={894} height={894} layout='responsive' alt="#"></Image>
          </div>
         
            <h3 className='text-white text-24px md:text-28px lg:text-36px mb-4'>AXIE INFINITY</h3>
            <h5 className='text-emerald-2 text-16px lg:text-24px mb-2'>Play to Earn</h5> 
            <p className='text-white'>Build up a collection and use them across an ever expanding universe of games! Axie Infinity uses cutting edge technology called Blockchain to reward players.</p>
         
        </div>
      </div>
    </div>
  )
}