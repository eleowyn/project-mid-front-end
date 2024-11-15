import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { CERTIFICATIONS } from "../constants/content";

const Certification = () => {
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
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((certification, index) => (
            <motion.div
              key={index}
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
      </div>
    </Element>
  );
};

export default Certification;
