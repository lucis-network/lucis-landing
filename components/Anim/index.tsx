import { motion, Transition, useAnimation, Variants } from "framer-motion";
import { useScrollDirection } from "hooks/useScroll";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  children: any;
  variants?: Variants;
  transition?: Transition;
  enable?: boolean;
}
export default function AnimWhenVisible(props: Props) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const isScrollDown = useScrollDirection();

  useEffect(() => {
    if (props.enable === false) {
      return;
    }
    if (inView) {
      controls.start("visible");
    } else if (!isScrollDown) {
      controls.start("hidden");
    }
  }, [controls, inView, isScrollDown, props.enable]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={props.enable === false ? "visible" : "hidden"}
      viewport={{ once: true }}
      transition={props.transition ?? { duration: 0.6 }}
      variants={
        props.variants ?? {
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 20 },
        }
      }
    >
      {props.children}
    </motion.div>
  );
}
