import React from "react";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { useTheme } from 'next-themes';
import { motion } from "framer-motion";

const SocialMedia = () => {
  const { theme } = useTheme();
   
  return (
    <div className={`flex justify-end items-center flex-col p-4 ${theme === 'light' ? 'filter invert' : ''} sm:hidden`}>
     <motion.button
      className={`box text-white w-[40px] h-[40px] m-1 rounded-full ${theme === 'dark' ? 'bg-nft-black-3' : 'bg-nft-black-1'}  border-solid border-nft-black-1 flex justify-center items-center ease-in-out`}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
        <a href="https://www.instagram.com/platinum_blades_for_men/" target="_blank" rel="noreferrer">
          <BsInstagram />
        </a>
    </motion.button>
     <motion.button
      className={`box text-white w-[40px] m-1 h-[40px] rounded-full ${theme === 'dark' ? 'bg-nft-black-3' : 'bg-nft-black-1'}  border-solid border-nft-black-1 flex justify-center items-center ease-in-out`}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
        <a href="https://www.facebook.com/Platinum-Blades-For-Men-116197351079939/" target="_blank" rel="noreferrer">
          <BsFacebook/>
        </a>
    </motion.button>
      
    </div>
  );
};

export default SocialMedia;
