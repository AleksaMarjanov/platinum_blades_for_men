import React from "react";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { useTheme } from 'next-themes';
import { motion } from "framer-motion";

const SocialMedia = () => {
  const { theme } = useTheme();
   
  return (
    <div className={`flex justify-end items-end flex-row ${theme === 'light' ? 'filter invert' : ''}`}>
     <motion.button
      className="box text-white w-[40px] h-[40px] rounded-full m-1 border-solid border-slate-400"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
        <a href="https://twitter.com/beli1337" target="_blank" rel="noreferrer">
          <BsInstagram />
        </a>
    </motion.button>
     <motion.button
      className="box text-white w-[40px] h-[40px] rounded-full m-1 border-solid border-slate-400"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
        <a href="https://twitter.com/beli1337" target="_blank" rel="noreferrer">
          <BsFacebook/>
        </a>
    </motion.button>
      
    </div>
  );
};

export default SocialMedia;
