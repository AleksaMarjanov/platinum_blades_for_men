import React, { useState, useEffect } from "react";
import MotionWrap from "../Wrapper/MotionWrap";
import AppWrap from "./../Wrapper/AppWrap";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../Map/Map"), {
  ssr: false,
});

const Contact = () => {
  return (
    <>
      <div id="contact" className="mt-24 sm:mb-16">
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
