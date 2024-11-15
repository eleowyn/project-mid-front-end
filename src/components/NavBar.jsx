import { useState } from "react";
import { GoCodeReview } from "react-icons/go";
import { motion } from "framer-motion";
import { Link as ScrollLink, animateScroll } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <nav className="mb-20 py-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        className="max-w-screen-xl flex flex-wrap items-center justify-between p-4"
      >
        <div
          className="flex items-start space-x-3 rtl:space-x-reverse cursor-pointer"
          onClick={scrollToTop}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-neutral-300 text-2xl md:text-3xl"
          >
            <GoCodeReview />
          </motion.div>
          <span className="self-center text-base font-semibold text-neutral-300 md:text-2xl">
            Akshay | Full Stack Dev
          </span>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-neutral-400 rounded-lg md:hidden hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
          onClick={handleToggle}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <motion.div
          className={`w-full md:flex md:items-center md:justify-between md:w-auto ${isOpen ? "block" : "hidden"}`}
          id="navbar-default"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-neutral-700 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            {[
              "About",
              "Skills",
              "Experience",
              "Education",
              "Projects",
              "Certifications",
              "Contact",
            ].map((item, index) => (
              <li key={index}>
                <ScrollLink
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 px-3 text-neutral-300 rounded hover:bg-neutral-700 md:hover:bg-transparent md:hover:text-cyan-600 md:p-0"
                  aria-current={item}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
