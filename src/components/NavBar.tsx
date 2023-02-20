"use client";
import React from "react";
import { motion } from "framer-motion";

import { Inter } from "@next/font/google";
import { navVariants } from "../utils/motion";
import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

const NavBar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`px-6 sticky top-0 glassmorphism z-50`}
    >
      <div className="gradient-left" />
      <div className="py-2 flex justify-between">
        <Link href={"/"}>
          <Image src={logo} alt="logo" width={100} priority />
        </Link>

        <motion.ul
          className={`flex justify-evenly items-center md:w-[50%] w-[80%] text-white  ${inter.className}`}
        >
          <motion.li
            initial={{ opacity: 0, x: 400 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <Link href={`/`}>About</Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Link href={`/`}>Programs</Link>
          </motion.li>{" "}
          <motion.li
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Link href={`https://portal.piaic.org/signup`}>Apply</Link>
          </motion.li>
        </motion.ul>
      </div>
    </motion.nav>
  );
};

export default NavBar;
