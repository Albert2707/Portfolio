import { FormEvent, useRef } from "react";
import "./Contact.scss";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50px" });
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message sent");
  };
  return (
    <div className="contact" ref={ref}>
      <div className="container">
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
          <img src="/images/message.svg" className="contactImage" alt="" />
        </motion.div>
        <div className="right">
          <h1>Email me</h1>
          <form action="" className="form" onSubmit={handleSubmit}>
            <input type="Email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea name="" placeholder="Message " id="" cols={30} rows={8}></textarea>
            <motion.button
              initial={{ scale: 0, x: -50 }}
              animate={isInView ? { scale: 1, x: 0 } : { scale: 0, x: -50 }}
              transition={{
                type: "spring",
                damping: 15,
                stiffness: 400,
                duration: 0.3,
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
            >
              send
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
