import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants/content";

const ExperienceStep = ({ year, role, company, description, technologies }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col lg:flex-row mb-8"
  >
    <div className="lg:w-1/3">
      <h3 className="text-xl font-semibold text-cyan-300">{year}</h3>
      <h4 className="text-lg font-medium text-neutral-200">{role}</h4>
      <h5 className="text-md font-light text-neutral-400">{company}</h5>
    </div>
    <div className="lg:w-2/3 lg:pl-8 mt-4 lg:mt-0">
      <p className="text-neutral-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-neutral-700 text-neutral-200 px-2 py-1 rounded-md text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    <Element name="experience" className="border-b border-neutral-900 pb-20">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="my-10 text-center text-4xl font-semibold "
      >
        Experience
      </motion.h1>
      <div className="container mx-auto px-4">
        {EXPERIENCES.map((experience, index) => (
          <ExperienceStep
            key={index}
            year={experience.year}
            role={experience.role}
            company={experience.company}
            description={experience.description}
            technologies={experience.technologies}
          />
        ))}
      </div>
    </Element>
  );
};

export default Experience;
