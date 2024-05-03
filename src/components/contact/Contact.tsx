import { FormEvent, useRef, useState } from "react";
import "./Contact.scss";
import { motion, useInView } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from 'usehooks-ts'

const Contact = () => {
  const variants = {
    inview: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 400,
        duration: 0.3,
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },

    notInview: {
      y: -50,
      opacity: 0,
    },
  };
  const [show, setShow] = useState<boolean>(false);
  const ref = useRef(null);
  const { width, height } = useWindowSize();
  const isInView = useInView(ref, { margin: "-50px" });
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message sent");
    setShow(true)
  };
  return (
    <div className="contact" ref={ref}>
      <div className="pruebas">
        <Confetti width={width} height={height} recycle={false} run={show} />
      </div>

      <div className="container">
        <div className="top">
          <motion.div
            className="left"
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{
              type: "spring",
              damping: 15,
              stiffness: 400,
              duration: 0.3,
            }}
          >
            <img src="/images/message.svg" className="contactImage" alt="" loading="lazy" />
          </motion.div>
          <div className="right">
            <h1>Email me</h1>
            <form action="" className="form" onSubmit={handleSubmit}>
              <input type="Email" placeholder="Email" />
              <input type="text" placeholder="Subject" />
              <textarea
                name=""
                placeholder="Message "
                id=""
                cols={30}
                rows={8}
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                send
              </motion.button>
            </form>
          </div>
        </div>
        <motion.div
          className="bottom"
          initial="notInview"
          animate={isInView ? "inview" : "notInview"}
        >
          <motion.div variants={variants}>
            <motion.span variants={variants} className="line"></motion.span>
            <motion.span variants={variants} className="middle">
              Or
            </motion.span>
            <motion.span variants={variants} className="line"></motion.span>
          </motion.div>
          <motion.ul variants={variants}>
            <motion.li
              initial={{ y: 0, scale: 1 }}
              whileHover={{ y: -3, scale: 1.1 }}
            >
              <a
                href="https://wa.me/qr/INMAKWH4JNG6L1"
                className=""
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  style={{
                    fill: "currentColor",
                    color: "rgb(74 222 128)",
                    textDecoration: "none",
                  }}
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </a>
            </motion.li>
            <motion.li
              initial={{ y: 0, scale: 1 }}
              whileHover={{ y: -3, scale: 1.1 }}
            >
              <a
                href="https://www.instagram.com/alb.ert2707/?hl=es"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  style={{ fill: "currentColor", color: "rgb(244 63 94)" }}
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
            </motion.li>
            <motion.li
              initial={{ y: 0, scale: 1 }}
              whileHover={{ y: -3, scale: 1.1 }}
            >
              <a
                href="https://www.linkedin.com/in/albert-joan-agramonte-suero-80b844247/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  style={{ color: "#0a66c2" }}
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
              </a>
            </motion.li>
            <motion.li
              initial={{ y: 0, scale: 1 }}
              animate={{ y: 0, scale: 1 }}
              whileHover={{ y: -3, scale: 1.1 }}
            >
              <a href="https://github.com/Albert2707" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "lightgray" }}
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
              </a>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
