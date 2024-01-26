import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import "./ArrowDown.scss";
const ArrowDown = () => {
  const arrow = {
    initial: {
      y: 0,
      opacity: 0,
    },
    animate: {
      y: 10,
      opacity: 1,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };
  const refArrow = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refArrow,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  return (
    <motion.div className="downArrow" ref={refArrow} style={{ y }}>
      <motion.span variants={arrow} initial="initial" animate="animate">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
          />
        </svg>
      </motion.span>
    </motion.div>
  );
};

export default ArrowDown;
