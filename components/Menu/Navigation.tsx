import * as React from "react";
import { motion } from "framer-motion";
import {MenuItem, MenuItemType} from "./MenuItem";
import GradientButton from "../Button/GradientButton";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
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
        type={1}
        className="text-white font-sofia text-24px leading-28px nw"
        style={{whiteSpace: 'nowrap'}}
      >
        Join us
      </GradientButton>
    ),
    scrollTarget: "#Medias",
  },
];

export const Navigation = () => (
  <motion.ul className="nav-list" variants={variants}>
    {menuItems.map((i, idx) => (
      <MenuItem item={i} key={idx} />
    ))}
  </motion.ul>
);

