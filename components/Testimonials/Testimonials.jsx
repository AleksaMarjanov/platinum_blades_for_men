import React, {useState, useEffect} from 'react'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Image from 'next/image';
import { useTheme } from 'next-themes';

import { client, urlFor } from '../../pages/client.js'

const Testimonials = () => {
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
    <div className="flex flex-1 items-center w-full flex-col">
      {testimonials.length && (
        <>
        <div className={`w-[60%] min-h-[320px] mt-16 flex flex-row p-5 rounded-2xl items-center justify-center ${theme === 'dark' ? 'bg-nft-dark' : 'bg-white'}`}>
          <Image src={`${urlFor(test.imgurl)}`} 
          layout="fixed"
          width={80}
          height={80}
          className="rounded-full"
          objectFit="cover"
          alt="testimonial" />
          <div className="flex flex-col pjustify-center flex-start flex-1 p-8 h-full">
            <p className='text-md lg:text-xl'>{test.feedback}</p>
            <div>
              <h4 className="font-bold mt-5">{test.name}</h4>
            </div>
          </div>
        </div>

        <div className="flex flex-row mt-3 rounded-full m-5">
          <div 
          className=""
          onClick={() => 
          handleClick(
            currentIndex === 0
            ? testimonials.length - 1
            : currentIndex - 1
          )}
          >
            <HiChevronLeft className="w-[20px] h-[20px] bg-slate-500 rounded-full mr-3 hover:bg-slate-400 cursor-pointer"/>
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
            <HiChevronRight  className="w-[20px] h-[20px] bg-slate-500 rounded-full ml-3 hover:bg-slate-400 cursor-pointer"/>
          </div>
        </div>
        </>
      )}
    </div>
  )
}

export default Testimonials