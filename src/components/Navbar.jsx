import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../context/theme";
import logo from "../assets/AafaqLogo.svg";

const Navbar = ({ currentPath }) => {
  const { themeMode, darkTheme, lightTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = () => {
    themeMode === "light" ? darkTheme() : lightTheme();
    console.log(`Current theme: ${themeMode}`);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex w-full p-4 md:p-16 items-center justify-between text-black dark:text-slate-200"
      >
        <div>
          <Link to="/" onClick={closeMenu}>
            <img
              className="h-12 w-12 md:h-20 md:w-20 dark:invert"
              src={logo}
              alt="Logo"
            />
          </Link>
        </div>
        <div className="hidden md:flex gap-8 mb-2">
          {currentPath !== "/about" && (
            <Link
              to="/about"
              className="relative text-slate-500 dark:text-slate-300 group"
            >
              About
              <span className="absolute block w-0 h-0.5 bg-slate-500 transition-all duration-300 group-hover:w-full bottom-0 left-0 dark:bg-slate-300"></span>
            </Link>
          )}
          {currentPath !== "/project" && (
            <Link
              to="/project"
              className="relative text-slate-500 dark:text-slate-300 group"
            >
              Projects
              <span className="absolute block w-0 h-0.5 bg-slate-500 transition-all duration-300 group-hover:w-full bottom-0 left-0 dark:bg-slate-300"></span>
            </Link>
          )}
          {currentPath !== "/contact" && (
            <Link
              to="/contact"
              className="relative text-slate-500 dark:text-slate-300 group"
            >
              Contact
              <span className="absolute block w-0 h-0.5 bg-slate-500 transition-all duration-300 group-hover:w-full bottom-0 left-0 dark:bg-slate-300"></span>
            </Link>
          )}
          <button onClick={handleChange}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z"></path>
            </svg>
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white dark:bg-gray-800 flex flex-col items-center justify-center z-50 text-2xl"
          >
            <button
              onClick={closeMenu}
              className="absolute top-4 right-4 text-black dark:text-white"
            >
              <FaTimes className="w-8 h-8" />
            </button>
            {currentPath !== "/about" && (
              <Link
                to="/about"
                className="relative text-slate-500 dark:text-slate-300 group mb-4"
                onClick={closeMenu}
              >
                About
                <span className="absolute block w-0 h-0.5 bg-slate-500 transition-all duration-300 group-hover:w-full bottom-0 left-0 dark:bg-slate-300"></span>
              </Link>
            )}
            {currentPath !== "/project" && (
              <Link
                to="/project"
                className="relative text-slate-500 dark:text-slate-300 group mb-4"
                onClick={closeMenu}
              >
                Projects
                <span className="absolute block w-0 h-0.5 bg-slate-500 transition-all duration-300 group-hover:w-full bottom-0 left-0 dark:bg-slate-300"></span>
              </Link>
            )}
            {currentPath !== "/contact" && (
              <Link
                to="/contact"
                className="relative text-slate-500 dark:text-slate-300 group mb-4"
                onClick={closeMenu}
              >
                Contact
                <span className="absolute block w-0 h-0.5 bg-slate-500 transition-all duration-300 group-hover:w-full bottom-0 left-0 dark:bg-slate-300"></span>
              </Link>
            )}
            <button onClick={handleChange} className="mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z"></path>
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
