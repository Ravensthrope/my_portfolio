import React from "react";
import { Link } from "react-router-dom";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-4 md:mx-24 mt-2 text-sm md:text-md text-slate-700 dark:text-slate-300 leading-9"
    >
      <p className="my-4">
        Your friendly neighborhood Software Development Engineer. I spend my
        days (and often nights) painting the Internet canvas with{" "}
        <Link
          to="/project"
          className="font-semibold text-black dark:text-white hover:text-blue-600 hover:underline dark:hover:text-blue-600"
        >
          PROJECTS
        </Link>{" "}
        and lines of code, turning zeroes and ones into immersive, interactive
        experiences.
      </p>

      <p>
        Hello from Mumbai! I’m Aafaq Sayed, a passionate{" "}
        <span className="font-semibold text-black dark:text-white">
          COMPUTER ENGINEERING GRADUATE
        </span>{" "}
        who loves creating innovative web and mobile applications with{" "}
        <span className="font-semibold text-black dark:text-white">
          REACT, NODE.JS, PYTHON, and FLUTTER.
        </span>{" "}
        When I’m not immersed in coding, you might find me analyzing STOCK
        MARKETS or enjoying TECH ARTICLES and NASHEEDS. Don’t hesitate to{" "}
        <Link
          to="/contact"
          className="font-semibold text-black dark:text-white dark:hover:text-blue-600 hover:text-blue-600 hover:underline"
        >
          CONNECT WITH ME
        </Link>{" "}
        for potential collaborations and new projects!
      </p>
    </motion.div>
  );
};

export default Hero;
