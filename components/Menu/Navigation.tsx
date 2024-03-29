import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem, MenuItemType } from "./MenuItem";
import GradientButton from "../Button/GradientButton";
import { useEffect, useState } from "react";

import { Modal, Button, Menu } from "antd";
import { AppEmitter } from "../../services/emitter";
import Link from "next/link";
import s from "./MenuMobile.module.sass";
import ButtonBorder from "../Button/buttonBorder/ButtonBorder";

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
      href: "/play-to-earn",
      title: "Lucis play-to-earn 2.0",
      disabled: false,
    },
    { id: 2, href: "/tournaments", title: "Lucis tournament platform", disabled: false },
    {
      id: 3,
      href: "/social-fi",
      title: "Lucis socialfi",
      disabled: false,
    },
    { id: 4, href: "/ranking", title: "Lucis ranking", disabled: false },
    {
      id: 5,
      href: "/raffle",
      title: "Lucis raffle",
      disabled: false,
    },
    {
      id: 6,
      href: "/scholarship",
      title: "Lucis scholarship",
      disabled: false,
    },
    { id: 7, href: "/marketplace", title: "Lucis marketplace", disabled: false },
];

export const Navigation = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSubMenu, setIsSubMenu] = useState(false);
  const { SubMenu } = Menu;

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showSubmenu = () => {
    setIsSubMenu(!isSubMenu);
  };
  const hideMenu = () => {
    AppEmitter.emit("setMbMenuVisible", false);
    setIsSubMenu(false);
  };
  const styleSub = isSubMenu == false ? 0 : 272;

  const menuItems: MenuItemType[] = [
    // {
    //   color: "#FF008C",
    //   text: "HOME",
    //   src: "#",
    //   scrollTarget: "#EcoSystem",
    // },
    {
      color: "#FF008C",
      text: "PLAYCORE",
      src: process.env.NEXT_PUBLIC_P2E_URL ?? "",
    },
    {
      color: "#FF008C",
      text: "ARENA",
      src: process.env.NEXT_PUBLIC_P2E_URL + "/arena" ?? "",
    },
    {
      color: "#FF008C",
      text: "INSIGHT",
      src: "https://insight.lucis.network/",
    },
    {
      color: "#FF008C",
      text: "RANKING",
      src: process.env.NEXT_PUBLIC_P2E_URL + "/ranking" ?? "",
    },
    {
      color: "#FF008C",
      text: <span className={s.default}><a>SCHORLARSHIP<span>Coming Soon</span></a></span>,
      //src: ""
    },
    {
      color: "#FF008C",
      text: <span className={s.default}><a>SOCIAL <span style={{left: 0}}>Coming Soon</span></a></span>,
      //src: ""
    },
  ];

  useEffect(() => {
    const subscription = AppEmitter.addListener(
      "setJoinUsVisible",
      (visible: boolean) => {
        setIsModalVisible(visible);
      }
    );
    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <div className={s.listMenuNavMobile}>
      <motion.ul className="nav-list" variants={variants}>
        {menuItems.map((i, idx) => (
          <MenuItem item={i} key={idx} />
        ))}
        <div className={s.line}></div>
        <div className={s.contactUs}>
          <ButtonBorder>
            <div className={s.btn} onClick={() => setIsModalVisible(true)}>
              CONTACT US
            </div>
          </ButtonBorder>

        </div>
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
          <p>
            We're mainly opening for Investors, media partners, game publishers.
          </p>
          <p>
            We also open to discuss with everyone who wanna become developer and
            ambassadors, or be a part of our team.
          </p>

          <p>
            Please get in touch with us via email: <b>partner@lucis.network</b>
          </p>
          <br />
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
            {`<your content here>`}
            <br />
          </div>
          <br />
          <p style={{ color: "#00c4ff" }}>
            Note: Lucis network will never dm you first.
          </p>
        </div>
        <div id="content_btn">
          <div className={s.contactUs}>
            <ButtonBorder>
              <div className={s.btnEmailUs}>
                <a href="mailto://partner@lucis.network">Email us</a>
                <img src="/assets/Banner/teleChat.svg" alt="" />
              </div>
            </ButtonBorder>
          </div>
        </div>
      </Modal>
    </div>
  );
};
