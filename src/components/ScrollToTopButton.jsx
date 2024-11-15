import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { animateScroll } from "react-scroll";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <div className="fixed bottom-5 right-5 z-50 flex items-center group">
          <motion.button
            onClick={() => animateScroll.scrollToTop()}
            className="relative rounded-full bg-cyan-600 p-4 text-white shadow-md hover:bg-cyan-700 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
          >
            <FaArrowUp className="text-xl" />
          </motion.button>
          <span className="absolute bottom-16 right-1/2 transform translate-x-1/2 w-max whitespace-nowrap rounded bg-gray-700 px-2 py-1 text-xs text-white shadow-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Scroll to Top
          </span>
        </div>
      )}
    </div>
  );
};

export default ScrollToTopButton;
