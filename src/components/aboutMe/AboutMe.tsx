import { motion, useScroll, useTransform } from "framer-motion";
import TypeWriter from "../typeWriter/TypeWriter";
import "./AboutMe.scss";
import { useRef } from "react";
import { ShineBorder } from "../magicui/shine-border";
const AboutMe = () => {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  return (
    <div className="about">
      <motion.div className="container" ref={imageRef} style={{ y }}>
        <div className="left">
          <TypeWriter text="Hi, i'm Albert Joan" speed={50} />
          <h2 className="career"> Software Developer</h2>
          <motion.p
            className="summary"
            initial={{ opacity: 0, x: -5 }}
            transition={{ type: "tween", duration: 0.3, delay: 0.5 }}
            animate={{ opacity: 1, x: 0 }}
          >
            I’m passionate about programming. As a software developer, I like to
            innovate and work as a team. In my experience, colleagues are the
            most important in the working environment.
          </motion.p>
          <div className="resume">
            <motion.a
              href="#contact"
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 200,
                duration: 0.1,
              }}
              whileTap={{ scale: 0.9 }}
              className="btnContact"
            >
              Contact me
            </motion.a>
            <ShineBorder
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              className="overflow-hidden rounded-md btnResume"
            >
              <a
                href="/resume/Resume.pdf"
                download={true}
              >
                Resume
              </a>
            </ShineBorder>
          </div>
        </div>
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          // transition={{ duration: 0.1 }}
          className="rigth"
        >
          <img className="image" src="/images/home-office.svg" alt="" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
