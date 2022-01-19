import game1 from '../../assets/img/game/game1.png';
import Image from '../Image';
type Props = {}
export default function GameCard(props: Props) {
  return (
    <div className='w-1/3 bg-game-card rounded-16px border'>
        <div className='-translate-y-24'>
          <Image src={game1} width={894} height={753} layout='responsive' alt=""></Image>
        </div>
        <h5>Lorem ipsum dolor sit</h5>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid dignissimos voluptatum iusto inventore excepturi harum saepe minima similique veniam perspiciatis.</p>
    </div>
  )
}