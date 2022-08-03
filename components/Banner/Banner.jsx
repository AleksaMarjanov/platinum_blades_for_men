import Image from "next/image";
import { useRouter } from "next/router";
import images from '../../assets'
import Button from "../Button/Button";
import { useTheme } from 'next-themes';



const Banner = ({ name, childStyles, parentStyle }) => {
  const router = useRouter()
  const { theme } = useTheme();
  
  return(
    <>
    <div className={`relative w-full flex items-center overflow-hidden ${parentStyle}`}> 
      <p className={`font-bold z-10 text-5xl text-white font-poppins leading-70 absolute  ${childStyles}`}>{name}</p>
      <Image className={`relative  ${theme === 'light' ? 'opacity-100' : 'opacity-60'}`} src={images.barbertools} objectFit="contain" alt="barber tools hero"/>
      <Button  btnName="Book" classStyles="absolute bottom-10 sm:pt-2 sm:pt-2 md:bottom-3 lg:bottom-3 rounded-full items-center justify-center cursor-pointer " handleClick={() => router.push('http://platinumbladesformen.booksy.com/')} />
    </div>
   
    </>
  )

}
 

  
  export default Banner;
  
  