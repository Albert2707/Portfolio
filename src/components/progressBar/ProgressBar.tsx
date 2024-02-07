import { useScroll, useSpring, motion } from "framer-motion";
import { useRef } from "react";
import "./ProgressBar.scss";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001,
  });
  return <motion.div style={{ scaleX }} className="progress"/>;
};

export default ProgressBar;
