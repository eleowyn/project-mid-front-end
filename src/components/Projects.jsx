import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { PROJECTS } from "../constants/content";

const Projects = () => {
  return (
    <Element name="projects" className="border-b border-neutral-900 pb-20">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="my-10 text-center text-4xl font-semibold"
      >
        Projects
      </motion.h1>
      <div className="container mx-auto px-4 grid gap-10 md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.02 }}
            className="bg-neutral-800 rounded-lg shadow-md border border-neutral-700 p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4 text-cyan-300">
              {project.title}
            </h3>
            <p className="text-neutral-300 mb-4">{project.description}</p>

            <div className="flex items-center flex-wrap mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-cyan-700 text-white text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mt-4 text-cyan-300 hover:text-cyan-400"
            >
              <FaGithub className="mr-2" /> View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </Element>
  );
};

export default Projects;
