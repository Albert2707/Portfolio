import { motion } from "framer-motion";
import "./Navbar.scss";
const Navbar = () => {
  const variants = {
    initial: { scale: 0, x: -50 },
    animate: {
      scale: 1,
      x: 0,

      transition: {
        duration: 0.3,
        type: "spring",
        damping: 25,
        stiffness: "400",
        staggerChildren: 0.2,
      },
    },
  };
  const linksVariants = {
    color: "rgb(244 63 94)",
    transition: {
      ease: "linear",
      type: "spring",
      duration: 0.2,
    },
  };
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <a href="#" className="linkDesktop text-[lightgray] font-medium" aria-label="Navigate to homepage">
            <img src="/icon.webp" className="w-9" alt="Navigate to homepage" />
          </a>
        </div>

        <div className="links">
          <motion.ul
            className=""
            variants={variants}
            initial="initial"
            animate="animate"
          >
            <li>

              <motion.a
                href="#aboutMe"
                variants={variants}
                whileHover={linksVariants}
              >
                About me
              </motion.a>
            </li>
            <li>

              <motion.a
                href="#projects"
                variants={variants}
                whileHover={linksVariants}
              >
                Projects
              </motion.a>
            </li>
            <li>

              <motion.a
                href="#skills"
                variants={variants}
                whileHover={linksVariants}
              >
                Skills
              </motion.a>
            </li>
            <li>

              <motion.a
                href="#contact"
                variants={variants}
                whileHover={linksVariants}
              >
                Contact
              </motion.a>
            </li>
          </motion.ul>
          <motion.div
            className="socials"
            variants={variants}
            initial="initial"
            animate="animate"
          >
            <motion.a
              href="https://www.linkedin.com/in/albert-joan-agramonte-suero-80b844247/"
              target="_blank"
              rel="noreferrer"
              className="socialLink"
              initial={{ y: 0 }}
              arial-label="linkedin"
              animate={{ y: 0 }}
              whileHover={{
                backgroundColor: "rgb(244 63 94)",
                y: -3,
              }}
              transition={{ type: "spring", duration: 0.2 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-linkedin"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M8 11l0 5"></path>
                <path d="M8 8l0 .01"></path>
                <path d="M12 16l0 -5"></path>
                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
              </svg>
            </motion.a>
            <motion.a
              href="https://github.com/Albert2707"
              target="_blank"
              className="socialLink"
              initial={{ y: 0 }}
              animate={{ y: 0 }}
              arial-label="github"
              whileHover={{
                backgroundColor: "rgb(244 63 94)",
                y: -3,
              }}
              transition={{ type: "spring", duration: 0.2 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-github"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
