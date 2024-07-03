import React from "react";
import { PageName, AbtDesc, NextPage, AbtReads } from "../components";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-4 my-4 md:mx-24">
        <PageName name={"About me"} />
        <ul className="relative pl-6 mt-4">
          <motion.li
            className="bullet-line"
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AbtDesc
              name={"Engineering"}
              desc={
                "The power of first impressions cannot be underestimated, and the gateway to capitalizing on them lies in exceptional website design. An outstanding website transcends mere aesthetics and extends its influence to encompass seamless functionality and user-friendly navigation. Drawing upon my expertise as a seasoned programmer, I possess the unique ability to tackle intricate technical challenges while crafting websites that exude sleekness and visual allure. Moreover, my extensive knowledge of recognized technical standards is complemented by my proficiency in modern building practices, ensuring that every aspect of your website is finely tuned to perfection."
              }
              link={"https://github.com/Ravensthrope?tab=repositories"}
              view={"Github"}
            />
          </motion.li>
          <motion.li
            className="bullet-line"
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AbtDesc
              name={"Products"}
              desc={
                "While I may not fit the conventional mold of a product manager, my diverse skill set in research, product design, and product coordination empowers me to drive the growth of a product from its inception. As an exceptional analytical thinker, I possess the ability to uphold the product's vision throughout its entire journey, effectively bridging the technical and product aspects. By leveraging my expertise, I can navigate the path from 0 to 1, ensuring the product's success at every stage."
              }
              link={"/project"}
              view={"Product"}
            />
          </motion.li>
        </ul>
        <div className="my-4">
          <h3 className="font-medium text-black md:text-2xl text-xl my-4 dark:text-white">
            My reads.
          </h3>
          <ul className="relative pl-6">
            <motion.li
              className="bullet-line"
              initial={{ opacity: 0, translateY: 50 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AbtReads
                name={"Hands-On React"}
                desc={
                  "Dived into the world of React JS with this comprehensive course designed to take you from the basics to advanced concepts. Through hands-on coding sessions, I have built a fully functional Minesweeper game while exploring key aspects of React development."
                }
                link={
                  "https://drive.google.com/file/d/1oRbL4Cxmh5xnQnD4L6HTYyC8FbvcY3A4/view?usp=sharing"
                }
                view={"2024"}
                where={"udemy"}
              />
            </motion.li>
            <motion.li
              className="bullet-line"
              initial={{ opacity: 0, translateY: 50 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AbtReads
                name={
                  "JavaScript, Bootstrap, & PHP - Certification for Beginners"
                }
                desc={
                  "I have successfully completed a comprehensive guide tailored for beginners interested in learning JavaScript, Bootstrap, and PHP. This course provided an in-depth exploration of these essential web development technologies, equipping me with the foundational skills needed to build dynamic, responsive, and interactive websites. By mastering JavaScript for client-side scripting, Bootstrap for responsive design, and PHP for server-side programming, I have gained a well-rounded understanding of full-stack development, which I am excited to apply to future projects."
                }
                link={
                  "https://drive.google.com/file/d/1QdHWoqn-3tVUKuO4Iq3mof59JVD7N7lb/view?usp=sharing"
                }
                view={"2022"}
                where={"udemy"}
              />
            </motion.li>
            <motion.li
              className="bullet-line"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <AbtReads
                name={"Learning Something Great 😉"}
                desc={"We continue learning everyday."}
                link={""}
                view={"Currently"}
                where={""}
              />
            </motion.li>
          </ul>
        </div>
      </div>
      <NextPage text={"Let's Continue to Projects"} link={"/project"} />
    </motion.div>
  );
};

export default About;
