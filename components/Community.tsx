import ic_game_community from '../assets/icon/icon_game_community.svg';
import Image from './Image';
import game1 from '../assets/img/game/game1.png';
import game2 from '../assets/img/game/game2.png';
import game3 from '../assets/img/game/game3.png';
import CommunityCard from './Card/CommunityCard';
type Props = {}
export default function Community(props: Props) {
  const gameCommunityData = [
    {
      image: game1,
      title: 'THETAN ARENA',
      genre: 'Play to Earn',
      content: 'Challenge yourself with a wide variety of game modes:MOBA & Battle Royale, coming with monthly updates and attractive rewards.'
    },
    {
      image: game2,
      title: 'SPACE SIP',
      genre: 'Play to Earn',
      content: 'Space Sip is built to allow player PLAY-to-EARN with an EASY-to-PLAY gameplay and still provides an addictive experience.'
    },
    {
      image: game3,
      title: 'AXIE INFINITY',
      genre: 'Play to Earn',
      content: 'Build up a collection and use them across an ever expanding universe of games! Axie Infinity uses cutting edge technology called Blockchain to reward players.'
    },
  ]

  return (
    <div className="container">
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-transformer text-white lg:text-72px text-32px leading-55px lg:w-1/2">Gaming community and partners</h3>
      </div>
      <div className='flex items-center mb-250px'>
        <div className='w-16px md:w-32px mr-4'>
          <Image src={ic_game_community} width={32} height={38} alt='' layout='responsive'></Image>
        </div>
        <h5 className='text-emerald lg:text-32px md:text-28px text-24px leading-37px'>Hot game</h5>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-250px md:gap-6 lg:gap-10 font-saira'>
        {
          gameCommunityData.map((item, index) => 
            (
              <CommunityCard image ={item.image} title={item.title} genre={item.genre} content={item.content} key={index} ></CommunityCard>
            )
          )
        }
      </div>
    </div>
  )
}