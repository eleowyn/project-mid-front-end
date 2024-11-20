import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../firebase';
import { Typewriter } from "react-simple-typewriter";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const animatedContainer = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const About = () => {
  const [aboutData, setAboutData] = useState({
    name: "Elshera Dahlan",
    roles: ["UI/UX Designer", "Desktop App Developer"],
    description: "",
    profilePic: "",
    resumePDF: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Reference to the about node in your Firebase Realtime Database
    const aboutRef = ref(database, 'about');

    // Set up a listener for real-time updates
    const unsubscribe = onValue(
      aboutRef, 
      (snapshot) => {
        try {
          // Get the data from the snapshot
          const data = snapshot.val();
          
          if (data) {
            setAboutData({
              name: data.name || "Elshera Dahlan",
              roles: data.roles || ["UI/UX Designer", "Desktop App Developer"],
              description: data.description || "",
              profilePic: data.profilePic || "/assets/images/elshera-profile.jpg",
              resumePDF: data.resumePDF || "/assets/pdf/ResumeCV-Elshera.pdf"
            });
          }
          setIsLoading(false);
        } catch (err) {
          console.error("Error fetching about data:", err);
          setError(err);
          setIsLoading(false);
        }
      },
      (error) => {
        console.error("Firebase database error:", error);
        setError(error);
        setIsLoading(false);
      }
    );

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, []);

  // Loading state
  if (isLoading) {
    return (
      <Element name="about" className="border-b border-neutral-900 pb-4 lg:mb-5">
        <div className="text-center text-neutral-300 text-2xl">
          Loading About Information...
        </div>
      </Element>
    );
  }

  // Error state
  if (error) {
    return (
      <Element name="about" className="border-b border-neutral-900 pb-4 lg:mb-5">
        <div className="text-center text-red-500 text-2xl">
          Error loading about information. Please try again later.
        </div>
      </Element>
    );
  }

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
              {aboutData.name}
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
                  words={aboutData.roles}
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
              {aboutData.description}
            </motion.p>
            <motion.a
              href={aboutData.resumePDF}
              download={`${aboutData.name.replace(' ', '-')}-Resume.pdf`}
              className="inline-flex my-6 items-center mt-6 px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-700 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              <FaDownload className="mr-2 text-lg" />
              Download Resume
            </motion.a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center lg:justify-end">
          <motion.img
            src={aboutData.profilePic}
            alt={`${aboutData.name} Profile`}
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