import React from "react";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { useTheme } from 'next-themes';

const SocialMedia = () => {
  const { theme } = useTheme();
   
  return (
    <div className="flex justify-center items-center flex-col p-4">
      <div className="w-[40px] h-[40px] rounded-full m-1 border-solid border-slate-400">
        <a href="https://twitter.com/beli1337" target="_blank" rel="noreferrer">
          <BsTwitter />
        </a>
      </div>
      <div className="w-[40px] h-[40px] rounded-full m-1 border-solid border-slate-400">
        <a
          href="https://github.com/AleksaMarjanov"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>
      <div className="w-[40px] h-[40px] rounded-fulllm-1 border-solid border-slate-400">
        <a
          href="https://www.linkedin.com/in/aleksamarjanov/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
