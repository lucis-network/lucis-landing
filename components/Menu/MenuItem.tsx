import * as React from "react";
import {ReactElement} from "react";

import { motion } from "framer-motion";
import Logo from "../../assets/img/logo.png";
import GradientButton from "../Button/GradientButton";
import Image from "../Image";

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
}

export const MenuItem = (props: {item: MenuItemType}) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* <div className="icon-placeholder" style={style} /> */}
      <div className="text-placeholder font-sofia text-white text-24px leading-28px p-15px">
        {props.item.text}
      </div>
    </motion.li>
  );
};
