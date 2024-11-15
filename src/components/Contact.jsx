import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { CONTACT } from "../constants/content";

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Contact = () => {
  return (
    <Element name="contact" className="border-b  border-neutral-900 pb-20">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="my-10 text-center text-4xl font-semibold"
      >
        Get in Touch
      </motion.h1>
      <div className="text-center tracking-tighter">
        <div className="m-8 flex items-center justify-center gap-6 text-2xl md:text-2xl">
          <motion.a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            variants={iconVariants}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            variants={iconVariants}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            variants={iconVariants}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href={CONTACT.x}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter/X"
            variants={iconVariants}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <FaTwitter />
          </motion.a>
        </div>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="my-4 text-xl"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          href={`mailto:${CONTACT.email}`}
          className="border-b  text-xl"
        >
          {CONTACT.email}
        </motion.a>
      </div>
    </Element>
  );
};

export default Contact;
