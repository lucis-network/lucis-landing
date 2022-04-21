import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem, MenuItemType } from "./MenuItem";
import GradientButton from "../Button/GradientButton";
import { useEffect, useState } from "react";

import { Modal, Button, Menu } from "antd";
import { AppEmitter } from "../../services/emitter";
import Link from "next/link";
import s from './MenuMobile.module.sass'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const dataSubMenu = [
  {
    id: 1,
    text: 'Social-Fi network platform',
    href: '/social-fi',
    disabled: false
  },
  {
    id: 2,
    text: 'Tournaments',
    href: '/tournaments',
    disabled: false
  },
  {
    id: 3,
    text: 'Lucis Insight & Game Ranking system',
    href: '/insight',
    disabled: false
  },
  {
    id: 4,
    text: 'Lucis Media',
    href: '/media',
    disabled: false
  },
  {
    id: 5,
    text: 'Launchpad & Marketplace',
    href: '/marketplace',
    disabled: false
  },
  {
    id: 6,
    text: 'Gaming Guild',
    href: '/lucis-gaming-guild',
    disabled: false
  },
  {
    id: 7,
    text: 'Automation tool zone',
    href: '/',
    disabled: true
  },
  {
    id: 8,
    text: 'Streaming platform',
    href: '/',
    disabled: true
  },
]
export const Navigation = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSubMenu, setIsSubMenu] = useState(false);
  const { SubMenu } = Menu

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showSubmenu = () =>{
    setIsSubMenu(!isSubMenu)
  }
  const hideMenu = () =>{
    AppEmitter.emit("setMbMenuVisible", false)
    setIsSubMenu(false)
  }
  const styleSub = isSubMenu == false ? 0: 272
  
  const menuItems: MenuItemType[] = [
    {
      color: "#FF008C",
      text: "Tournaments",
      src: "/tournaments",
    },
    {
      color: "#FF008C",
      text: "Marketplace",
      src: "/marketplace"
    },
    {
      color: "#FF008C",
      text: "Insight",
      src: "/insight"
    },
    {
      color: "#FF008C",
      text: "Docs",
      src: "/docs"
    },
    {
      color: "#FF008C",
      text: (
        <div>
          <div onClick={showSubmenu}>Ecosystem</div>
          <ul style={{height: styleSub}} className={s.submenu}>
          {dataSubMenu.map((data:any) =>(
            <li className={`${data.disabled == true && s.disabled}`} key={data.id} onClick={hideMenu}><Link href={`${data.href}`}>{data.text}</Link></li>
          ))}
          </ul>
        </div>
        
      ),
      src: "",
      subMenu: ""
    },
    {
      color: "#FF008C",
      text: (
        <GradientButton
          onClick={() => {
            setIsModalVisible(true);
          }}
          type={1}
          className="text-white font-saira nw"
          style={{ whiteSpace: "nowrap",fontSize: "20px",lineHeight: '22px',padding: '10px 16px' }}
        >
          Join us
        </GradientButton>
      ),
      src:""
    },
  ];

  useEffect(() => {
    const subscription = AppEmitter.addListener('setJoinUsVisible', (visible: boolean) => {
      setIsModalVisible(visible)
    });
    return () => {
      subscription.remove();
    }
  }, [])

  return (
    <div>
      <motion.ul className="nav-list" variants={variants}>
        {menuItems.map((i, idx) => (
          <MenuItem item={i} key={idx} />
        ))}
      </motion.ul>

      <Modal
        title="Contact us"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <p>
            Feel free to discuss more with us, just leave your content here and
            we'll reach you soon.
          </p>
          <p>We're mainly opening for Investors, scholars.</p>
          <p>
            We also open to discuss with every who wanna become developer and
            ambassadors, or be a part of our team.
          </p>

          <p>
            Please send us the content in Telegram by clicking the below
            button.
          </p>
          <p>The content might follow this template:</p>

          <div
            style={{
              color: "#FFF",
              background: "rgba(63, 183, 219,0.5)",
              padding: "30px",
              borderRadius: "40px 40px 40px 0",
              fontSize: "smaller",
            }}
          >
            From: Alexander George
            <br />
            Proposal: Become an Investor
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
            quam id libero pulvinar accumsan at eu est. Nulla faucibus nisi eget
            mattis cursus.
            <br />
          </div>
          <br />
          <p style={{ color: "#00c4ff" }}>
            Note: Lucis network will never dm you first.
          </p>
        </div>
        <div id="content_btn">
          <div id="btn_Chat">
            <a
              href="https://t.me/lucis_network_application_form"
              target="_blank"
              rel="noreferrer"
            >
              Chat with us
            </a>
            <img src="/assets/Banner/teleChat.svg" alt="" />
          </div>
        </div>
      </Modal>
    </div>
  );
};
