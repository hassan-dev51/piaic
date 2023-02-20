"use client";
import { staggerContainer, textVariant2 } from "@/utils/motion";
import React from "react";
import { motion } from "framer-motion";
import pana from "../assets/pana.svg";
import saylani from "../assets/saylani.png";
import Image from "next/image";
const Partner = () => {
  return (
    <div className="mx-6">
      {" "}
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className=""
      >
        <motion.h1
          variants={textVariant2}
          className="text-4xl text-center py-6 font-bold text-white tracking-[4px]"
        >
          Strategic Partners
        </motion.h1>
        <motion.div className="flex w-[40%] md:flex-row flex-col md:mb-0 mb-4 pt-8 justify-between m-auto">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeIn", type: "tween" }}
          >
            <Image src={pana} alt="panacloud" width={200} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Image src={saylani} alt="trust" width={200} />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Partner;
