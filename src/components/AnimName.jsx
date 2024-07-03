import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/theme";

const glitchVariants = {
  animate: {
    x: [0, -1, 1, -2, 2, -3, 3, 0],
    y: [0, -1, 1, -2, 2, -1, 1, 0],
    opacity: [1, 0.9, 1, 0.9, 1, 0.9, 1, 0.8],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  },
};

const highlightVariants = {
  animate: {
    opacity: [1, 1, 1, 1, 0, 0, 0, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  },
};

const GlitchText = ({ children }) => (
  <div
    style={{
      position: "relative",
      display: "inline-block",
      whiteSpace: "nowrap",
    }}
  >
    <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
    <motion.span
      animate="animate"
      variants={glitchVariants}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        color: "rgba(255, 105, 180, 0.8)", // Darker pink color
        zIndex: 0,
        clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
      }}
    >
      {children}
    </motion.span>
    <motion.span
      animate="animate"
      variants={glitchVariants}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        color: "rgba(255, 182, 193, 0.8)", // Lighter pink color
        zIndex: 0,
        clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
      }}
    >
      {children}
    </motion.span>
    <motion.span
      animate="animate"
      variants={highlightVariants}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        color: "rgba(255, 105, 180, 0.5)", // Slightly lighter pink for highlight
        zIndex: 0,
      }}
    >
      {children}
    </motion.span>
  </div>
);

const AnimName = () => {
  const { themeMode } = useContext(ThemeContext);

  return (
    <div className="mb-12 flex items-start mt-24 md:mt-4">
      <div
        className={`text-left mx-4 md:mx-24 font-semibold text-7xl md:text-7xl leading-tight ${
          themeMode === "dark" ? "text-white" : "text-black"
        }`}
      >
        <GlitchText>
          <div className="block md:inline">I'M</div>
          <div className="block md:inline"> AAFAQ</div>
          <div className="block md:inline"> SAYED</div>
        </GlitchText>
      </div>
    </div>
  );
};

export default AnimName;
