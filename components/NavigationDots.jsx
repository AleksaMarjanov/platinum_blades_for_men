import React from "react";
import { useTheme } from "next-themes";

const NavigationDots = ({ active }) => {
const { theme } = useTheme();

  return (
    <div className="flex justify-center items-center flex-col p-4">
      {["home", "testimonials", "about", "services", "gallery", , "contact"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className={`w-[10px] h-[10px] rounded-full m-2 ${theme === 'dark' ? 'bg-white' : 'bg-nft-gray-2'} ease-in-out`}
            style={active === item ? { backgroundColor: "#313BAC" } : {}}
            
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
