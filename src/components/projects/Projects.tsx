import { useScroll, useSpring, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import "./Projects.scss";

interface Items {
  id: number;
  title: string;
  img: string;
  desc: string;
}
const items: Items[] = [
  {
    id: 1,
    title: "MultasAb",
    img: "/images/multas.png",
    desc: "It is an app where you can manage fines, both as a user and agent. You can pay your fines online and apply fines easily in case of be an agent of the Digesett.",
  },
  {
    id: 2,
    title: "FiverrClone",
    img: "/images/fiverrClone.png",
    desc: "It is an app in which you can manage books of your choice by starting sessions and buying books and giving reviews of them.",
  },
  {
    id: 3,
    title: "Biblos",
    img: "/images/biblos.png",
    desc: "It is an app in which you can manage books of your choice by starting sessions and buying books and giving reviews of them.",
  },
  {
    id: 4,
    title: "ASNet",
    img: "/images/Social.png",
    desc: "It is a social network inspired by Facebook, seeking to replicate the features of it, whether sharing images or comments. Also being able to have friends, etc.",
  },
];

interface Props {
  title: string;
  desc: string;
  img: string;
}

const Single = ({ item }: { item: Props }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
            >
              View on github
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    duration: 1,
  });
  return (
    <div className="projects" ref={ref} id="projects">
      <div className="progressDescktop">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((e) => (
        <Single key={e.id} item={e} />
      ))}
    </div>
  );
};

export default Projects;
