// import "./button_3d.css";
import { Suspense, useState } from "react";
import { motion, MotionConfig, useMotionValue } from "framer-motion";
import { Shapes } from "./Shapes";
import { transition } from "./settings";
import useMeasure from "react-use-measure";
import styles from "./button_3d.css";

export default function Button3D({ title }: { title: string }) {
  const [ref, bounds] = useMeasure({ scroll: false });
  const [isHover, setIsHover] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div>
      <MotionConfig transition={transition}>
        <motion.button
          ref={ref}
          initial={false}
          animate={isHover ? "hover" : "rest"}
          whileTap="press"
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.5 },
            press: { scale: 1.4 },
          }}
          onHoverStart={() => {
            resetMousePosition();
            setIsHover(true);
          }}
          onHoverEnd={() => {
            resetMousePosition();
            setIsHover(false);
          }}
          onTapStart={() => setIsPress(true)}
          onTap={() => setIsPress(false)}
          onTapCancel={() => setIsPress(false)}
          onPointerMove={(e) => {
            mouseX.set(e.clientX - bounds.x - bounds.width / 2);
            mouseY.set(e.clientY - bounds.y - bounds.height / 2);
          }}
        >
          <motion.div
            className={styles.shapes}
            // style={{
            //   position: "absolute",
            //   top: "-1px",
            //   left: "-1px",
            //   right: "-1px",
            //   bottom: "-1px",
            //   borderRadius: "60px",
            //   background: "linear-gradient(99.92deg, #cd28e8 0%, #0bebd6 100%)",
            // }}
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 1 },
            }}
          >
            <div className="pink blush" />
            <div className="blue blush" />
            <div className="container">
              <Shapes
                isHover={isHover}
                isPress={isPress}
                mouseX={mouseX}
                mouseY={mouseY}
              />
            </div>
          </motion.div>
          <motion.div
            variants={{ hover: { scale: 1 }, press: { scale: 1.1 } }}
            // className="label"
            style={{
              width: "180px",
              padding: "20px 0",
              transform: "translateZ(0)",
              fontWeight: "700",
              zIndex: "1",
            }}
          >
            {title}
          </motion.div>
        </motion.button>
      </MotionConfig>
    </div>
  );
}
