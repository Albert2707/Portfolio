import { useRef } from "react";
import "./Projects.scss";
import { motion, useScroll, useTransform } from "framer-motion";
const Projects = () => {
  const biblosRef = useRef<HTMLDivElement>(null);
  const multasRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: biblosRef,
    offset: ["0 1", "1 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <div className="projects">
      <div className="container">
        <div className="wrapper">
          <motion.div
            className="first"
            style={{ scale: scaleProgress, opacity: opacityProgress }}
            ref={biblosRef}
          >
            <img src="/images/biblos.png" alt="" className="first-img" />
          </motion.div>
          <div className="last">
            <img src="/images/fiverrClone.png" alt="" className="last-img" />
            <img src="/images/multas.png" alt="" className="last-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
