import * as React from "react";
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

const data = [
  {
    color: "#FF008C",
    text: (
      <div className="nav-logo">
        <Image
          src={Logo}
          alt="logo"
          width={82}
          height={88}
          layout="responsive"
        ></Image>
      </div>
    ),
  },
  {
    color: "#FF008C",
    text: "Home",
  },
  {
    color: "#FF008C",
    text: "Features",
  },
  {
    color: "#FF008C",
    text: "Investors",
  },
  {
    color: "#FF008C",
    text: "Scholars",
  },
  {
    color: "#FF008C",
    text: "Roadmap",
  },
  {
    color: "#FF008C",
    text: (
      <GradientButton
        type={1}
        className="text-white font-sofia text-24px leading-28px"
      >
        JOIN US
      </GradientButton>
    ),
  },
];

export const MenuItem = ({ i }: { i: number }) => {
  const style = { border: `2px solid ${data[i].color}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* <div className="icon-placeholder" style={style} /> */}
      <div className="text-placeholder font-sofia text-white text-24px leading-28px p-15px">
        {" "}
        {data[i].text}
      </div>
    </motion.li>
  );
};
