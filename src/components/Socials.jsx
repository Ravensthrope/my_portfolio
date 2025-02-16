import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Socials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 p-4 bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg shadow-lg flex justify-center md:static md:mx-20 md:p-4 md:justify-start md:bg-transparent md:dark:bg-transparent md:backdrop-blur-none md:shadow-none dark:text-white"
    >
      <div className="flex flex-row gap-4 text-xl">
        <Link
          to="https://www.linkedin.com/in/aafaq-sayed-17a047236/"
          className="hover:scale-110 transition-transform"
          target="_blank"
        >
          <FaLinkedinIn />
        </Link>
        <Link
          to="https://github.com/Ravensthrope"
          className="hover:scale-110 transition-transform"
          target="_blank"
        >
          <FaGithub />
        </Link>
        <Link
          to="https://www.instagram.com/aafaqsayed__/"
          className="hover:scale-110 transition-transform"
          target="_blank"
        >
          <FaInstagram />
        </Link>
      </div>
    </motion.div>
  );
};

export default Socials;
