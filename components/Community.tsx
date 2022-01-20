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
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center">
        <h3 className="font-transformer text-white text-48px leading-55px">Gaming community and partners</h3>
        <div className="flex items-center">
          <Image src={ic_left} alt=''></Image>
        </div>
      </div>
      <div className='flex items-center'>
        <Image src={ic_game_community} alt=''></Image>
        <h5 className='text-emerald text-32px leading-37px'>Hot game</h5>
      </div>
      <div className='grid grid-cols-3 gap-10'>
        <div className='bg-game-card rounded-16px backdrop-blur-lg p-5 text-center'>
          <div className='-translate-y-40'>
            <Image src={game1} width={894} height={894} layout='responsive' alt="#"></Image>
          </div>
          <h5 className='text-white'>Lorem ipsum dolor sit</h5>
          <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid dignissimos voluptatum iusto inventore excepturi harum saepe minima similique veniam perspiciatis.</p>
        </div>
        <div className='bg-game-card rounded-16px backdrop-blur-lg p-5 text-center'>
          <div className='-translate-y-40'>
            <Image src={game2} width={894} height={894} layout='responsive' alt="#"></Image>
          </div>
          <h5 className='text-white'>Lorem ipsum dolor sit</h5>
          <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid dignissimos voluptatum iusto inventore excepturi harum saepe minima similique veniam perspiciatis.</p>
        </div>
        <div className='bg-game-card rounded-16px backdrop-blur-lg p-5 text-center'>
          <div className='-translate-y-40'>
            <Image src={game3} width={894} height={894} layout='responsive' alt="#"></Image>
          </div>
          <h5 className='text-white'>Lorem ipsum dolor sit</h5>
          <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid dignissimos voluptatum iusto inventore excepturi harum saepe minima similique veniam perspiciatis.</p>
        </div>
      </div>
    </div>
  )
}