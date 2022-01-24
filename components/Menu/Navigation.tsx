import * as React from "react";
import { motion } from "framer-motion";
import {MenuItem, MenuItemType} from "./MenuItem";
import GradientButton from "../Button/GradientButton";
import { useState } from "react";

import { Modal, Button } from 'antd';

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
  // {
  //   color: "#FF008C",
  //   text: "Home",
  // },
  {
    color: "#FF008C",
    text: "Ecosystem",
    scrollTarget: "#EcoSystem",
  },
  {
    color: "#FF008C",
    text: "Investors",
    scrollTarget: "#Investors",
  },
  {
    color: "#FF008C",
    text: "Scholars",
    scrollTarget: "#Scholars",
  },
  {
    color: "#FF008C",
    text: "Marketplace",
    scrollTarget: "#Marketplace",
  },
  {
    color: "#FF008C",
    text: (
      <GradientButton
        onClick={() =>{setIsModalVisible(true)}}
        type={1}
        className="text-white font-sofia text-24px leading-28px nw"
        style={{whiteSpace: 'nowrap'}}
      >
        Join us
      </GradientButton>
    ),
    scrollTarget: null,
  },
];

  return (
    <div>
      <motion.ul className="nav-list" variants={variants}>
        {menuItems.map((i, idx) => (
          <MenuItem item={i} key={idx} />
        ))}
    
      </motion.ul>

      <Modal title="Contact us" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <p>Some contents...</p>
            <div id="content_btn">
              <div id="btn_Chat">
                <a href="https://t.me/sankeonft" target="_blank" rel="noreferrer">Chat with us</a>
              </div>
            </div>
          </Modal>

    </div>
    
  );
}

