import Image from './Image';
import Logo from '../assets/img/logo.png';
import GradientButton from './Button/GradientButton';
import { useWindowSize } from '../hooks/useWindowSize';
import { MenuMobile } from './Menu/MenuMobile';

type Props = {
  handleMenuOpen: Function,
};
export default function Header(props: Props) {
  const [width, height] = useWindowSize();
  if (width > 1024) {
    return (
      <div className='bg-nav'>
        <div className="container py-20px flex justify-between items-center relative z-10">
          <div className="logo w-80px">
            <Image src={Logo} alt='logo'></Image>
          </div>
          <nav>
            <ul className="flex justify-between items-center">
              <li><a href="#" className='text-white text-24px leading-28px p-15px'>Home</a></li>
              <li><a href="#" className='text-white text-24px leading-28px p-15px'>Features</a></li>
              <li><a href="#" className='text-white text-24px leading-28px p-15px'>Investors</a></li>
              <li><a href="#" className='text-white text-24px leading-28px p-15px'>Scholars</a></li>
              <li><a href="#" className='text-white text-24px leading-28px p-15px'>Roadmap</a></li>
              <li> <GradientButton type={1} className="text-white text-24px leading-28px px-40px py-15px ml-15px">JOIN US</GradientButton> </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  } else {
    return (
        <MenuMobile />
    )
  }
}
