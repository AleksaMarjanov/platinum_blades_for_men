import React from "react";
import Image from "next/image";
import images from "../../assets";

const Footer = () => {
  return (
    <div className="p-5 -right-14 border-t-2  dark:bg-nft-dark bg-white  dark:border-nft-black-1 border-nft-gray-1">
<div className="flex flex-row space-x-2 items-center justify-center"> 
<Image 
      src={images.logo}
      width={160}
      height={160}
      className="rounded-full"
      alt="logo"
      />
      <p className="pb-8 font-poppins font-semibold text-lg sm:text-xs sm:mt-5">
        2112 4th Ave W<br />
        Suite 103 B<br />
        Williston 58801<br />
        (701) 895-8333<br/>
      </p>
      <p className=" font-semibold font-poppins text-sm  pl-14 sm:text-xs pb-4 sm:pl-0">
        HOURS:<br />
        Mon 3PM-7PM<br/>
        Tue-Fri 10AM-7PM<br />
        Sat 10AM-2PM<br />
        Sun Closed<br />

      </p>
</div>
          <div className="flex flexBetween sm:text-xs sm:mt-3">
          <p className="font-poppins xs:font-sm">{new Date().getFullYear()}  @Aleksa All Rights Reserved | 
          <a className="hover:text-nft-gray-2 ease-in transition-all duration-300" href="https://marjanovdesignsolutions.com">Developed by Marjanov Design Solutions</a>
          </p>
          </div>
      </div>
  );
};

export default Footer;
