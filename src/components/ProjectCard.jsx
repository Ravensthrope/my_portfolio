import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectCard = ({ project, isLarge }) => {
  const isMobile = window.innerWidth < 768; // Check for mobile screens

  return (
    <motion.div
      className={`relative border rounded-lg shadow-md overflow-hidden ${
        isLarge ? "h-96 md:row-span-2" : "h-64"
      }`}
      whileHover={!isMobile ? { scale: 1.03 } : {}}
      transition={{ duration: 0.3 }}
    >
      <Link to={project.githubURL} target="_blank">
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
        <div
          className={`absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black to-transparent ${
            isMobile ? "" : "hidden group-hover:flex"
          }`}
        >
          <h3 className="text-xl font-semibold text-slate-200 dark:text-slate-100 mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-slate-200 dark:text-slate-100">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="bg-gray-800 text-slate-300 dark:text-white px-3 py-1 rounded-lg text-xs min-w-fit"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
