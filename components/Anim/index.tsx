import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
    children: any,
    variants?: any
}
export default function AnimWhenVisible(props: Props) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    // console.log('inView: ', inView)
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={props.variants ?? {
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.8 },
      }}
    >
      {props.children}
    </motion.div>
  );
}
