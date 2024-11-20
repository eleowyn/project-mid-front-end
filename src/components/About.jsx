//About.jsx
import { ABOUT_CONTENT } from "../constants/content";
import profilePic from "../../assets/images/elshera-profile.jpg";
import { Typewriter } from "react-simple-typewriter";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import ResumePDF from "/assets/pdf/ResumeCV-Elshera.pdf";

const animatedContainer = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const About = () => {
  return (
    <Element name="about" className="border-b border-neutral-900 pb-4 lg:mb-5">
      <div className="flex flex-wrap justify-center lg:justify-between">
        <div className="w-full lg:w-1/2 px-4">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={animatedContainer(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-4xl font-thin tracking-tight mt-8 lg:mt-16 lg:text-5xl"
            >
              Elshera Dahlan
            </motion.h1>
            <motion.div
              variants={animatedContainer(0.5)}
              initial="hidden"
              animate="visible"
              className="text-2xl lg:text-3xl font-light tracking-tight text-center lg:text-left"
            >
              <span className="text-white">I am a </span>
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-600 bg-clip-text text-transparent font-normal">
                <Typewriter
                  words={["UI/UX Designer", "Dekstop App Developer"]}
                  loop={0}
                  cursor
                  cursorStyle=""
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </motion.div>
            <motion.p
              variants={animatedContainer(1)}
              initial="hidden"
              animate="visible"
              className="max-w-xl py-6 font-light tracking-wide text-center lg:text-left text-base lg:text-lg text-neutral-300 leading-relaxed"
            >
              {ABOUT_CONTENT}
            </motion.p>
            <motion.a
              href={ResumePDF}
              download="Elshera-Dahlan-Resume.pdf"
              className="inline-flex my-6 items-center mt-6 px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-700 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              <FaDownload className="mr-2 text-lg" /> {/* Download Icon */}
              Download Resume
            </motion.a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center lg:justify-end">
          <motion.img
            src={profilePic}
            alt="Elshera Dahlan Profile"
            className="rounded-lg shadow-2xl border-4 border-neutral-900 max-w-full h-auto"
            style={{ boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)" }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
        </div>
      </div>
    </Element>
  );
};

export default About;
