import React from "react";
import Image from "next/image";
import images from "../../assets";
import AppWrap from "./../Wrapper/AppWrap";
import MotionWrap from "../Wrapper/MotionWrap";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="flex w-full justify-center items-center flex-row sm:flex-col md:p-4">
      <div
        id="about"
        className="font-poppins text-4xl flex flex-col mb-36 sm:mb-5 xs:flex-col"
      >
        <motion.div
          whileInView={{ x: [-300, 0] }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="mb-16 flex justify-center items-cemter ml-36 sm:ml-0 text-6xl sm:text-5xl sm:justify-center sm:items-center"
        >
          ABOUT{" "}
        </motion.div>
        AT PLATINUM BLADES, WE
        <br /> BELIEVE THAT, AT ITS BEST,
        <br />
        A BARBERSHOP IS A <br />
        DEPENDABLE, TRUSTED
        <br />
        NEIGHBORHOOD INSTITUTION.
        <hr className="mt-5 mb-5 " />
        <p className="mb-5 font-poppins text-xl">
          OUR PRIMARY GOAL IS TO BUILD
          <br /> STRONG,LONG-TERM RELATIONSHIPS
          <br /> WITH EACH OF OUR CLIENTS.
        </p>
        <p className="font-poppins font-semibold text-sm">
          Platinum Blades is proud to be an independent,
          <br /> Williston local shop
          <br /> focused solely on serving the North Dakota market.
        </p>
        <p className="font-poppins font-semibold text-sm mt-5">
          Lee has been cutting hair fewer than 10 years. <br />
          We’ve seen it all and can do it all. <br />
          We are about substance and skill, not gimmicks. <br />
          We like to have fun, but we take our work seriously.
          <br /> Scantily-clad female stylists who press their cleavage <br />
          in your face at the shampoo bowl?
          <br /> Sorry pal, you won¹t find that here.
        </p>
      </div>
      <div className="flex sm:flex-col sm:mt-0 justify-end items-end">
        <Image
          src={images.about1}
          alt="hairstyles"
          width={200}
          height={600}
          // ** Perfect for sm size (mobile)
          // width={200}
          // height={880} 
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(About, "about"));
