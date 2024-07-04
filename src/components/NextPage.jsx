import React from "react";
import { Link } from "react-router-dom";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const NextPage = ({ text, link }) => {
  const arrowVariants = {
    initial: { x: 0 },
    animate: {
      x: [0, 5, 0],
      transition: {
        duration: 1,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };
  return (
    <>
      <Link
        to={link}
        className="mx-4 mb-20 mt-4 md:my-4 md:mx-24 flex items-center gap-2 text-blue-600 hover:underline dark:text-blue-400"
      >
        <span className="text-base">{text}</span>
        <motion.div
          variants={arrowVariants}
          initial="initial"
          animate="animate"
        >
          <ArrowLongRightIcon className="w-5 h-5" />
        </motion.div>
      </Link>
    </>
  );
};

export default NextPage;
