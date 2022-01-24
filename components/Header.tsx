import Image from './Image';
import s from './Header.module.sass'
import Logo from '../assets/img/logo_hoz@2x_2.png';
import GradientButton from './Button/GradientButton';
import { useWindowSize } from '../hooks/useWindowSize';
import { MenuMobile } from './Menu/MenuMobile';
import {useCallback, useState} from "react";
import {scrollToSection} from "../utils/DOM";

import { Modal, Button } from 'antd';
type Props = {
  handleMenuOpen: Function,
};
export default function Header(props: Props) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const [width, height] = useWindowSize();

  const scrollAndCloseMenu = useCallback((selector: string) => {
    scrollToSection(selector ?? '', true, -90)
  }, [])

  if (width > 1024) {
    return (
      <div className={`${s.pcMenu} bg-nav`}>
        <div className={`container py-20px flex justify-between items-center relative z-10 ${s.container}`}>
          <div className={s.logo}>
            <Image src={Logo} alt='logo' />
          </div>
          <nav>
            <ul className="flex justify-between items-center m-0">
              {/*<li><a href="#" className='text-white text-24px leading-28px p-15px'>Home</a></li>*/}
              <li><a href="#" onClick={() => scrollAndCloseMenu('#EcoSystem')} className='text-white text-24px leading-28px p-15px'>Ecosystem</a></li>
              <li><a href="#" onClick={() => scrollAndCloseMenu('#Investors')} className='text-white text-24px leading-28px p-15px'>Investors</a></li>
              <li><a href="#" onClick={() => scrollAndCloseMenu('#Scholars')} className='text-white text-24px leading-28px p-15px'>Scholars</a></li>
              <li><a href="#" onClick={() => scrollAndCloseMenu('#Marketplace')} className='text-white text-24px leading-28px p-15px'>Marketplace</a></li>
              {/*<li><a href="#" className='text-white text-24px leading-28px p-15px'>Roadmap</a></li>*/}
              <li> <GradientButton onClick={showModal} type={1} className="text-white text-24px leading-28px px-40px py-15px ml-15px" style={{whiteSpace: 'nowrap'}}>JOIN US</GradientButton> </li>
            </ul>
          </nav>


          <Modal title="Contact us" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <p>Some contents...</p>
            <div id="content_btn">
              <div id="btn_Chat">
                <a href="https://t.me/sankeonft" target="_blank" rel="noreferrer">Chat with us</a>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    );
  } else {
    return (
        <MenuMobile />
    )
  }
}
