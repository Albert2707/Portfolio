import { useScroll, useSpring, motion } from "framer-motion";
import "./ProgressBar.scss";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 50,
    restDelta: 0.001,
  });
  return <motion.div style={{ scaleX }} className="progress"/>;
};

export default ProgressBar;
