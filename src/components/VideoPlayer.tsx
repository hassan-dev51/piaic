"use client";
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/utils/motion";

const video = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/_OVnXw2ldog",
    delay: 1.1,
  },
  {
    id: 2,
    src: "https://www.youtube.com/embed/lnrrnpZ7zMk",
    delay: 1.2,
  },
  {
    id: 3,
    src: "https://www.youtube.com/embed/fKhY3mu8hx4",
    delay: 1.3,
  },
];
const VideoPlayer = () => {
  return (
    <div className="mx-6 flex justify-between md:flex-row flex-col ">
      {video.map((video) => (
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="my-6 "
          key={video.id}
        >
          <motion.iframe
            variants={textVariant(video.delay)}
            className="md:w-[400px] w-[300px] h-[315px] "
            src={video.src}
          ></motion.iframe>
        </motion.div>
      ))}
    </div>
  );
};

export default VideoPlayer;
