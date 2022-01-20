import Image from './Image';
import Howework from 'assets/img/howwework.png';
type Props = {}
export default function HowWeWork(props: Props) {

  return ( 
      <div className="container text-white mt-200px">
          <h3 className='font-transformer text-white lg:text-72px text-32px leading-55px mb-60px'>How we work</h3>
          <Image src={Howework} alt='' width={1463} height={670} layout='responsive' priority></Image>
      </div>
  )
 }