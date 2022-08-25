import React, {useState, useEffect} from 'react'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

import { client, urlFor } from '../client'
import MotionWrap from '../Wrapper/MotionWrap.js';
import AppWrap from '../Wrapper/AppWrap.js';

const Testimonial = () => {
  const handleClick = ( index ) => {
    setCurrentIndex(index)
  }

  const { theme } = useTheme();
  const [testimonials, setTestimonials] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const query = '*[_type == "testimonials" ]';
    
    client.fetch(query).then((data) => {
      setTestimonials(data)
    })
  }, [])
  
  
  const test = testimonials[currentIndex];
  
  return (
    <div id="testimonials" className="flex pt-32 sm:pt-8 xs:pt-2 mb-5 justify-center items-center w-full flex-col">
      <motion.div
          whileInView={{ x: [-300, 0] }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="font-poppins flex justify-center items-center mb-16 sm:mb-4  text-6xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl xs:mb-5"
        >
          What people say about us{" "}
        </motion.div>
      {testimonials.length && (
        <>
        <div className={`w-[55%] xl:min-h-[320px] sm:w-full md:w-[80%] mt-16 sm:mt-8 xs:mt-2 shadow-xl flex flex-row p-5 rounded-2xl items-center justify-center ${theme === 'dark' ? 'bg-nft-dark' : 'bg-white'}`}>
          {test.imgurl && (
          <div className='sm:hidden md:hidden'>
          <Image src={`${urlFor(test?.imgurl)}`} 
          width={100}
          height={100}
          className="rounded-full"
          objectFit="cover"
          alt="testimonial" />
          </div>
          )}
          <div className="flex flex-col justify-center flex-start p-8 sm:p-0  h-full font-semibold">
            <p className='text-xl lg:text-2xl sm:text-lg'>{test.feedback}</p>
            <div>
              <h4 className="font-bold mt-5">{test.name}</h4>
            </div>
          </div>
        </div>

        <div className="flex flex-row mt-3 rounded-full m-5 sm:mb-5">
          <div 
          className=""
          onClick={() => 
          handleClick(
            currentIndex === 0
            ? testimonials.length - 1
            : currentIndex - 1
          )}
          >
            <HiChevronLeft className="w-[40px] h-[40px] dark:bg-slate-500 bg-slate-300 rounded-full mr-3 hover:bg-slate-400  dark:hover:bg-slate-700 cursor-pointer"/>
          </div>
          <div
          className=""
          onClick={() => 
          handleClick(
            currentIndex === testimonials.length - 1
            ? 0 
            : currentIndex + 1 
          )}
          >
            <HiChevronRight  className="w-[40px] h-[40px] dark:bg-slate-500 bg-slate-300 rounded-full ml-3 hover:bg-slate-400 dark:hover:bg-slate-700 cursor-pointer"/>
          </div>
        </div>
        </>
      )}
    </div>
  )
}


export default AppWrap(MotionWrap(Testimonial, "testimonials"))