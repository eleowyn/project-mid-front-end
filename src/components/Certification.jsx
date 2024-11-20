import React, { useState, useEffect } from 'react';
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { ref, onValue } from 'firebase/database';
import { database } from '../firebase.js';

const Certification = () => {
  const [certifications, setCertifications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Reference to the certifications node in your Firebase Realtime Database
    const certificationsRef = ref(database, 'certifications');

    // Set up a listener for real-time updates
    const unsubscribe = onValue(
      certificationsRef, 
      (snapshot) => {
        try {
          // Get the data from the snapshot
          const data = snapshot.val();
          
          // Convert the object to an array if needed
          const certificationsArray = data 
            ? Object.keys(data).map(key => ({
                id: key,
                ...data[key]
              }))
            : [];

          setCertifications(certificationsArray);
          setIsLoading(false);
        } catch (err) {
          console.error("Error fetching certifications:", err);
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
      <Element name="certifications" className="border-b border-neutral-900 pb-20">
        <div className="text-center text-neutral-300 text-2xl">
          Loading Certifications...
        </div>
      </Element>
    );
  }

  // Error state
  if (error) {
    return (
      <Element name="certifications" className="border-b border-neutral-900 pb-20">
        <div className="text-center text-red-500 text-2xl">
          Error loading certifications. Please try again later.
        </div>
      </Element>
    );
  }

  return (
    <Element
      name="certifications"
      className="border-b border-neutral-900 pb-20"
    >
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="my-10 text-center text-4xl font-semibold"
      >
        Certifications
      </motion.h1>
      <div className="container mx-auto px-4">
        {certifications.length === 0 ? (
          <div className="text-center text-neutral-300 text-xl">
            No certifications found.
          </div>
        ) : (
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((certification, index) => (
              <motion.div
                key={certification.id || index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.3 }}
                className="flex flex-col items-center"
              >
                <img
                  src={certification.badge}
                  alt={`${certification.title} Badge`}
                  className="w-40 h-40 mb-4"
                />
                <h3
                  dangerouslySetInnerHTML={{ __html: certification.title }}
                  className="text-xl font-semibold text-cyan-300 text-center"
                />
                <p className="text-neutral-300 text-center mt-2">
                  <strong>Issuer:</strong> {certification.issuer}
                </p>
                <p className="text-neutral-300 text-center">
                  <strong>Date:</strong> {certification.date}
                </p>
                {certification.link && (
                  <a
                    href={certification.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-cyan-300 hover:text-cyan-400"
                  >
                    View Certification
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </Element>
  );
};

export default Certification;