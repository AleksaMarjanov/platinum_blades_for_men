import React from "react";
import SocialMedia from "../SocialMedia";
import Image from "next/image";
import images from "../../assets";

const Footer = () => {
  return (
    <div className="p-5 -right-14 border-t-2 dark:bg-nft-dark bg-white  dark:border-nft-black-1 border-nft-gray-1">
      {/* <div className=" pb-0 flex flex-col justify-center items-center">
        <p className="text-xs text-left line lg:text-sm">
          @{new Date().getFullYear()} Aleksa
        </p>
        <p className="text-xs text-left line lg:text-sm mb-5">
          All rights reserved
        </p>
      </div> */}
<div className="flex flex-row space-x-2 items-center justify-center"> 
<Image 
      src={images.logo}
      width={160}
      height={160}
      className="rounded-full"
      alt="logo"
      />
      <p className="pb-8 font-poppins font-semibold text-sm">
        2112 4th Ave W<br />
        Suite 103 B<br />
        Williston 58801<br />
        (701) 895-8333<br/>
      </p>
      <p className=" font-semibold font-poppins text-md pl-14">
        HOURS:<br />
        Mon 3PM-7PM<br/>
        Tue-Fri 10AM-7PM<br />
        Sat 10AM-2PM<br />
        Sun Closed<br />

      </p>
</div>
          <div className="flex flexBetween">
          <p className="font-poppins">{new Date().getFullYear()}  @Aleksa All Rights Reserved</p>
            <SocialMedia />
          </div>
      </div>
  );
};

export default Footer;
