import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../firebase";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const [educationData, setEducationData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const educationRef = ref(database, 'education');

    const unsubscribe = onValue(educationRef, (snapshot) => {
      try {
        const data = snapshot.val();
        if (data) {
          const educationArray = Array.isArray(data) ? data : Object.values(data);
          setEducationData(educationArray);
        } else {
          setEducationData([]);
        }
        setLoading(false);
      } catch (err) {
        setError('Error fetching education data');
        setLoading(false);
      }
    }, (error) => {
      setError(error.message);
      setLoading(false);
    });

    // Cleanup subscription
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <Element name="education" className="border-b border-neutral-900 pb-20">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-400"></div>
        </div>
      </Element>
    );
  }

  if (error) {
    return (
      <Element name="education" className="border-b border-neutral-900 pb-20">
        <div className="text-center text-red-500 py-10">
          {error}
        </div>
      </Element>
    );
  }

  return (
    <Element name="education" className="border-b border-neutral-900 pb-20">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="my-10 text-center text-4xl font-semibold"
      >
        Education
      </motion.h1>
      <div className="container mx-auto px-4">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-indigo-600 h-full mx-auto"></div>
          </div>
          <div className="relative space-y-12">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.09 }}
                className="flex items-center space-x-4 bg-gray-800 p-6 rounded-lg shadow-lg relative z-10"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-600 text-white absolute -left-6">
                  {item.level === "college" && (
                    <FaUniversity className="text-4xl" />
                  )}
                  {item.level === "higher-secondary" && (
                    <FaSchool className="text-4xl" />
                  )}
                  {item.level === "high-school" && (
                    <FaGraduationCap className="text-4xl" />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-cyan-300 mb-1">
                    {item.institution}
                  </h3>
                  <p className="text-gray-400 mb-1">{item.university}</p>
                  <p className="text-gray-300 mb-1">
                    Percentage/Grade:{" "}
                    <span className="font-semibold">{item.percentage}</span>
                  </p>
                  <p className="text-gray-300 mb-1">
                    Year: <span className="font-semibold">{item.year}</span>
                  </p>
                  <p className="text-gray-300 mb-1">
                    Degree:{" "}
                    <span
                      className="font-semibold"
                      dangerouslySetInnerHTML={{ __html: item.degree }}
                    />
                  </p>
                  <p className="text-gray-300">
                    Location:{" "}
                    <span className="font-semibold">{item.location}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Education;