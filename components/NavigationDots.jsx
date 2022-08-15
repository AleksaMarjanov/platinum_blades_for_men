import React from "react";
import { useTheme } from "next-themes";

const NavigationDots = ({ active }) => {
const { theme } = useTheme();

  const classes = `w-[10px] h-[10px] rounded-full bg-[#cbcbcb] m-2 ease-in-out hover:bg-secondary-color`

  // ${theme === 'dark' ? 'bg-white' : 'bg-nft-gray-2'} 

  return (
    <div className="flex justify-center items-center flex-col sm:hidden">
      {["home", "testimonials", "about", "services", "gallery", , "contact"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className={`${classes}`}
            style={active === item ? 'bg-nft-red-violet' : {}}
            
          />
        ))}
    </div>
  );
};

export default NavigationDots;
