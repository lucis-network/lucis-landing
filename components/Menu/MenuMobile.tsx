import * as React from "react";
import s from './MenuMobile.module.sass'
import { useRef, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./useDimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import Image from '../Image';
import Logo from '../../assets/img/logo.png';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(1px at 300px 0px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const nav = {
  open: {
    display: 'block',
    transition: {
      staggerChildren: 0.17,
      delayChildren: 0.2,
    }
  },
  closed: {
    display: "none",
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren"
    }
  }
}
export const MenuMobile = (props: any) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("nav-open");
    } else {
      document.body.classList.remove("nav-open");
    }
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        variants={nav}
        className="mobile-nav"
      >
        <motion.div className="background" variants={sidebar}>
          <div className="bg-glass w-full h-full opacity-[0.15]"></div>
        </motion.div>
        <Navigation />
      </motion.nav>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"} className="fixed top-0 left-0 right-0 z-[101] bg-nav backdrop-blur-sm">
          <div className={`container flex justify-between items-center py-4 ${s.container}`}>
            <div className="w-40px">
              <Image src={Logo} width={82} height={86} alt="logo" layout="responsive"></Image>
            </div>
              <MenuToggle toggle={() => toggleOpen()} />
          </div>
      </motion.div>
      <div className="overlay" onClick={() => toggleOpen()}></div>
    </>
  );
};
