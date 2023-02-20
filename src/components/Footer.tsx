"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import footer from "../assets/footer.png";
import { FaFacebook, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="px-6 glassmorphism flex md:flex-row flex-col md:gap-0 gap-6 justify-between">
      <div className="flex items-center gap-8">
        <h2 className="text-2xl font-semibold text-white">Connect with us</h2>
        <Link href={"https://www.facebook.com/groups/piaic"} target="_blank">
          <FaFacebook size={32} color="E5FDD1" />
        </Link>
        <Link href={"https://www.youtube.com/@panaverse"} target="_blank">
          <FaYoutube size={40} color="E5FDD1" />
        </Link>
      </div>
      <div className="w-[110px] text-start">
        <span className="text-[17px] font-semibold uppercase text-white">
          Powered by
        </span>
        <Image src={footer} alt="footer_image" width={100} />
      </div>
    </div>
  );
};

export default Footer;
