import * as React from "react";
import { ReactElement, useCallback } from "react";

import { motion } from "framer-motion";
import { AppEmitter } from "../../services/emitter";
import Link from "next/link";
import { scrollToSection } from "utils/DOM";
import { useRouter } from "next/router";

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
  color: string;
  src: string;
  text: string | ReactElement;
  scrollTarget?: string; // CSS selector of target scroll
  onClick?: () => void;
  subMenu?: boolean | ReactElement;
};

export const MenuItem = (props: { item: MenuItemType }) => {
  const router = useRouter();
  const click = useCallback((src: string) => {
    if (src && src != "") {
      router.push(src);
    } else {
      if (props.item.scrollTarget) {
        router.push("/")
        setTimeout(() => {
          scrollToSection(props.item.scrollTarget ?? "", true, -90);
        }, 1000);
      }
    }
    if (!props.item.subMenu) {
      AppEmitter.emit("setMbMenuVisible", false);
    }
  }, []);

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.05 }}
      // whileTap={{ scale: 0.95 }}
      onClick={() => click(props.item.src)}
      className="text-placeholder font-saira text-white px-3 py-3"
      style={{ fontSize: "20px", lineHeight: "22px" }}
    >
      {props.item.text}
    </motion.li>
  );
};
