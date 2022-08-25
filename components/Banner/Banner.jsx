import Image from "next/image";
import images from '../../assets'
import { useTheme } from 'next-themes';
import { motion } from "framer-motion";
import Link from "next/link";


const Banner = ({ name, childStyles, parentStyle }) => {
  const { theme } = useTheme();
  
  return(
    <>
    <div className={`relative z-0 w-full flex justify-center items-center overflow-hidden ${parentStyle}`}> 
      <p className={`font-bold text-5xl sm:text-lg dark:text-white text-white font-poppins leading-70 absolute w-full flex justify-center items-center z-10 ${childStyles}`}>{name}</p>
      <Image className={`relative  ${theme === 'light' ? 'opacity-100' : 'opacity-70'}`} src={images.barbertools} objectFit="contain" width={1400} height={1400} alt="barber tools hero"/>
      <Link href='http://platinumbladesformen.booksy.com/'>
    <motion.button
      className="box absolute bottom-5 xs:m-2 sm:pt-2 sm:mb-5 rounded-full md:bottom-3 sm:bottom-0 lg:bottom-3 nft-gradient text-sm sm:text-xs minlg:text-lg py-2 px-6 minlg:px-8 sm:mt-5 font-poppins font-semibold text-white "
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >Book</motion.button>
      </Link>
    </div>
    </>
  )

}
 

  
  export default Banner;
  
  