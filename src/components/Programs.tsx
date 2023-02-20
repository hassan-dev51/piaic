"use client";
import React from "react";
import { motion } from "framer-motion";
import { program } from "@/utils/program";
import Link from "next/link";
import { fadeIn, staggerContainer, textVariant, zoomIn } from "@/utils/motion";
const Programs = () => {
  return (
    <div className="mx-6 mt-6">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="p-6 border-[#55df77] rounded-xl bg-[#000000de]"
      >
        <motion.h2
          variants={textVariant(1.1)}
          className="md:text-6xl text-2xl text-center uppercase tracking-[5px] text-white flex justify-center"
        >
          Available Programs
        </motion.h2>
      </motion.div>
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col md:flex-col lg:flex-row md:gap-0 gap-4 justify-evenly mt-8"
      >
        {program.map((curEle) => (
          <Link
            href={`/${curEle.id}`}
            key={curEle.id}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <motion.div
              variants={zoomIn(0.4, curEle.index)}
              className="w-[300px] h-full border rounded-2xl text-white overflow-hidden"
            >
              <h2
                className={`text-3xl p-3 uppercase tracking-[3px] bg-[${curEle.color}] text-center`}
              >
                {curEle.title}
              </h2>
              <p className="p-3 text-left">{curEle.des}</p>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default Programs;
