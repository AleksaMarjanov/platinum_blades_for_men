import React from "react";
import Image from "next/image";
import images from "../../assets";
import AppWrap from "./../Wrapper/AppWrap";
import MotionWrap from "../Wrapper/MotionWrap";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="mt-10">
         <motion.div
            whileInView={{ x: [-300, 0] }}
                transition={{ duration: 0.85, ease: "easeOut" }}
                className="font-poppins flex mb-16 md:mb-8 sm:mb-4 justify-center items-center text-6xl lg:text-4xl md:text-4xl sm:text-2xl"
                >
                ABOUT{" "}
            </motion.div>

    <div className="flex justify-center items-center flex-row sm:flex-col md:flex-col mt-4">
      <div
        className="font-poppins flex flex-col mb-36 lg:mb-24 md:mb-16 sm:mb-3 xs:flex-col"
      >
        <p className="text-4xl sm:text-2xl">AT PLATINUM BLADES, WE
        <br /> BELIEVE THAT, AT ITS BEST,
        <br />
        A BARBERSHOP IS A <br />
        DEPENDABLE, TRUSTED
        <br />
        NEIGHBORHOOD INSTITUTION.</p>
        <hr className="mt-5 mb-5 " />
        <p className="mb-5 font-poppins text-xl sm:text-lg">
          OUR PRIMARY GOAL IS TO BUILD
          <br /> STRONG,LONG-TERM RELATIONSHIPS
          <br /> WITH EACH OF OUR CLIENTS.
        </p>
        <p className="font-poppins font-semibold text-md sm:text-sm">
          Platinum Blades is proud to be an independent,
          <br /> Williston local shop
          <br /> focused solely on serving the North Dakota market.
        </p>
        <p className="font-poppins font-semibold text-md sm:text-sm mt-5">
          Lee has been cutting hair fewer than 10 years. <br />
          We’ve seen it all and can do it all. <br />
          We are about substance and skill, not gimmicks. <br />
          We like to have fun, but we take our work seriously.
          <br /> Scantily-clad female stylists who press their cleavage <br />
          in your face at the shampoo bowl?
          <br /> Sorry pal, you won¹t find that here.
        </p>
      </div>
      <div className="relative  xl:pl-3 sm:h-[1200px] sm:w-full md:h-[1700px] lg:h-[900px] lg:w-[600px] xl:h-[760px] xl:w-[400px]">
        <Image
          src={images.about1}
          alt="hairstyles"
          layout="fill"
          // ** Perfect for sm size (mobile)
          // width={200}
          // height={880} 
          objectFit="contain"
        />
      </div>
    </div>
    </div>
  );
};

export default AppWrap(MotionWrap(About, "about"));
