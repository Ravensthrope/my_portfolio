import React from "react";
import { PageName, NextPage } from "../components";
import ProjectCard from "../components/ProjectCard";
import { Projects } from "../data/projectsData";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="m-8 md:mx-24">
        <PageName name={"Projects"} />
        <div className="my-4 grid md:grid-cols-2 grid-cols-1 gap-6">
          {Projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isLarge={index % 2 === 0}
            />
          ))}
        </div>
      </div>
      <NextPage
        text={"Are you convinced to Contact me now?"}
        link={"/contact"}
      />
    </motion.div>
  );
};

export default Project;
