import React from "react";
import { PageName, NextPage } from "../components";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col gap-y-6 m-4 md:mx-24">
        <PageName name={"Contact"} />
        <div className="my-2 text-slate-700 dark:text-slate-300">
          <p>
            Get in touch or send an Email on{" "}
            <span className="font-semibold text-black dark:text-white">
              aafaqsayed09@gmail.com
            </span>
          </p>
          <form
            action="https://getform.io/f/wbrkkkra"
            method="POST"
            className="flex flex-col gap-4 w-full max-w-lg mt-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="rounded-md bg-transparent border-2 active:bg-white dark:active:bg-black dark:border-black h-12 pl-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="rounded-md bg-transparent border-2 active:bg-white dark:active:bg-black dark:border-black h-12 pl-2"
            />
            <textarea
              placeholder="Message"
              name="message"
              className="rounded-md bg-transparent border-2 active:bg-white dark:active:bg-black dark:border-black h-32 pl-2 pt-4"
            />
            <button className="bg-black text-white dark:bg-white dark:text-black h-12 w-full rounded-md hover:bg-slate-800 transition-all dark:hover:bg-slate-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <NextPage text={"Go back Home"} link={"/"} />
    </motion.div>
  );
};

export default Contact;
