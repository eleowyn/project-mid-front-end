import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { TECHNOLOGIES } from "../constants/content";

// TechCard Component
const TechCard = ({ icon, name }) => (
  <motion.div
    initial={{ opacity: 0.8, scale: 0.95, y: 50 }}
    whileInView={{ opacity: 1, scale: 1, y: 0.5 }}
    whileHover={{ scale: 1.05, rotate: 5, transition: { duration: 0.3 } }}
    whileTap={{ scale: 0.95, transition: { duration: 0.3 } }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center justify-center p-4 bg-neutral-800 rounded-lg shadow-md border border-neutral-700"
  >
    <img src={icon} alt={name} className="w-12 h-12 mb-2" />
    <span className="text-neutral-200 text-sm text-center">{name}</span>
  </motion.div>
);

// SkillCategory Component
const SkillCategory = ({ title, technologies }) => (
  <div>
    <h3 className="text-xl font-semibold mb-4 text-cyan-300">{title}</h3>
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {technologies.map((tech, index) => (
        <TechCard key={index} icon={tech.icon} name={tech.name} />
      ))}
    </div>
  </div>
);

// Skills Component
const Skills = () => {
  return (
    <Element name="skills" className="border-b border-neutral-900 pb-20">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="my-10 text-center text-4xl font-semibold "
      >
        Skills
      </motion.h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {Object.keys(TECHNOLOGIES).map((category) => (
            <div
              key={category}
              className="p-6 bg-neutral-800 rounded-lg shadow-md border border-neutral-700"
            >
              <SkillCategory
                title={category}
                technologies={TECHNOLOGIES[category]}
              />
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Skills;
