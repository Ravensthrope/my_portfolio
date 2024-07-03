import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaEarthAsia } from "react-icons/fa6";

const AbtDesc = ({ name, desc, link, view }) => {
  return (
    <div className="flex flex-col gap-2 my-2 text-slate-700 dark:text-slate-300">
      <div className="font-semibold text-lg flex flex-col sm:flex-row justify-between">
        <Link to={link}>
          <div className="hover:underline flex flex-row gap-2 text-black dark:text-white">
            {name}
            {view === "Github" ? <FaGithub /> : <FaEarthAsia />}
          </div>
        </Link>
        <div className="underline md:text-md text-sm mt-2 sm:mt-0">
          <Link to={link} target="_blank">
            View {view}
          </Link>
        </div>
      </div>
      <div className="font-medium text-md">{desc}</div>
    </div>
  );
};

export default AbtDesc;
