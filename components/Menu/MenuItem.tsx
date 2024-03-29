import * as React from "react";
import {ReactElement, useCallback} from "react";

import {motion} from "framer-motion";
import {AppEmitter} from "../../services/emitter";
import Link from "next/link";
import {scrollToSection} from "utils/DOM";
import {useRouter} from "next/router";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: {stiffness: 1000, velocity: -100},
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: {stiffness: 1000},
    },
  },
};

export type MenuItemType = {
  color: string;
  src?: string;
  text: string | ReactElement;
  scrollTarget?: string; // CSS selector of target scroll
  onClick?: () => void;
  subMenu?: boolean | ReactElement;
};

export const MenuItem = (props: { item: MenuItemType }) => {
  const router = useRouter();
  const click = (src?: string) => {
    if (src == "") {
      router.push("/");
    }
    // else {
    //   if (props.item.scrollTarget) {
    //     router.push("/")
    //     setTimeout(() => {
    //       scrollToSection(props.item.scrollTarget ?? "", true, -90);
    //     }, 500);
    //   }
    // }
    // if(src == "") {
    //   setTimeout(() => {
    //     scrollToSection(props.item.scrollTarget ?? "", true, -90);
    //   }, 500);
    // }
    // if (!props.item.subMenu) {
    //   AppEmitter.emit("setMbMenuVisible", false);
    // }
  };

  return (
    <motion.li
      variants={variants}
      whileHover={{scale: 1.05}}
      // whileTap={{ scale: 0.95 }}
      //onClick={() => click(props.item.src)}
    >
      {
        props.item.src &&
          <Link href={props.item.src} passHref>
              <a target={"_blank"} rel="noopener noreferrer"><span>{props.item.text}</span></a>
          </Link>
      }
      {
        !props.item.src &&
          <a target="_blank" rel="noopener noreferrer"><span>{props.item.text}</span></a>
      }

    </motion.li>
  );
};
