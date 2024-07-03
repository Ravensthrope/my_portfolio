import React from "react";
import { Link } from "react-router-dom";
import { FaRegCalendarDays } from "react-icons/fa6";
import { motion } from "framer-motion";

const AbtReads = ({ name, link, view, desc, where }) => {
  return (
    <motion.div
      className="flex flex-col gap-2 mt-10 my-2 text-slate-700 dark:text-slate-300"
      initial={{ opacity: 0, translateY: 50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="font-semibold text-lg flex flex-col sm:flex-row justify-between">
        <Link to={link} target="_blank">
          <div className="hover:underline flex flex-row gap-2 text-black dark:text-white">
            <>
              {name}
              <span className="text-sm mt-1.5">
                {where === "udemy" ? ".Udemy" : ".Coursera"}
              </span>
            </>
          </div>
        </Link>
        <div className="underline md:text-md text-sm flex flex-row gap-1 mt-2 sm:mt-0">
          <div className="mt-1">
            <FaRegCalendarDays />
          </div>
          {view}
        </div>
      </div>
      <div className="font-medium text-md">{desc}</div>
    </motion.div>
  );
};

export default AbtReads;
