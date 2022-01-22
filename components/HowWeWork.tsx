import Image from './Image';
import s from './HowWeWork.module.sass'
import Howework from 'assets/img/howwework.png';
import Title from 'components/Home/TitleSection/TitleName';
type Props = {}
export default function HowWeWork(props: Props) {

  return ( 
      <div className={`container text-white mt-140px ${s.container}`}>
          <Title titleName='HOW WE WORK'></Title>
            <div className="mt-16">
                <Image src={Howework} alt='' width={1463} height={670} layout='responsive' priority></Image>
            </div>
      </div>
  )
 }