import React, { useState, useEffect } from 'react';
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { ref, onValue } from 'firebase/database';
import { database } from '../firebase';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Contact = () => {
  const [contactData, setContactData] = useState({
    linkedin: "",
    github: "",
    instagram: "",
    x: "",
    phoneNo: "",
    email: ""
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Reference to the contact node in your Firebase Realtime Database
    const contactRef = ref(database, 'contact');

    // Set up a listener for real-time updates
    const unsubscribe = onValue(
      contactRef, 
      (snapshot) => {
        try {
          // Get the data from the snapshot
          const data = snapshot.val();
          
          if (data) {
            setContactData({
              linkedin: data.linkedin || "",
              github: data.github || "",
              instagram: data.instagram || "",
              x: data.x || "",
              phoneNo: data.phoneNo || "",
              email: data.email || ""
            });
          }
          setIsLoading(false);
        } catch (err) {
          console.error("Error fetching contact data:", err);
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
      <Element name="contact" className="border-b border-neutral-900 pb-20">
        <div className="text-center text-neutral-300 text-2xl">
          Loading Contact Information...
        </div>
      </Element>
    );
  }

  // Error state
  if (error) {
    return (
      <Element name="contact" className="border-b border-neutral-900 pb-20">
        <div className="text-center text-red-500 text-2xl">
          Error loading contact information. Please try again later.
        </div>
      </Element>
    );
  }

  // Check if any social links are available
  const hasSocialLinks = 
    contactData.linkedin || 
    contactData.github || 
    contactData.instagram || 
    contactData.x;

  return (
    <Element name="contact" className="border-b border-neutral-900 pb-20">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="my-10 text-center text-4xl font-semibold"
      >
        Get in Touch
      </motion.h1>
      <div className="text-center tracking-tighter">
        {hasSocialLinks && (
          <div className="m-8 flex items-center justify-center gap-6 text-2xl md:text-2xl">
            {contactData.linkedin && (
              <motion.a
                href={contactData.linkedin}
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
            )}
            
            {contactData.github && (
              <motion.a
                href={contactData.github}
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
            )}
            
            {contactData.instagram && (
              <motion.a
                href={contactData.instagram}
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
            )}
            
            {contactData.x && (
              <motion.a
                href={contactData.x}
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
            )}
          </div>
        )}

        {contactData.phoneNo && (
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="my-4 text-xl"
          >
            {contactData.phoneNo}
          </motion.p>
        )}

        {contactData.email && (
          <motion.a
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            href={`mailto:${contactData.email}`}
            className="border-b text-xl"
          >
            {contactData.email}
          </motion.a>
        )}
      </div>
    </Element>
  );
};

export default Contact;