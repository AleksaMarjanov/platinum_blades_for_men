import React, { useState, useEffect } from "react";
import MotionWrap from "../Wrapper/MotionWrap";
import AppWrap from "./../Wrapper/AppWrap";
import dynamic from "next/dynamic";
import { motion } from 'framer-motion'

const Map = dynamic(() => import("../Map/Map"), {
  ssr: false,
});

const Contact = () => {
  return (
    <>
      <div id="contact" className="mt-24 sm:mb-16">
      <motion.div
            whileInView={{ x: [-300, 0] }}
                transition={{ duration: 0.85, ease: "easeOut" }}
                className="font-poppins flex mb-16 md:mb-8 sm:mb-4 justify-center items-center text-6xl lg:text-3xl md:text-3xl sm:text-3xl"
                >
                CONTACT{" "}
            </motion.div>
        <h2 className="flex flex-col justify-center items-center font-poppins text-2xl sm:text-md mb-5">
          Gift cards available for in store purchase
        </h2>
        <div id="map" className="">
          <Map />
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Contact, "contact"));
