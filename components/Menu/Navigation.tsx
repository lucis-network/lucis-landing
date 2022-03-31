import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem, MenuItemType } from "./MenuItem";
import GradientButton from "../Button/GradientButton";
import { useEffect, useState } from "react";

import { Modal, Button } from "antd";
import { AppEmitter } from "../../services/emitter";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
export const Navigation = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const menuItems: MenuItemType[] = [
    {
      color: "#FF008C",
      text: "SocialFi",
      src: "/social-fi"
    },
    {
      color: "#FF008C",
      text: "Guid",
      src: "/lucis-gaming-guild"
    },
    {
      color: "#FF008C",
      text: "Marketplace",
      src: "/launchpad"
    },
    {
      color: "#FF008C",
      text: "Insight",
      src: "/ranking"
    },
    {
      color: "#FF008C",
      text: "Docs",
      src: "/docs"
    },
    {
      color: "#FF008C",
      text: "Docs",
      src: "/docs",
      subMenu: (
        <h1>sub menu</h1>
      )
    },
    {
      color: "#FF008C",
      text: (
        <GradientButton
          onClick={() => {
            setIsModalVisible(true);
          }}
          type={1}
          className="text-white font-saira text-24px leading-28px nw"
          style={{ whiteSpace: "nowrap" }}
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
