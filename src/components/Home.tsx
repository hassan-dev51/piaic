"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import vector from "../assets/Vector 4.png";
import { staggerContainer, textContainer, textVariant2 } from "@/utils/motion";
import Tags from "./Tags";

const TypingText = (props: { title: string }) => (
  <motion.p variants={textContainer}>
    {Array.from(props.title).map((letter, index) => (
      <motion.span
        variants={textVariant2}
        key={index}
        className={`md:text-3xl text-sm `}
      >
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

const Home = () => {
  return (
    <div className="mx-6 flex  md:flex-row flex-col ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="md:w-1/2 w-full flex justify-center"
      >
        <Image src={vector} alt="president" />
      </motion.div>
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="md:w-1/2 w-full text-white flex flex-col justify-evenly items-start md:gap-0 gap-6 md:mt-0 mt-4"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="md:text-5xl text-2xl tracking-[7px]"
        >
          Presidential Initiative
        </motion.h1>
        <TypingText title="for Artificial Intelligence & Computing (PIAIC)" />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="md:text-xl text-sm"
        >
          The mission of PIAIC is to reshape Pakistan by revolutionizing
          education, research, and business by adopting latest, cutting-edge
          technologies. Experts are calling this the 4th industrial revolution.
          We want Pakistan to become a global hub for AI, data science, cloud
          native computing, edge computing, blockchain, augmented reality, and
          internet of things.
          <button type="button">Apply</button>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Home;
