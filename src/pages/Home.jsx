import React from "react";
import { AnimName, Hero, NextPage } from "../components";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <AnimName />
      <Hero />
      <NextPage text={"See more about me"} link={"/about"} />
    </motion.div>
  );
};

export default Home;
