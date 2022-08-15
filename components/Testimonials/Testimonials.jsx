import React, {useState, useEffect} from 'react'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

import { client, urlFor } from '../../pages/client.js'
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
    <div id="testimonials" className="flex pt-32 flex-1 mb-5 justify-center items-center w-full flex-col">
      {testimonials.length && (
        <>
        <div className={`w-[55%] min-h-[320px] mt-16 shadow-xl flex flex-row p-5 rounded-2xl items-center justify-center ${theme === 'dark' ? 'bg-nft-dark' : 'bg-white'}`}>
          {test.imgurl && (
          <Image src={`${urlFor(test?.imgurl)}`} 
          // layout="fixed"
          width={100}
          height={100}
          className="rounded-full"
          objectFit="cover"
          alt="testimonial" />
          )}
          <div className="flex flex-col justify-center flex-start flex-1 p-8 h-full">
            <p className='text-xl lg:text-2xl'>{test.feedback}</p>
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