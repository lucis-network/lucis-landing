import Image from './Image';
import Link from 'next/link';
import s from './Header.module.sass'
import Logo from '../assets/img/logo_hoz@2x_2.png';
import GradientButton from './Button/GradientButton';
import { useWindowSize } from '../hooks/useWindowSize';
import { MenuMobile } from './Menu/MenuMobile';
import { useCallback, useEffect, useRef, useState } from "react";
import {scrollToSection} from "../utils/DOM";

import { Modal, Button } from 'antd';
import { AppEmitter } from "../services/emitter";
import SubMenu from './Submenu';
type Props = {
  handleMenuOpen: Function,
};
export default function Header(props: Props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSubMenu, setIsSubMenu] = useState(false);

  const showSubMenu = isSubMenu ? s.isSubmenu : s.hideSubmenu

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

  const handleMouseOver = () =>{
    setIsSubMenu(true)
  }
  const handleMouseLeave = () => {
    setIsSubMenu(false)
  }

  useEffect(() => {
    const subscription = AppEmitter.addListener('setJoinUsVisible', (visible: boolean) => {
      setIsModalVisible(visible)
    });
    return () => {
      subscription.remove();
    }
  }, [])
  

  const datas = [
    {id: 1,href:'/social-fi', title: 'Social-Fi network platform',disabled: false},
    {id: 2,href:'/tournaments', title: 'Tournaments',disabled: false},
    {id: 3,href:'/ranking', title: 'Lucis Insight & Game Ranking system',disabled: false},
    {id: 4,href:'/media', title: 'Lucis Media',disabled: false},
    {id: 5,href:'/launchpad', title: 'Launchpad & Marketplace',disabled: false},
    {id: 6,href:'/lucis-gaming-guild', title: 'Gaming Guild',disabled: false},
    {id: 7,href:'/ranking', title: 'Automation tool zone',disabled: true},
    {id: 8,href:'/ranking', title: 'Streaming platform',disabled: true},
  ]

  if (width > 1024) {
    return (
      <div className={`${s.pcMenu} bg-nav`}>
        <div className="container py-20px flex justify-between items-center relative z-10`">
          <div className={s.logo}>
            <Link href="/">
              <Image src={Logo} alt='logo' priority />
            </Link>
          </div>
          <nav className={s.menu}>
            <ul className="flex justify-between items-center m-0">
              <li><Link href="/social-fi">SocialFi</Link></li>
              <li><Link href="/lucis-gaming-guild">Guid</Link></li>
              <li><Link href="/launchpad">Marketplace</Link></li>
              <li><Link href="/ranking">Insight</Link></li>
              <li><Link href="/docs">Docs</Link></li>

              <li className={s.menuItem} 
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
              >
                <img className={s.ic_submenu} onClick={()=>{setIsSubMenu(!isSubMenu)}} src="/assets/header/ic_submenu.svg" alt="" />
                <div className={`${s.subMenu} ${showSubMenu}`}>
                  <div className={s.contentSubmenu}>
                    <img src="/assets/header/ic_item_sub_menu.svg" alt="" />
                      <SubMenu onClick={()=>{setIsSubMenu(false)}} datas={datas} />
                  </div>
                </div>
              </li>
              <li> <GradientButton onClick={showModal} type={1} className="text-white text-24px leading-28px px-40px py-15px ml-15px" style={{whiteSpace: 'nowrap',fontWeight: '600'}}>JOIN US</GradientButton> </li>
            </ul>
          </nav>


          <Modal title="Contact us" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <div>          
              <p>Feel free to discuss more with us, just leave your content here and we'll reach you soon.</p>
              <p>We're mainly opening for Investors, scholars.</p>
              <p>We also open to discuss with every who wanna become developer and ambassadors, or be a part of our team.</p>
              
              <p>Please send us the content in Telegram by clicking the below button.</p>
              <p>The content might follow this template:</p>
              
              <div 
              style={{
                color:'#FFF',
                background: 'rgba(63, 183, 219,0.5)',
                padding: '30px',
                borderRadius: '40px 40px 40px 0',
                fontSize: 'smaller'
              }}
              >
                From: Alexander George<br/>
                Proposal: Become an Investor<br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non quam id libero pulvinar accumsan at eu est. Nulla faucibus nisi eget mattis cursus.<br/>
              </div>
              <br/>
              <p style={{color:'#00c4ff'}}>Note: Lucis network will never dm you first.</p>
            </div>
            <div id="content_btn">
              <div id="btn_Chat">
                <a href="https://t.me/lucis_network_application_form" target="_blank" rel="noreferrer">Chat with us</a>
                <img src="/assets/Banner/teleChat.svg" alt="" />
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
