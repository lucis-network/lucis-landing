import * as React from "react";
import {ReactElement, useCallback} from "react";

import { motion } from "framer-motion";
import Logo from "../../assets/img/logo.png";
import GradientButton from "../Button/GradientButton";
import Image from "../Image";
import {scrollToSection} from "../../utils/DOM";
import {AppEmitter} from "../../services/emitter";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export type MenuItemType = {
  color: string,
  text: string | ReactElement,
  scrollTarget?: string, // CSS selector of target scroll
}

export const MenuItem = (props: {item: MenuItemType}) => {
  const scrollAndCloseMenu = useCallback(() => {
    scrollToSection(props.item.scrollTarget ?? '', true, -90)
    AppEmitter.emit("setMbMenuVisible", false)
  }, [])

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={scrollAndCloseMenu}
    >
      {/* <div className="icon-placeholder" style={style} /> */}
      <div className="text-placeholder font-sofia text-white text-24px leading-28px p-15px">
        {props.item.text}
      </div>
    </motion.li>
  );
};
