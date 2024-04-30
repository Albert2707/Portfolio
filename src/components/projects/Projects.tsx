import { useRef } from "react";
import "./Projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const Projects = () => {
  const biblosRef = useRef<HTMLImageElement>(null);
  const multasRef = useRef<HTMLImageElement>(null);
  const fiverrRef = useRef<HTMLImageElement>(null);
  const energyRef = useRef<HTMLImageElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const infoMotion = {
    rest: { opacity: 0, ease: "easeOut", duration: 0.2, type: "tween" },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeIn",
        delayChildren: 0.1,
        staggerChildren: 0.2,
      },
    },
  };
  const { scrollYProgress } = useScroll({
    target: biblosRef,
    /* [0 1] when the end of the viewport touch
    the top of the target the animation will be star*/

    /* [1 1] when the end of the viewport arrive at then
   of the target te animation will be finished */
    offset: ["0.3 1", "1 1"],
  });

  const { scrollYProgress: otro } = useScroll({
    target: multasRef,
    offset: ["0.3 1", "1 1"],
  });

  const { scrollYProgress: fiverr } = useScroll({
    target: fiverrRef,
    offset: ["0.3 1", "1 1"],
  });

  const { scrollYProgress: energy } = useScroll({
    target: energyRef,
    offset: ["0.3 1", "1 1"],
  });

  const { scrollYProgress: line } = useScroll({
    target: biblosRef,
    offset: ["0 1", "1 1"],
  });

  const { scrollYProgress: multasLine } = useScroll({
    target: multasRef,
    offset: ["0 1", "1 1"],
  });

  const { scrollYProgress: fiverrline } = useScroll({
    target: fiverrRef,
    offset: ["0 1", "1 1"],
  });

  const { scrollYProgress: energyLine } = useScroll({
    target: energyRef,
    offset: ["0 1", "1 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  const scaleProgress1 = useTransform(otro, [0, 1], [0.6, 1]);
  const opacityProgress1 = useTransform(otro, [0, 1], [0.4, 1]);

  const scaleProgress2 = useTransform(fiverr, [0, 1], [0.6, 1]);
  const opacityProgress2 = useTransform(fiverr, [0, 1], [0.4, 1]);

  const scaleProgress4 = useTransform(energy, [0, 1], [0.6, 1]);
  const opacityProgress4 = useTransform(energy, [0, 1], [0.4, 1]);

  const { scrollYProgress: verticalLine } = useScroll({ target: lineRef, offset: ["0 1", "1.1 1"] });
  const scaleY = useSpring(verticalLine, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });
  //line-items
  const y = useTransform(line, [0, 1], [0, 270]);
  const opacity = useTransform(line, [0, 1], [0, 1]);
  const y1 = useTransform(multasLine, [0, 1], [270, 920]);
  const opacity1 = useTransform(multasLine, [0, 1], [0, 1]);
  const y2 = useTransform(fiverrline, [0, 1], [920, 1550]);
  const opacity2 = useTransform(fiverrline, [0, 1], [0, 1]);
  const y4 = useTransform(energyLine, [0, 1], [1550, 2200]);
  const opacity4 = useTransform(energyLine, [0, 1], [0, 1]);
  return (
    <div className="projectsContainer">
      <div className="line-wrapper">
        <div className="line"></div>
        <motion.div
          className="line2"
          ref={lineRef}
          style={{ scaleY }}
        ></motion.div>
        <motion.div
          className="line-item"
          ref={biblosRef}
          style={{ y, opacity }}
        >
          Biblos
        </motion.div>
        <motion.div
          className="line-item"
          ref={multasRef}
          style={{ y: y1, opacity: opacity1 }}
        >
          Multasab
        </motion.div>
        <motion.div
          className="line-item"
          ref={fiverrRef}
          style={{ y: y2, opacity: opacity2 }}
        >
          FiverrClone
        </motion.div>

        <motion.div
          className="line-item"
          ref={energyRef}
          style={{ y: y4, opacity: opacity4 }}
        >
          CleanEnergy
        </motion.div>
      </div>
      <div className="wrapper">
        <motion.div
          className="item"
          initial="rest"
          whileHover="hover"
          animate="rest"
          ref={biblosRef}
          style={{ scale: scaleProgress, opacity: opacityProgress }}
        >
          <img src="/images/biblos.png" loading="lazy" />
          <motion.div variants={infoMotion} className="hover-info">
            <motion.button
              variants={infoMotion}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", duration: 0.2 }}
            >
              View on GitHub
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
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ scale: scaleProgress1, opacity: opacityProgress1 }}
          ref={multasRef}
          className="item"
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          <img src="/images/multas.png" loading="lazy" />
          <motion.div variants={infoMotion} className="hover-info">
            <motion.button
              variants={infoMotion}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", duration: 0.2 }}
            >
              View on GitHub
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
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="item"
          initial="rest"
          whileHover="hover"
          animate="rest"
          style={{ scale: scaleProgress2, opacity: opacityProgress2 }}
          ref={fiverrRef}
        >
          <img src="/images/fiverrClone.png" loading="lazy" />
          <motion.div variants={infoMotion} className="hover-info">
            <motion.button
              variants={infoMotion}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", duration: 0.2 }}
            >
              View on GitHub
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
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="item"
          initial="rest"
          whileHover="hover"
          animate="rest"
          style={{ scale: scaleProgress4, opacity: opacityProgress4 }}
          ref={energyRef}
        >
          <img src="/images/energy.png" alt="Social" loading="lazy" />
          <motion.div variants={infoMotion} className="hover-info">
            <motion.a
              variants={infoMotion}
              href="https://energy-project-seven.vercel.app/" target="_blank"
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", duration: 0.2 }}
            >
              View
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
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
