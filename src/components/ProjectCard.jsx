import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project, isLarge }) => {
  const overlayVariants = {
    initial: { y: 110 },
    hover: { y: 0 },
  };

  return (
    <motion.div
      className={`relative border rounded-lg shadow-md overflow-hidden ${
        isLarge ? "h-96 md:row-span-2" : "h-64"
      }`}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      {project.projectImg && (
        <img
          src={project.projectImg}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      )}
      {project.video && (
        <video
          src={project.video}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      )}
      <motion.div
        className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black to-transparent"
        variants={overlayVariants}
        initial="initial"
        whileHover="hover"
        transition={{ type: "spring", stiffness: 200 }}
      >
        <h3 className="text-xl font-semibold text-slate-200 dark:text-slate-100 mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-slate-200 dark:text-slate-100">
          {project.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
