import React from "react";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { useTheme } from 'next-themes';

const SocialMedia = () => {
  const { theme } = useTheme();
   
  return (
    <div className="flex justify-center items-center flex-row">
      <div className="w-[40px] h-[40px] rounded-full m-1 border-solid border-slate-400">
        <a href="https://twitter.com/beli1337" target="_blank" rel="noreferrer">
          <BsInstagram />
        </a>
      </div>
      <div className="w-[40px] h-[40px] rounded-full m-1 border-solid border-slate-400">
        <a
          href="https://github.com/AleksaMarjanov"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
