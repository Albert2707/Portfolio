import { motion, useInView } from "framer-motion";
import "./Skills.scss";
import { useRef } from "react";
const Skills = () => {
  const variants = {
    notInView: { scale: 0 },
    inView: {
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: "400",
        damping: 20,
        staggerChildren: 0.2,
      },
    },
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-150px" });
  return (
    <motion.div
      className="skills"
      ref={ref}
      variants={variants}
      initial="notInView"
      animate={isInView ? "inView" : "notInView"}
    >
      <div className="container">
        <div className="wrapper">
          <motion.div className="top" variants={variants}>
            <motion.div className="box" variants={variants}>
              <div className="items">
                <img
                  src="https://www.svgrepo.com/show/353925/javascript.svg"
                  alt=""
                />

                <img
                  src="https://www.svgrepo.com/show/374146/typescript-official.svg"
                  alt=""
                />
                <img
                  src="https://www.svgrepo.com/show/354310/sass.svg"
                  alt=""
                />
                <img
                  src="https://www.svgrepo.com/show/355190/reactjs.svg"
                  alt=""
                />
                <img
                  src="https://www.svgrepo.com/show/354431/tailwindcss-icon.svg"
                  alt=""
                />
                <img
                  src="https://www.svgrepo.com/show/452228/html-5.svg"
                  alt=""
                />
                <img
                  src="https://www.svgrepo.com/show/452185/css-3.svg"
                  alt=""
                />
                <img
                  src="https://www.svgrepo.com/show/354521/vitejs.svg"
                  alt=""
                />
                <img
                  src="https://www.svgrepo.com/show/354522/visual-studio-code.svg"
                  alt=""
                />
                <img
                  src="https://www.svgrepo.com/show/373588/eslint2.svg"
                  alt=""
                />
              </div>
            </motion.div>
            <motion.div className="box" variants={variants}>
              <div className="items">
                <img
                  src="https://www.svgrepo.com/show/354119/nodejs-icon.svg"
                  alt=""
                />

                <img
                  src="https://www.svgrepo.com/show/355133/mysql.svg"
                  alt=""
                />
                <img
                  src="https://www.svgrepo.com/show/452184/csharp.svg"
                  alt=""
                />
                <img
                  src="https://www.svgrepo.com/show/373712/json.svg"
                  alt=""
                />
                <img
                  src="https://www.svgrepo.com/show/354520/visual-studio.svg"
                  alt=""
                />
              </div>
            </motion.div>
            <motion.div className="box" variants={variants}>
              <div className="items">
                <img
                  src="https://www.svgrepo.com/show/353935/jira.svg"
                  alt=""
                />

                <img
                  src="https://www.svgrepo.com/show/448221/docker.svg"
                  alt=""
                />
                <img src="https://www.svgrepo.com/show/452210/git.svg" alt="" />
                <img
                  src="https://www.svgrepo.com/show/448226/gitlab.svg"
                  alt=""
                />
                <img src="/icons/Github.svg" alt="" />
                <img
                  src="https://www.svgrepo.com/show/354202/postman-icon.svg"
                  alt=""
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
